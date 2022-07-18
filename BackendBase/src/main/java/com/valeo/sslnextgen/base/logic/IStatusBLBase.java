package com.valeo.sslnextgen.base.logic;

import com.eva.base.logic.ICRUDOperation;
import com.valeo.sslnextgen.base.model.StatusBase;
import java.util.List;

import com.eva.base.model.PaginationResponse;

import com.eva.base.model.PaginationRequest;

public interface IStatusBLBase<T extends StatusBase> extends ICRUDOperation<T>{
	public T getByStatusOfTheRequest(String statusOfTheRequest);


public List<T> getStatusByPId(String pid);


public PaginationResponse getDatatableDataByPId(PaginationRequest paginationrequest,String pid);

	
}