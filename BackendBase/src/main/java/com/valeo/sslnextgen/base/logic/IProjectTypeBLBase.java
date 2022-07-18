package com.valeo.sslnextgen.base.logic;

import com.eva.base.logic.ICRUDOperation;
import com.valeo.sslnextgen.base.model.ProjectTypeBase;
import java.util.List;

import com.eva.base.model.PaginationResponse;

import com.eva.base.model.PaginationRequest;

public interface IProjectTypeBLBase<T extends ProjectTypeBase> extends ICRUDOperation<T>{
	public PaginationResponse getDatatableDataByPId(PaginationRequest paginationrequest,String pid);


public List<T> getProjectTypeByPId(String pid);


public T getByProjectType(String projectType);

	
}