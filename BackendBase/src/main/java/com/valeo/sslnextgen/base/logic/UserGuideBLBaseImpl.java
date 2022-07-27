package com.valeo.sslnextgen.base.logic;

import com.eva.base.dal.providers.SearchOptions;
import com.eva.base.dal.providers.PersistenceType;
import com.eva.base.logic.BaseBusinessLogic;
import com.eva.base.exception.ValidationError;
import com.eva.base.service.changelog.ChangelogBLBaseImpl;
import com.eva.base.util.Constants;
import com.valeo.sslnextgen.base.model.UserGuideBase;
import com.valeo.sslnextgen.base.logic.IUserGuideBLBase;

import java.util.List;

import java.util.ArrayList;

import com.eva.base.model.PaginationResponse;

import com.eva.base.model.PaginationRequest;

import com.eva.base.dal.Filter;

import com.eva.base.dal.Filter.Operator;

import com.eva.base.dal.SimpleFilter;


public class UserGuideBLBaseImpl<T extends UserGuideBase> extends BaseBusinessLogic<T>
		implements IUserGuideBLBase<T> {
		
	private ChangelogBLBaseImpl changelogBL;
	
	public UserGuideBLBaseImpl(Class<T> modelClass) {
		super(modelClass);
		addPersistenceOption(SearchOptions.SEARCH_INDEX_NAME, getTableName());
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
	  changelogBL.createChangeLog("UserGuide", modelObj.getSid(), Constants.SAVED, modelObj);
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
	  changelogBL.createChangeLog("UserGuide", modelObj.getSid(), Constants.UPDATED, modelObj);
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
	  changelogBL.createChangeLog("UserGuide", modelObj.getSid(), Constants.DELETED, modelObj);
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
	
	public void setChangelogBL(ChangelogBLBaseImpl changelogBL) {
		this.changelogBL=changelogBL;
	}

		@Override
	public PaginationResponse getDatatableDataByPId(PaginationRequest dataTable, String pid) {
		List<Filter> filters = dataTable.getFilters();
		if (filters == null) {
			filters = new ArrayList<>();
		}
		filters.add(new SimpleFilter("pid", pid, Operator.EQUAL));
		dataTable.setFilters(filters);
		return super.getAllByPage(dataTable);
	}


	@Override
	public List<T> getUserGuideByPId(String pid) {
		List<Filter> filters = new ArrayList<>(1);
		filters.add(new SimpleFilter("pid", pid, Operator.EQUAL));
		return super.getAll(filters);
	}


	@Override
	public T getByLink(String link) {
		List<Filter> filters = new ArrayList<>();
		filters.add(new SimpleFilter("link", link, Operator.EQUAL));
		List<T> getAllList= super.getAll(filters);
		if(getAllList!=null && getAllList.size()>0)
		{
			return getAllList.get(0);
		}
		else
		{
			return null;
		}
	}

}