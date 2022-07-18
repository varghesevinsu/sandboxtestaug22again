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
import com.valeo.sslnextgen.base.model.ToolBase;
import com.valeo.sslnextgen.base.model.ApplicationUserBase;
import com.eva.base.acl.IPerimeterManager;
import com.eva.base.util.FieldUtils;

public abstract class ToolPerimeterBaseImpl<T extends ToolBase> implements IPerimeterManager<T> {
	
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
			String[] readFields = new String[] {"createdBy","dummyTest","tool","modifiedBy","modifiedDate","rate","createdDate","currency","sid"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

			if (userBase.isScheduler()) {
			String[] readFields = new String[] {"createdBy","dummyTest","tool","modifiedBy","modifiedDate","rate","createdDate","currency","sid"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

			if (userBase.isApprover()) {
			String[] readFields = new String[] {"createdBy","dummyTest","tool","modifiedBy","modifiedDate","rate","createdDate","currency","sid"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

			if (userBase.isViewer()) {
			String[] readFields = new String[] {"createdBy","dummyTest","tool","modifiedBy","modifiedDate","rate","createdDate","currency","sid"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

			if (userBase.isAdmin()) {
			String[] readFields = new String[] {"createdBy","dummyTest","tool","modifiedBy","modifiedDate","rate","createdDate","currency","sid"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

			if (userBase.isRequester()) {
			String[] readFields = new String[] {"createdBy","dummyTest","tool","modifiedBy","modifiedDate","rate","createdDate","currency","sid"};
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
			String[] readFields = new String[] {"createdBy","dummyTest","tool","modifiedBy","modifiedDate","rate","createdDate","currency","sid"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

			if (userBase.isScheduler()) {
			String[] readFields = new String[] {"createdBy","dummyTest","tool","modifiedBy","modifiedDate","rate","createdDate","currency","sid"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

			if (userBase.isApprover()) {
			String[] readFields = new String[] {"createdBy","dummyTest","tool","modifiedBy","modifiedDate","rate","createdDate","currency","sid"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

			if (userBase.isViewer()) {
			String[] readFields = new String[] {"createdBy","dummyTest","tool","modifiedBy","modifiedDate","rate","createdDate","currency","sid"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

			if (userBase.isAdmin()) {
			String[] readFields = new String[] {"createdBy","dummyTest","tool","modifiedBy","modifiedDate","rate","createdDate","currency","sid"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

			if (userBase.isRequester()) {
			String[] readFields = new String[] {"createdBy","dummyTest","tool","modifiedBy","modifiedDate","rate","createdDate","currency","sid"};
			allowedAccessFields.addAll(Arrays.asList(readFields));
		}

		allowedFields.setAllowedWriteFields(allowedAccessFields);
	}
	protected List<String> getTechnicalFields() {
		String[] technicalFields = {"sid", "createdBy", "createdDate", "modifiedBy", "modifiedDate", "recDeleted"};
		return Arrays.asList(technicalFields);
	}
	
	
}
