package com.valeo.sslnextgen.base.logic;

import com.eva.base.logic.ICRUDOperation;
import com.valeo.sslnextgen.base.model.LabBase;
import java.util.List;

import com.eva.base.model.PaginationResponse;

import com.eva.base.model.PaginationRequest;

public interface ILabBLBase<T extends LabBase> extends ICRUDOperation<T>{
	public PaginationResponse getDatatableDataByPId(PaginationRequest paginationrequest,String pid);


public List<T> getLabByPId(String pid);


public T getByLabName(String labName);

	
}