package com.valeo.sslnextgen.base.logic;

import com.eva.base.dal.providers.PersistenceType;
import com.eva.base.workflow.logic.BaseWorkflowBusinessLogic;
import com.eva.base.exception.ValidationError;
import com.eva.base.workflow.util.WorkflowMetaInfo;
import com.eva.base.workflow.util.WorkflowUser;
import com.eva.base.authentication.logic.AppUserPrivilegeCache;
import com.eva.base.authentication.logic.IAppUserPrivilegeCache;
import com.valeo.sslnextgen.base.logic.IApplicationUserBLBase;
import com.valeo.sslnextgen.base.model.ApplicationUserBase;
import com.eva.base.cache.CacheManager;
import com.eva.base.service.changelog.ChangelogBLBaseImpl;
import com.eva.base.exception.NoAuthenticatedUserException;
import com.eva.base.workflow.util.WorkflowBasicInfo;
import java.util.Map;
import java.util.HashMap;
import com.eva.base.model.wrapper.UserPrivilegePerimeter;
import com.eva.base.mail.model.EmailAddress;
import com.valeo.sslnextgen.base.model.RequestBase;
import java.util.List;

import com.valeo.sslnextgen.base.model.RequestStatusoftherequest;

import org.apache.commons.lang3.StringUtils;

import java.util.Map;

import com.eva.base.mail.model.EmailDetails;

import com.eva.base.workflow.config.util.WorkflowNextActor;

import com.eva.base.util.ErrorCode;

import com.eva.base.util.MapUtil;

import com.eva.base.exception.EntityNotFoundException;

import java.util.Collections;

import java.util.ArrayList;


public class RequestBLBaseImpl<T extends RequestBase> extends BaseWorkflowBusinessLogic<T>
		implements IRequestBLBase<T> {
	private static final String ACTION_COMMENTS = "comments";
	
	private ChangelogBLBaseImpl changelogBL;
	
	private IApplicationUserBLBase<? extends ApplicationUserBase> userPrivilegeBL;
				
	private AppUserPrivilegeCache<ApplicationUserBase> userprivilegeCache = CacheManager.getInstance()
			.getCache(IAppUserPrivilegeCache.NAME);
			
	public RequestBLBaseImpl(Class<T> modelClass) {
		super(modelClass);
	}

	@Override
	public PersistenceType[] getOtherPersistenceTypes() {
		return new PersistenceType[] {PersistenceType.SEARCH};
	}
	@Override
	public final void onBeforeSave(PersistenceType type, T modelObj) {
		switch (type) {
			case DB:
				onBeforeSaveDB(modelObj);
				break;
						case SEARCH:
				onBeforeSaveSearch(modelObj);
				break;
			default:
				break;
		}
		super.onBeforeSave(type, modelObj);
	}

	public void onBeforeSaveDB(T modelObj) {
		isObjectExists(modelObj,false);
	}

	@Override
	public final void onBeforeUpdate(PersistenceType type, T modelObj) {
		switch (type) {
			case DB:
				onBeforeUpdateDB(modelObj);
				break;
			default:
				break;
		}
		super.onBeforeUpdate(type, modelObj);
	}

	public void onBeforeUpdateDB(T modelObj) {
		isObjectExists(modelObj,true);
	}
	
	protected void isObjectExists(T modelObj, boolean isUpdate) {
	}

	

	@Override
	public final void onAfterSave(PersistenceType type, Object modelObj) {
		super.onAfterSave(type, modelObj);
		switch (type) {
			case DB:
				onAfterSaveDB((T)modelObj);
				break;			
			default:
				break;
		}		
	}

	public void onAfterSaveDB(T modelObj) {
	  changelogBL.createChangeLog("Request", modelObj.getSid().toString(), "Saved", modelObj);
	}
	
	@Override
	public final void onAfterUpdate(PersistenceType type, Object modelObj) {		
		switch (type) {
			case DB:
				onAfterUpdateDB((T)modelObj);
				break;			
			default:
				break;
		}	
		super.onAfterUpdate(type, modelObj);	
	}

	public void onAfterUpdateDB(T modelObj) {
	  changelogBL.createChangeLog("Request", modelObj.getSid().toString(), "Updated", modelObj);
	}
	
	@Override
	public final void onAfterDelete(PersistenceType type, Object modelObj) {		
		switch (type) {
			case DB:
				onAfterDeleteDB((T)modelObj);
				break;			
			default:
				break;
		}
		super.onAfterDelete(type, modelObj);		
	}

	public void onAfterDeleteDB(T modelObj) {
	  changelogBL.createChangeLog("Request", modelObj.getSid().toString(), "Deleted", modelObj);
	}	
	
	@Override
	public List<String> onBeforeGeneratedValidation() {
		// TODO Auto-generated method stub
	return null;
	}
	@Override
	public void onAfterGeneratedValidation(List<ValidationError> validationErrors) {
		// TODO Auto-generated method stub
	}
		public void onBeforeSaveSearch(T modelObj) {}
	
	
	
			
	@Override
	public T validate(Object id, Map<String, Object> additionalInfo) {
		setWorkflowName(SSL_WORKFLOW);
		T model = getById(id);
		if(model == null) {
			throw new EntityNotFoundException(ErrorCode.WORKFLOW_MODEL_NOT_FOUND, new Object[] {id});
		}
		WorkflowMetaInfo metaInfo = createWorkflowMetaInfo(model, model.getStatusOfTheRequest().name().toLowerCase(), null,
				VALIDATE,MapUtil.readValueAsString(ACTION_COMMENTS, additionalInfo));
		metaInfo.addAllAdditionalInfo(additionalInfo);		
		metaInfo.setCurrentUser(getCurrentUser(model, metaInfo));
		metaInfo.setCurrentStepObj(validateStep(model, metaInfo));
		onbeforeValidate(model,metaInfo);
		onValidate(model,metaInfo);
		onAfterValidate(model,metaInfo);
		return model;
	}
	
	@Override
	public void onbeforeValidate(T model, WorkflowMetaInfo metaInfo){
		
	}
	
	@Override
	public void onValidate(T model, WorkflowMetaInfo metaInfo){
		metaInfo.setNextStep(resolveNextStep(model, metaInfo));
		metaInfo.setNextActors(resolveNextActor(model, metaInfo));
		setWorkflowFieldsInModel(model, metaInfo);
		update(model);
	}
	
	@Override
	public void onAfterValidate(T model, WorkflowMetaInfo metaInfo){
		createWorkflowHistory(model, metaInfo);
		sendEmail(model, metaInfo);
	}
	
	@Override
	public T demoteToRequester(Object id, Map<String, Object> additionalInfo) {
		setWorkflowName(SSL_WORKFLOW);
		T model = getById(id);
		if(model == null) {
			throw new EntityNotFoundException(ErrorCode.WORKFLOW_MODEL_NOT_FOUND, new Object[] {id});
		}
		WorkflowMetaInfo metaInfo = createWorkflowMetaInfo(model, model.getStatusOfTheRequest().name().toLowerCase(), null,
				DEMOTE_TO_REQUESTER,MapUtil.readValueAsString(ACTION_COMMENTS, additionalInfo));
		metaInfo.addAllAdditionalInfo(additionalInfo);		
		metaInfo.setCurrentUser(getCurrentUser(model, metaInfo));
		metaInfo.setCurrentStepObj(validateStep(model, metaInfo));
		onbeforeDemoteToRequester(model,metaInfo);
		onDemoteToRequester(model,metaInfo);
		onAfterDemoteToRequester(model,metaInfo);
		return model;
	}
	
	@Override
	public void onbeforeDemoteToRequester(T model, WorkflowMetaInfo metaInfo){
		
	}
	
	@Override
	public void onDemoteToRequester(T model, WorkflowMetaInfo metaInfo){
		metaInfo.setNextStep(resolveNextStep(model, metaInfo));
		metaInfo.setNextActors(resolveNextActor(model, metaInfo));
		setWorkflowFieldsInModel(model, metaInfo);
		update(model);
	}
	
	@Override
	public void onAfterDemoteToRequester(T model, WorkflowMetaInfo metaInfo){
		createWorkflowHistory(model, metaInfo);
		sendEmail(model, metaInfo);
	}
	
	@Override
	public T demoteToScheduler(Object id, Map<String, Object> additionalInfo) {
		setWorkflowName(SSL_WORKFLOW);
		T model = getById(id);
		if(model == null) {
			throw new EntityNotFoundException(ErrorCode.WORKFLOW_MODEL_NOT_FOUND, new Object[] {id});
		}
		WorkflowMetaInfo metaInfo = createWorkflowMetaInfo(model, model.getStatusOfTheRequest().name().toLowerCase(), null,
				DEMOTE_TO_SCHEDULER,MapUtil.readValueAsString(ACTION_COMMENTS, additionalInfo));
		metaInfo.addAllAdditionalInfo(additionalInfo);		
		metaInfo.setCurrentUser(getCurrentUser(model, metaInfo));
		metaInfo.setCurrentStepObj(validateStep(model, metaInfo));
		onbeforeDemoteToScheduler(model,metaInfo);
		onDemoteToScheduler(model,metaInfo);
		onAfterDemoteToScheduler(model,metaInfo);
		return model;
	}
	
	@Override
	public void onbeforeDemoteToScheduler(T model, WorkflowMetaInfo metaInfo){
		
	}
	
	@Override
	public void onDemoteToScheduler(T model, WorkflowMetaInfo metaInfo){
		metaInfo.setNextStep(resolveNextStep(model, metaInfo));
		metaInfo.setNextActors(resolveNextActor(model, metaInfo));
		setWorkflowFieldsInModel(model, metaInfo);
		update(model);
	}
	
	@Override
	public void onAfterDemoteToScheduler(T model, WorkflowMetaInfo metaInfo){
		createWorkflowHistory(model, metaInfo);
		sendEmail(model, metaInfo);
	}
	
	@Override
	public T submitToApprover(Object id, Map<String, Object> additionalInfo) {
		setWorkflowName(SSL_WORKFLOW);
		T model = getById(id);
		if(model == null) {
			throw new EntityNotFoundException(ErrorCode.WORKFLOW_MODEL_NOT_FOUND, new Object[] {id});
		}
		WorkflowMetaInfo metaInfo = createWorkflowMetaInfo(model, model.getStatusOfTheRequest().name().toLowerCase(), null,
				SUBMIT_TO_APPROVER,MapUtil.readValueAsString(ACTION_COMMENTS, additionalInfo));
		metaInfo.addAllAdditionalInfo(additionalInfo);		
		metaInfo.setCurrentUser(getCurrentUser(model, metaInfo));
		metaInfo.setCurrentStepObj(validateStep(model, metaInfo));
		onbeforeSubmitToApprover(model,metaInfo);
		onSubmitToApprover(model,metaInfo);
		onAfterSubmitToApprover(model,metaInfo);
		return model;
	}
	
	@Override
	public void onbeforeSubmitToApprover(T model, WorkflowMetaInfo metaInfo){
		
	}
	
	@Override
	public void onSubmitToApprover(T model, WorkflowMetaInfo metaInfo){
		metaInfo.setNextStep(resolveNextStep(model, metaInfo));
		metaInfo.setNextActors(resolveNextActor(model, metaInfo));
		setWorkflowFieldsInModel(model, metaInfo);
		update(model);
	}
	
	@Override
	public void onAfterSubmitToApprover(T model, WorkflowMetaInfo metaInfo){
		createWorkflowHistory(model, metaInfo);
		sendEmail(model, metaInfo);
	}
	
	@Override
	public T submit(Object id, Map<String, Object> additionalInfo) {
		setWorkflowName(SSL_WORKFLOW);
		T model = getById(id);
		if(model == null) {
			throw new EntityNotFoundException(ErrorCode.WORKFLOW_MODEL_NOT_FOUND, new Object[] {id});
		}
		WorkflowMetaInfo metaInfo = createWorkflowMetaInfo(model, model.getStatusOfTheRequest().name().toLowerCase(), null,
				SUBMIT,MapUtil.readValueAsString(ACTION_COMMENTS, additionalInfo));
		metaInfo.addAllAdditionalInfo(additionalInfo);		
		metaInfo.setCurrentUser(getCurrentUser(model, metaInfo));
		metaInfo.setCurrentStepObj(validateStep(model, metaInfo));
		onbeforeSubmit(model,metaInfo);
		onSubmit(model,metaInfo);
		onAfterSubmit(model,metaInfo);
		return model;
	}
	
	@Override
	public void onbeforeSubmit(T model, WorkflowMetaInfo metaInfo){
		
	}
	
	@Override
	public void onSubmit(T model, WorkflowMetaInfo metaInfo){
		metaInfo.setNextStep(resolveNextStep(model, metaInfo));
		metaInfo.setNextActors(resolveNextActor(model, metaInfo));
		setWorkflowFieldsInModel(model, metaInfo);
		update(model);
	}
	
	@Override
	public void onAfterSubmit(T model, WorkflowMetaInfo metaInfo){
		createWorkflowHistory(model, metaInfo);
		sendEmail(model, metaInfo);
	}
	
	@Override
	public T assign(Object id, Map<String, Object> additionalInfo) {
		setWorkflowName(SSL_WORKFLOW);
		T model = getById(id);
		if(model == null) {
			throw new EntityNotFoundException(ErrorCode.WORKFLOW_MODEL_NOT_FOUND, new Object[] {id});
		}
		WorkflowMetaInfo metaInfo = createWorkflowMetaInfo(model, model.getStatusOfTheRequest().name().toLowerCase(), null,
				ASSIGN,MapUtil.readValueAsString(ACTION_COMMENTS, additionalInfo));
		metaInfo.addAllAdditionalInfo(additionalInfo);		
		metaInfo.setCurrentUser(getCurrentUser(model, metaInfo));
		metaInfo.setCurrentStepObj(validateStep(model, metaInfo));
		onbeforeAssign(model,metaInfo);
		onAssign(model,metaInfo);
		onAfterAssign(model,metaInfo);
		return model;
	}
	
	@Override
	public void onbeforeAssign(T model, WorkflowMetaInfo metaInfo){
		
	}
	
	@Override
	public void onAssign(T model, WorkflowMetaInfo metaInfo){
		metaInfo.setNextStep(resolveNextStep(model, metaInfo));
		metaInfo.setNextActors(resolveNextActor(model, metaInfo));
		setWorkflowFieldsInModel(model, metaInfo);
		update(model);
	}
	
	@Override
	public void onAfterAssign(T model, WorkflowMetaInfo metaInfo){
		createWorkflowHistory(model, metaInfo);
		sendEmail(model, metaInfo);
	}
	
	@Override
	public T cancel(Object id, Map<String, Object> additionalInfo) {
		setWorkflowName(SSL_WORKFLOW);
		T model = getById(id);
		if(model == null) {
			throw new EntityNotFoundException(ErrorCode.WORKFLOW_MODEL_NOT_FOUND, new Object[] {id});
		}
		WorkflowMetaInfo metaInfo = createWorkflowMetaInfo(model, model.getStatusOfTheRequest().name().toLowerCase(), null,
				CANCEL,MapUtil.readValueAsString(ACTION_COMMENTS, additionalInfo));
		metaInfo.addAllAdditionalInfo(additionalInfo);		
		metaInfo.setCurrentUser(getCurrentUser(model, metaInfo));
		metaInfo.setCurrentStepObj(validateStep(model, metaInfo));
		onbeforeCancel(model,metaInfo);
		onCancel(model,metaInfo);
		onAfterCancel(model,metaInfo);
		return model;
	}
	
	@Override
	public void onbeforeCancel(T model, WorkflowMetaInfo metaInfo){
		
	}
	
	@Override
	public void onCancel(T model, WorkflowMetaInfo metaInfo){
		metaInfo.setNextStep(resolveNextStep(model, metaInfo));
		metaInfo.setNextActors(resolveNextActor(model, metaInfo));
		setWorkflowFieldsInModel(model, metaInfo);
		update(model);
	}
	
	@Override
	public void onAfterCancel(T model, WorkflowMetaInfo metaInfo){
		createWorkflowHistory(model, metaInfo);
		sendEmail(model, metaInfo);
	}
	
	@Override
	public T demoteToLeader(Object id, Map<String, Object> additionalInfo) {
		setWorkflowName(SSL_WORKFLOW);
		T model = getById(id);
		if(model == null) {
			throw new EntityNotFoundException(ErrorCode.WORKFLOW_MODEL_NOT_FOUND, new Object[] {id});
		}
		WorkflowMetaInfo metaInfo = createWorkflowMetaInfo(model, model.getStatusOfTheRequest().name().toLowerCase(), null,
				DEMOTE_TO_LEADER,MapUtil.readValueAsString(ACTION_COMMENTS, additionalInfo));
		metaInfo.addAllAdditionalInfo(additionalInfo);		
		metaInfo.setCurrentUser(getCurrentUser(model, metaInfo));
		metaInfo.setCurrentStepObj(validateStep(model, metaInfo));
		onbeforeDemoteToLeader(model,metaInfo);
		onDemoteToLeader(model,metaInfo);
		onAfterDemoteToLeader(model,metaInfo);
		return model;
	}
	
	@Override
	public void onbeforeDemoteToLeader(T model, WorkflowMetaInfo metaInfo){
		
	}
	
	@Override
	public void onDemoteToLeader(T model, WorkflowMetaInfo metaInfo){
		metaInfo.setNextStep(resolveNextStep(model, metaInfo));
		metaInfo.setNextActors(resolveNextActor(model, metaInfo));
		setWorkflowFieldsInModel(model, metaInfo);
		update(model);
	}
	
	@Override
	public void onAfterDemoteToLeader(T model, WorkflowMetaInfo metaInfo){
		createWorkflowHistory(model, metaInfo);
		sendEmail(model, metaInfo);
	}
	
	@Override
	public T approveToLeader(Object id, Map<String, Object> additionalInfo) {
		setWorkflowName(SSL_WORKFLOW);
		T model = getById(id);
		if(model == null) {
			throw new EntityNotFoundException(ErrorCode.WORKFLOW_MODEL_NOT_FOUND, new Object[] {id});
		}
		WorkflowMetaInfo metaInfo = createWorkflowMetaInfo(model, model.getStatusOfTheRequest().name().toLowerCase(), null,
				APPROVE_TO_LEADER,MapUtil.readValueAsString(ACTION_COMMENTS, additionalInfo));
		metaInfo.addAllAdditionalInfo(additionalInfo);		
		metaInfo.setCurrentUser(getCurrentUser(model, metaInfo));
		metaInfo.setCurrentStepObj(validateStep(model, metaInfo));
		onbeforeApproveToLeader(model,metaInfo);
		onApproveToLeader(model,metaInfo);
		onAfterApproveToLeader(model,metaInfo);
		return model;
	}
	
	@Override
	public void onbeforeApproveToLeader(T model, WorkflowMetaInfo metaInfo){
		
	}
	
	@Override
	public void onApproveToLeader(T model, WorkflowMetaInfo metaInfo){
		metaInfo.setNextStep(resolveNextStep(model, metaInfo));
		metaInfo.setNextActors(resolveNextActor(model, metaInfo));
		setWorkflowFieldsInModel(model, metaInfo);
		update(model);
	}
	
	@Override
	public void onAfterApproveToLeader(T model, WorkflowMetaInfo metaInfo){
		createWorkflowHistory(model, metaInfo);
		sendEmail(model, metaInfo);
	}


	@Override
	protected WorkflowUser getCurrentUser(T model, WorkflowMetaInfo metaInfo) {
		ApplicationUserBase userPrivilege = userprivilegeCache.getCurrentUser(false);
		if (userPrivilege == null || StringUtils.isBlank(userPrivilege.getEmail())) {
			throw new NoAuthenticatedUserException(ErrorCode.CURRENT_USER_NOT_FOUND);
		}
		WorkflowUser user = new WorkflowUser(userPrivilege);
		metaInfo.setCurrentUser(user);
		user.setUserTypes(getWorkflowPerimeterManager().getUserTypesForWorkflow(userPrivilege, model, metaInfo));
		return user;
	}
	
	@Override
	protected void setWorkflowFieldsInModel(T model, WorkflowMetaInfo metaInfo) {
				model.setStatusOfTheRequest(RequestStatusoftherequest.valueOf(metaInfo.getNextStep().toUpperCase()));
		model.setNextActor(metaInfo.getNextActors());
	}
	
	@Override
	protected String resolveCustomNextStep(T model, WorkflowMetaInfo metaInfo) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	protected List<WorkflowNextActor> resolveCustomNextActor(T model, WorkflowMetaInfo metaInfo) {
		// TODO Auto-generated method stub
		return Collections.emptyList();
	}

	@Override
	protected void setEmailContentMap(T model, WorkflowMetaInfo metaInfo, Map<String, Object> dataMap) {
		// TODO Auto-generated method stub
	}

	@Override
	protected void setEmailDetails(T model, WorkflowMetaInfo metaInfo, EmailDetails emailDetails) {
		// TODO Auto-generated method stub
	}
	
	@Override
	protected List<EmailAddress> resolveCustomActorForEmail(T model, WorkflowMetaInfo metaInfo,MailRecipientType recipientType) {
		// TODO Auto-generated method stub
		return Collections.emptyList();
	}
	
	@Override
	public T getRequestWorkflowModelBySid(Object id) {
		T model = getById(id);
		if (model != null) {
			ApplicationUserBase userPrivilege = userprivilegeCache.getCurrentUser(false);
			if (userPrivilege == null || StringUtils.isBlank(userPrivilege.getEmail())) {
				throw new NoAuthenticatedUserException(ErrorCode.CURRENT_USER_NOT_FOUND);
			}
			Map<String, WorkflowBasicInfo> workflowInfo = new HashMap<>();
			if(model.getStatusOfTheRequest() != null){
				workflowInfo.put(SSL_WORKFLOW, new WorkflowBasicInfo(StringUtils.lowerCase(model.getStatusOfTheRequest().name()),
					getWorkflowPerimeterManager().getUserTypesForWorkflow(userPrivilege, model, null)));
			}
			model.setWorkflowInfo(workflowInfo);
		}
		return model;
	}

	
	@Override
	protected List<EmailAddress> resolveActorForEmailFromAppRole(T model, WorkflowMetaInfo metaInfo,
			UserPrivilegePerimeter perimeterInfo) {
	switch (perimeterInfo.getRoleShortName()) {
		case "devadmin":
			break;
		case "leader":
			break;
		case "scheduler":
			break;
		case "approver":
			break;
		case "viewer":
			break;
		case "admin":
			break;
		case "requester ":
			break;
	}
	return userPrivilegeBL.getUsersByRole(perimeterInfo,0,0);
	}
	
	public void setChangelogBL(ChangelogBLBaseImpl changelogBL) {
		this.changelogBL=changelogBL;
	}
	
	public void setUserPrivilegeBL(IApplicationUserBLBase<? extends ApplicationUserBase> userPrivilegeBL) {
	    this.userPrivilegeBL = userPrivilegeBL;
	}
}