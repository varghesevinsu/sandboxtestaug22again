package com.valeo.sslnextgen.base.logic;

import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import com.eva.base.dal.providers.PersistenceType;
import com.eva.base.acl.AllowedFields;
import com.eva.base.authentication.logic.AppUserPrivilegeCache;
import com.eva.base.authentication.logic.IAppUserPrivilegeCache;
import com.eva.base.cache.CacheManager;
import com.eva.base.acl.IPerimeterManager;
import com.valeo.sslnextgen.base.model.RequestBase;
import com.valeo.sslnextgen.base.model.ApplicationUserBase;
import com.eva.base.acl.IWorkflowPerimeterManager;
import com.eva.base.workflow.util.WorkflowMetaInfo;
import com.eva.base.authentication.UserPrivilege;
import java.util.Collections;
import com.eva.base.util.FieldUtils;

public abstract class RequestPerimeterBaseImpl<T extends RequestBase> implements IWorkflowPerimeterManager<T> {
	
	protected AppUserPrivilegeCache userCache = CacheManager.getInstance().getCache(IAppUserPrivilegeCache.NAME);
	@Override
	public boolean canCreate(T model) {
		ApplicationUserBase userBase = (ApplicationUserBase) userCache.getCurrentUser();
		if (userBase.isDevAdmin()) { return true; }
		
		return false;
	}

	@Override
	public boolean canUpdate(T model) {
		ApplicationUserBase userBase = (ApplicationUserBase) userCache.getCurrentUser();
		if (userBase.isDevAdmin()) { return true; }
		
		return false;
	}

	@Override
	public boolean canDelete(T model) {
		ApplicationUserBase userBase = (ApplicationUserBase) userCache.getCurrentUser();
		if (userBase.isDevAdmin()) { return true; }
		
		return false;
	}

	@Override
	public boolean canRead(T model) {
		ApplicationUserBase userBase = (ApplicationUserBase) userCache.getCurrentUser();
		if (userBase.isDevAdmin()) { return true; }
		
		return false;
	}

	@Override
	public String getAccessQuery(PersistenceType type) {
		return null;
	}

	@Override
	public AllowedFields getSelectFields(PersistenceType type) {
		AllowedFields allowedFields = new AllowedFields();
		ApplicationUserBase userBase = (ApplicationUserBase) userCache.getCurrentUser();
		setReadFields(userBase, allowedFields);
		setWriteFields(userBase, allowedFields);
		return allowedFields;
	}
	
	protected void setReadFields(ApplicationUserBase userBase, AllowedFields allowedFields) {
		List<String> allowedAccessFields = new ArrayList<>();
		allowedAccessFields.addAll(getTechnicalFields());
		if(userBase.isDevAdmin()) {
			allowedAccessFields.add("*");
			allowedFields.setAllowedReadFields(allowedAccessFields);
			return;
		}
					if (userBase.isLeader()) {
			String[] readFields = new String[] {"boardNumber","name","orgalocToBeInvoiced","commentsTravelExtraCosts","tasks","businessController","totalBudget","budgetTool","place","otherSubActivityStatus","tool","createdDate","budgetManpower2","nameCode","statusOfTheRequest","osaNameToBeCreatedInStr","commentsToolExtraCosts","hoursTool","prjOaEntity","dummyTest","projectManagerOrActivityLeader","schedulerName","internalPoNumber","otherBudget2","nameOfTheRequest","stCodeLocation","panelization","prjOaCode","schedulerAdditionalInformation","modifiedDate","travelExtraCosts","budgetManpower","dummy2","currency","additionnalCost2","createdBy","budgetTool2","purchasingEntityCode","sapTypeOfCostForExternal","sapRdCost","selletEntityCode","watcher","leader","rate","schedulerProposedStartDate","metier","namecode","schedulerProposedEndDate","otherActivityCode","subName","sapTypeOfCostForInternal","leadPlaceOfDevelopment","sid","boardName","globalBudget","additionnalCost","areLeftRightDesign","requestCode","location","prOrActivityName","rateManpower2","osaStatus","projectOrActivity","functionalNetwork","toolExtraCosts","technicalOffredBy","hoursManpower","stCodeLocation2","bgStr","otherBudget","requestedEndDate","hoursTool2","hoursManpower2","extraCost","prjOaPm","budget","requestedStartDate","quoteNo","secondPlaceOfDevelopment","closingDate","quotationDescription","hours","additionalInformation","projectNameAsInEdrm","serviceType","intercoPartnerCode","estimatedDurationInHours","sapCategory","projectType","requesterOrgaloc","requestName","linkToQuotation","emcLab","totalBudget2","schedulerCurrency","linkToSpecifications","tasks2","dummy","modifiedBy","requester","scheduler","rateManpower"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

			if (userBase.isScheduler()) {
			String[] readFields = new String[] {"boardNumber","name","orgalocToBeInvoiced","commentsTravelExtraCosts","tasks","businessController","totalBudget","budgetTool","place","otherSubActivityStatus","tool","createdDate","budgetManpower2","nameCode","statusOfTheRequest","osaNameToBeCreatedInStr","commentsToolExtraCosts","hoursTool","prjOaEntity","dummyTest","projectManagerOrActivityLeader","schedulerName","internalPoNumber","otherBudget2","nameOfTheRequest","stCodeLocation","panelization","prjOaCode","schedulerAdditionalInformation","modifiedDate","travelExtraCosts","budgetManpower","dummy2","currency","additionnalCost2","createdBy","budgetTool2","purchasingEntityCode","sapTypeOfCostForExternal","sapRdCost","selletEntityCode","watcher","leader","rate","schedulerProposedStartDate","metier","namecode","schedulerProposedEndDate","otherActivityCode","subName","sapTypeOfCostForInternal","leadPlaceOfDevelopment","sid","boardName","globalBudget","additionnalCost","areLeftRightDesign","requestCode","location","prOrActivityName","rateManpower2","osaStatus","projectOrActivity","functionalNetwork","toolExtraCosts","technicalOffredBy","hoursManpower","stCodeLocation2","bgStr","otherBudget","requestedEndDate","hoursTool2","hoursManpower2","extraCost","prjOaPm","budget","requestedStartDate","quoteNo","secondPlaceOfDevelopment","closingDate","quotationDescription","hours","additionalInformation","projectNameAsInEdrm","serviceType","intercoPartnerCode","estimatedDurationInHours","sapCategory","projectType","requesterOrgaloc","requestName","linkToQuotation","emcLab","totalBudget2","schedulerCurrency","linkToSpecifications","tasks2","dummy","modifiedBy","requester","scheduler","rateManpower"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

			if (userBase.isApprover()) {
			String[] readFields = new String[] {"boardNumber","name","orgalocToBeInvoiced","commentsTravelExtraCosts","tasks","businessController","totalBudget","budgetTool","place","otherSubActivityStatus","tool","createdDate","budgetManpower2","nameCode","statusOfTheRequest","osaNameToBeCreatedInStr","commentsToolExtraCosts","hoursTool","prjOaEntity","dummyTest","projectManagerOrActivityLeader","schedulerName","internalPoNumber","otherBudget2","nameOfTheRequest","stCodeLocation","panelization","prjOaCode","schedulerAdditionalInformation","modifiedDate","travelExtraCosts","budgetManpower","dummy2","currency","additionnalCost2","createdBy","budgetTool2","purchasingEntityCode","sapTypeOfCostForExternal","sapRdCost","selletEntityCode","watcher","leader","rate","schedulerProposedStartDate","metier","namecode","schedulerProposedEndDate","otherActivityCode","subName","sapTypeOfCostForInternal","leadPlaceOfDevelopment","sid","boardName","globalBudget","additionnalCost","areLeftRightDesign","requestCode","location","prOrActivityName","rateManpower2","osaStatus","projectOrActivity","functionalNetwork","toolExtraCosts","technicalOffredBy","hoursManpower","stCodeLocation2","bgStr","otherBudget","requestedEndDate","hoursTool2","hoursManpower2","extraCost","prjOaPm","budget","requestedStartDate","quoteNo","secondPlaceOfDevelopment","closingDate","quotationDescription","hours","additionalInformation","projectNameAsInEdrm","serviceType","intercoPartnerCode","estimatedDurationInHours","sapCategory","projectType","requesterOrgaloc","requestName","linkToQuotation","emcLab","totalBudget2","schedulerCurrency","linkToSpecifications","tasks2","dummy","modifiedBy","requester","scheduler","rateManpower"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

			if (userBase.isViewer()) {
			String[] readFields = new String[] {"boardNumber","name","orgalocToBeInvoiced","commentsTravelExtraCosts","tasks","businessController","totalBudget","budgetTool","place","otherSubActivityStatus","tool","createdDate","budgetManpower2","nameCode","statusOfTheRequest","osaNameToBeCreatedInStr","commentsToolExtraCosts","hoursTool","prjOaEntity","dummyTest","projectManagerOrActivityLeader","schedulerName","internalPoNumber","otherBudget2","nameOfTheRequest","stCodeLocation","panelization","prjOaCode","schedulerAdditionalInformation","modifiedDate","travelExtraCosts","budgetManpower","dummy2","currency","additionnalCost2","createdBy","budgetTool2","purchasingEntityCode","sapTypeOfCostForExternal","sapRdCost","selletEntityCode","watcher","leader","rate","schedulerProposedStartDate","metier","namecode","schedulerProposedEndDate","otherActivityCode","subName","sapTypeOfCostForInternal","leadPlaceOfDevelopment","sid","boardName","globalBudget","additionnalCost","areLeftRightDesign","requestCode","location","prOrActivityName","rateManpower2","osaStatus","projectOrActivity","functionalNetwork","toolExtraCosts","technicalOffredBy","hoursManpower","stCodeLocation2","bgStr","otherBudget","requestedEndDate","hoursTool2","hoursManpower2","extraCost","prjOaPm","budget","requestedStartDate","quoteNo","secondPlaceOfDevelopment","closingDate","quotationDescription","hours","additionalInformation","projectNameAsInEdrm","serviceType","intercoPartnerCode","estimatedDurationInHours","sapCategory","projectType","requesterOrgaloc","requestName","linkToQuotation","emcLab","totalBudget2","schedulerCurrency","linkToSpecifications","tasks2","dummy","modifiedBy","requester","scheduler","rateManpower"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

			if (userBase.isAdmin()) {
			String[] readFields = new String[] {"boardNumber","name","orgalocToBeInvoiced","commentsTravelExtraCosts","tasks","businessController","totalBudget","budgetTool","place","otherSubActivityStatus","tool","createdDate","budgetManpower2","nameCode","statusOfTheRequest","osaNameToBeCreatedInStr","commentsToolExtraCosts","hoursTool","prjOaEntity","dummyTest","projectManagerOrActivityLeader","schedulerName","internalPoNumber","otherBudget2","nameOfTheRequest","stCodeLocation","panelization","prjOaCode","schedulerAdditionalInformation","modifiedDate","travelExtraCosts","budgetManpower","dummy2","currency","additionnalCost2","createdBy","budgetTool2","purchasingEntityCode","sapTypeOfCostForExternal","sapRdCost","selletEntityCode","watcher","leader","rate","schedulerProposedStartDate","metier","namecode","schedulerProposedEndDate","otherActivityCode","subName","sapTypeOfCostForInternal","leadPlaceOfDevelopment","sid","boardName","globalBudget","additionnalCost","areLeftRightDesign","requestCode","location","prOrActivityName","rateManpower2","osaStatus","projectOrActivity","functionalNetwork","toolExtraCosts","technicalOffredBy","hoursManpower","stCodeLocation2","bgStr","otherBudget","requestedEndDate","hoursTool2","hoursManpower2","extraCost","prjOaPm","budget","requestedStartDate","quoteNo","secondPlaceOfDevelopment","closingDate","quotationDescription","hours","additionalInformation","projectNameAsInEdrm","serviceType","intercoPartnerCode","estimatedDurationInHours","sapCategory","projectType","requesterOrgaloc","requestName","linkToQuotation","emcLab","totalBudget2","schedulerCurrency","linkToSpecifications","tasks2","dummy","modifiedBy","requester","scheduler","rateManpower"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

			if (userBase.isRequester()) {
			String[] readFields = new String[] {"boardNumber","name","orgalocToBeInvoiced","commentsTravelExtraCosts","tasks","businessController","totalBudget","budgetTool","place","otherSubActivityStatus","tool","createdDate","budgetManpower2","nameCode","statusOfTheRequest","osaNameToBeCreatedInStr","commentsToolExtraCosts","hoursTool","prjOaEntity","dummyTest","projectManagerOrActivityLeader","schedulerName","internalPoNumber","otherBudget2","nameOfTheRequest","stCodeLocation","panelization","prjOaCode","schedulerAdditionalInformation","modifiedDate","travelExtraCosts","budgetManpower","dummy2","currency","additionnalCost2","createdBy","budgetTool2","purchasingEntityCode","sapTypeOfCostForExternal","sapRdCost","selletEntityCode","watcher","leader","rate","schedulerProposedStartDate","metier","namecode","schedulerProposedEndDate","otherActivityCode","subName","sapTypeOfCostForInternal","leadPlaceOfDevelopment","sid","boardName","globalBudget","additionnalCost","areLeftRightDesign","requestCode","location","prOrActivityName","rateManpower2","osaStatus","projectOrActivity","functionalNetwork","toolExtraCosts","technicalOffredBy","hoursManpower","stCodeLocation2","bgStr","otherBudget","requestedEndDate","hoursTool2","hoursManpower2","extraCost","prjOaPm","budget","requestedStartDate","quoteNo","secondPlaceOfDevelopment","closingDate","quotationDescription","hours","additionalInformation","projectNameAsInEdrm","serviceType","intercoPartnerCode","estimatedDurationInHours","sapCategory","projectType","requesterOrgaloc","requestName","linkToQuotation","emcLab","totalBudget2","schedulerCurrency","linkToSpecifications","tasks2","dummy","modifiedBy","requester","scheduler","rateManpower"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

		allowedFields.setAllowedReadFields(allowedAccessFields);
	}
	protected void setWriteFields(ApplicationUserBase userBase, AllowedFields allowedFields) {
		List<String> allowedAccessFields = new ArrayList<>();
		allowedAccessFields.addAll(getTechnicalFields());
		if(userBase.isDevAdmin()) {
			allowedAccessFields.add("*");
			allowedFields.setAllowedWriteFields(allowedAccessFields);
			return;
		}
					if (userBase.isLeader()) {
			String[] readFields = new String[] {"commentsTravelExtraCosts","tasks","totalBudget","budgetTool","place","otherSubActivityStatus","tool","createdDate","commentsToolExtraCosts","hoursTool","dummyTest","internalPoNumber","stCodeLocation","modifiedDate","travelExtraCosts","dummy2","createdBy","budgetTool2","purchasingEntityCode","sapTypeOfCostForExternal","sapRdCost","selletEntityCode","watcher","rate","metier","otherActivityCode","sapTypeOfCostForInternal","sid","location","prOrActivityName","rateManpower2","osaStatus","toolExtraCosts","technicalOffredBy","stCodeLocation2","bgStr","otherBudget","requestedEndDate","hoursTool2","extraCost","budget","requestedStartDate","closingDate","hours","intercoPartnerCode","sapCategory","tasks2","dummy","modifiedBy"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

			if (userBase.isScheduler()) {
			String[] readFields = new String[] {"commentsTravelExtraCosts","tasks","totalBudget","budgetTool","place","otherSubActivityStatus","tool","createdDate","commentsToolExtraCosts","hoursTool","dummyTest","internalPoNumber","stCodeLocation","modifiedDate","travelExtraCosts","dummy2","createdBy","budgetTool2","purchasingEntityCode","sapTypeOfCostForExternal","sapRdCost","selletEntityCode","watcher","rate","metier","otherActivityCode","sapTypeOfCostForInternal","sid","location","prOrActivityName","rateManpower2","osaStatus","toolExtraCosts","technicalOffredBy","stCodeLocation2","bgStr","otherBudget","requestedEndDate","hoursTool2","extraCost","budget","requestedStartDate","closingDate","hours","intercoPartnerCode","sapCategory","tasks2","dummy","modifiedBy"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

			if (userBase.isApprover()) {
			String[] readFields = new String[] {"commentsTravelExtraCosts","tasks","totalBudget","budgetTool","place","otherSubActivityStatus","tool","createdDate","commentsToolExtraCosts","hoursTool","dummyTest","internalPoNumber","stCodeLocation","modifiedDate","travelExtraCosts","dummy2","createdBy","budgetTool2","purchasingEntityCode","sapTypeOfCostForExternal","sapRdCost","selletEntityCode","watcher","rate","metier","otherActivityCode","sapTypeOfCostForInternal","sid","location","prOrActivityName","rateManpower2","osaStatus","toolExtraCosts","technicalOffredBy","stCodeLocation2","bgStr","otherBudget","requestedEndDate","hoursTool2","extraCost","budget","requestedStartDate","closingDate","hours","intercoPartnerCode","sapCategory","tasks2","dummy","modifiedBy"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

			if (userBase.isViewer()) {
			String[] readFields = new String[] {"commentsTravelExtraCosts","tasks","totalBudget","budgetTool","place","otherSubActivityStatus","tool","createdDate","commentsToolExtraCosts","hoursTool","dummyTest","internalPoNumber","stCodeLocation","modifiedDate","travelExtraCosts","dummy2","createdBy","budgetTool2","purchasingEntityCode","sapTypeOfCostForExternal","sapRdCost","selletEntityCode","watcher","rate","metier","otherActivityCode","sapTypeOfCostForInternal","sid","location","prOrActivityName","rateManpower2","osaStatus","toolExtraCosts","technicalOffredBy","stCodeLocation2","bgStr","otherBudget","requestedEndDate","hoursTool2","extraCost","budget","requestedStartDate","closingDate","hours","intercoPartnerCode","sapCategory","tasks2","dummy","modifiedBy"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

			if (userBase.isAdmin()) {
			String[] readFields = new String[] {"commentsTravelExtraCosts","tasks","totalBudget","budgetTool","place","otherSubActivityStatus","tool","createdDate","commentsToolExtraCosts","hoursTool","dummyTest","internalPoNumber","stCodeLocation","modifiedDate","travelExtraCosts","dummy2","createdBy","budgetTool2","purchasingEntityCode","sapTypeOfCostForExternal","sapRdCost","selletEntityCode","watcher","rate","metier","otherActivityCode","sapTypeOfCostForInternal","sid","location","prOrActivityName","rateManpower2","osaStatus","toolExtraCosts","technicalOffredBy","stCodeLocation2","bgStr","otherBudget","requestedEndDate","hoursTool2","extraCost","budget","requestedStartDate","closingDate","hours","intercoPartnerCode","sapCategory","tasks2","dummy","modifiedBy"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

			if (userBase.isRequester()) {
			String[] readFields = new String[] {"commentsTravelExtraCosts","tasks","totalBudget","budgetTool","place","otherSubActivityStatus","tool","createdDate","commentsToolExtraCosts","hoursTool","dummyTest","internalPoNumber","stCodeLocation","modifiedDate","travelExtraCosts","dummy2","createdBy","budgetTool2","purchasingEntityCode","sapTypeOfCostForExternal","sapRdCost","selletEntityCode","watcher","rate","metier","otherActivityCode","sapTypeOfCostForInternal","sid","location","prOrActivityName","rateManpower2","osaStatus","toolExtraCosts","technicalOffredBy","stCodeLocation2","bgStr","otherBudget","requestedEndDate","hoursTool2","extraCost","budget","requestedStartDate","closingDate","hours","intercoPartnerCode","sapCategory","tasks2","dummy","modifiedBy"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

		allowedFields.setAllowedWriteFields(allowedAccessFields);
	}
	protected List<String> getTechnicalFields() {
		String[] technicalFields = {"sid", "createdBy", "createdDate", "modifiedBy", "modifiedDate", "recDeleted"};
		return Arrays.asList(technicalFields);
	}
	
		@Override
	public List<String> getUserTypeFromRolesWithoutPerimeter(UserPrivilege userPrivilegeBase, T model, WorkflowMetaInfo metaInfo) {
		List<String> userTypes = new ArrayList<>();
				ApplicationUserBase userPrivilege = (ApplicationUserBase) userPrivilegeBase;
		if (userPrivilege.isDevAdmin()) {
			userTypes.add("devadmin");
		}
		if(userPrivilege.isLeader()){
	userTypes.add("leader");
}
if(userPrivilege.isScheduler()){
	userTypes.add("scheduler");
}
if(userPrivilege.isApprover()){
	userTypes.add("approver");
}
if(userPrivilege.isViewer()){
	userTypes.add("viewer");
}
if(userPrivilege.isAdmin()){
	userTypes.add("admin");
}
if(userPrivilege.isRequester()){
	userTypes.add("requester");
}

		return userTypes;
	}

	@Override
	public List<String> getUserTypeFromRolesWithPerimeter(UserPrivilege userPrivilegeBase, T model, WorkflowMetaInfo metaInfo) {
		List<String> userTypes = new ArrayList<>();
		ApplicationUserBase userPrivilege = (ApplicationUserBase) userPrivilegeBase;
		
		return userTypes;
	}

	@Override
	public List<String> getUserTypeFromModel(UserPrivilege userPrivilegeBase, T model, WorkflowMetaInfo metaInfo) {
		List<String> userTypes = new ArrayList<>();
		ApplicationUserBase userPrivilege = (ApplicationUserBase) userPrivilegeBase;
		if(userPrivilege.getEmail().equals(model.getScheduler())){
	userTypes.add("scheduler");
}
if(userPrivilege.getEmail().equals(model.getLeader())){
	userTypes.add("leader");
}

		return userTypes;
	}

	@Override
	public List<String> getUserTypeFromModelCustomFields(UserPrivilege userPrivilegeBase, T model, WorkflowMetaInfo metaInfo) {
		return Collections.emptyList();
	}
	
	
}
