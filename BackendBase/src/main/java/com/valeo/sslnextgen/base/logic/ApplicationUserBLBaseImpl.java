package com.valeo.sslnextgen.base.logic;

import java.util.ArrayList;
import java.util.List;
import java.util.Collections;
import java.util.Map;
import javax.ws.rs.core.Response;

import com.eva.base.dal.providers.SearchOptions;
import com.eva.base.dal.providers.PersistenceType;
import com.eva.base.logic.BaseBusinessLogic;
import com.eva.base.mail.model.EmailAddress;
import com.eva.base.model.wrapper.UserPrivilegePerimeter;
import com.eva.base.dal.Filter;
import com.eva.base.dal.SimpleFilter;
import com.eva.base.dal.Sort;
import com.eva.base.dal.Sort.Direction;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import com.eva.base.authentication.logic.IAppUserPrivilegeCache;
import com.eva.base.authentication.logic.AppUserPrivilegeCache;
import com.eva.base.cache.CacheManager;
import com.eva.base.service.changelog.ChangelogBLBaseImpl;
import com.eva.base.util.Constants;
import com.eva.base.exception.AlreadyExistsException;
import com.eva.base.util.ErrorCode;
import com.eva.base.exception.ValidationError;

import com.valeo.sslnextgen.base.model.ApplicationUserBase;
import com.valeo.sslnextgen.base.logic.IApplicationUserBLBase;
import com.valeo.sslnextgen.model.Roles;


import com.valeo.sslnextgen.model.Roles;


public abstract class ApplicationUserBLBaseImpl<T extends ApplicationUserBase> extends BaseBusinessLogic<T> implements IApplicationUserBLBase<T>
{
	private ChangelogBLBaseImpl changelogBL;
	
	public ApplicationUserBLBaseImpl(Class<T> modelClass) {
		super(modelClass);
	}

	@Override
	public PersistenceType[] getOtherPersistenceTypes() {
		return new PersistenceType[]{PersistenceType.SEARCH};
	}
	
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

	public void onBeforeSaveSearch(T modelObj) {}

	public void onBeforeSaveDB(T modelObj) {
		modelObj.setEmail(modelObj.getEmail().toLowerCase());
		isObjectExists(modelObj,false);
		setRoles(modelObj);
	}
	
	@Override
	public final void onAfterSave(PersistenceType type, Object modelObj) {
		super.onAfterSave(type, modelObj);
		switch (type) {
			case DB:
				onAfterSaveDB((T) modelObj);
				break;			
			default:
				break;
		}		
	}

	public void onAfterSaveDB(T modelObj) {
	  changelogBL.createChangeLog("ApplicationUser", modelObj.getSid().toString(), Constants.SAVED, modelObj);
	  AppUserPrivilegeCache<T> userCache = CacheManager.getInstance()
			.getCache(IAppUserPrivilegeCache.NAME);
	  userCache.invalidate(modelObj.getEmail());
	}

	public final void onBeforeUpdate(PersistenceType type, T modelObj) {
		switch (type) {
			case DB:
				onBeforeUpdateDB(modelObj);
				break;
			case SEARCH:
				onBeforeUpdateSearch(modelObj);
				break;
			default:
				break;
		}
		super.onBeforeUpdate(type, modelObj);
	}

	public void onBeforeUpdateSearch(T modelObj) {}

	public void onBeforeUpdateDB(T modelObj) {
		modelObj.setEmail(modelObj.getEmail().toLowerCase());
		isObjectExists(modelObj,true);
		setRoles(modelObj);
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
	  changelogBL.createChangeLog("ApplicationUser", modelObj.getSid().toString(), Constants.UPDATED, modelObj);
	  AppUserPrivilegeCache<T> userCache = CacheManager.getInstance()
			.getCache(IAppUserPrivilegeCache.NAME);
		userCache.invalidate(modelObj.getEmail());
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
	  changelogBL.createChangeLog("ApplicationUser", modelObj.getSid().toString(), Constants.DELETED, modelObj);
	  AppUserPrivilegeCache<T> userCache = CacheManager.getInstance()
			.getCache(IAppUserPrivilegeCache.NAME);
	  userCache.invalidate(modelObj.getEmail());
	}	
	
	protected void setRoles(T modelObj) {
		List<String> userRoles = new ArrayList<>();
				if(modelObj.isAdmin()) {
			userRoles.add(Roles.ADMIN.getRoleName());
		}
		if(modelObj.isApprover()) {
			userRoles.add(Roles.APPROVER.getRoleName());
		}
		if(modelObj.isRequester()) {
			userRoles.add(Roles.REQUESTER.getRoleName());
		}
		if(modelObj.isLeader()) {
			userRoles.add(Roles.LEADER.getRoleName());
		}
		if(modelObj.isViewer()) {
			userRoles.add(Roles.VIEWER.getRoleName());
		}
		if(modelObj.isScheduler()) {
			userRoles.add(Roles.SCHEDULER.getRoleName());
		}
		if(modelObj.isDevAdmin()){
			userRoles.add(Roles.DEVADMIN.getRoleName());
		}
		modelObj.setUserRoles(userRoles);
	}
	
	public List<EmailAddress> getUsersByRole(UserPrivilegePerimeter rolePerimeterInfo, Integer page, Integer pageSize) {
		List<Filter> filters = new ArrayList<>();
		Map<String, List<Object>> perimeters = rolePerimeterInfo.getPerimeters();
		boolean perimeterApplicable = perimeters != null && perimeters.size() > 0;
		if (perimeterApplicable) {
			perimeters.forEach((perimeterKey, perimeterValue) -> {
				filters.add(new SimpleFilter(perimeterKey, perimeterValue, Filter.Operator.IN));
			});
			if (filters.isEmpty()) {
				return Collections.emptyList();
			}
		}
		filters.add(new SimpleFilter(rolePerimeterInfo.getRoleShortName(), true));
		List<Sort> sorts = new ArrayList<>(1);
		sorts.add(new Sort("email", Direction.ASC));
		List<String> projectedFields = new ArrayList<>(3);
		projectedFields.add("email");
		projectedFields.add("firstName");
		projectedFields.add("lastName");
		List<T> responseList = (List<T>)getAllByPage(PersistenceType.SEARCH, filters, sorts,page, pageSize, projectedFields);
		if (CollectionUtils.isEmpty(responseList)) {
			return Collections.emptyList();
		}
		List<EmailAddress> emailInfoList = new ArrayList<>(responseList.size());
		responseList.forEach(data -> {
			emailInfoList.add(new EmailAddress(data.getEmail(), data.getFirstName()
					+ (StringUtils.isNotBlank(data.getLastName()) ? data.getLastName() : StringUtils.EMPTY)));
		});
		return emailInfoList;
	}
	
	
	
	public void setChangelogBL(ChangelogBLBaseImpl changelogBL) {
		this.changelogBL=changelogBL;
	}
	
	
	protected void isObjectExists(T modelObj, boolean isUpdate) {
		T existing = getByField("email", modelObj.getEmail());
		if (isUpdate) {
			if (existing == null || existing.getSid().equals(modelObj.getSid())) {
				return;
			}
			throw new AlreadyExistsException(ErrorCode.USER_ALREADY_EXISTS, "ApplicationUser", modelObj.getEmail());

		} else {
			if (existing == null) {
				return;
			}
			throw new AlreadyExistsException(ErrorCode.USER_ALREADY_EXISTS, "ApplicationUser", modelObj.getEmail());
		}
	}
	
	@Override
	public List<String> onBeforeGeneratedValidation() {
		return null;
	}

	@Override
	public void onAfterGeneratedValidation(List<ValidationError> validationErrors) {}
}
