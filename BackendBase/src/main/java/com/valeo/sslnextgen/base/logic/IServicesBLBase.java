package com.valeo.sslnextgen.base.logic;

import com.eva.base.logic.ICRUDOperation;
import com.valeo.sslnextgen.base.model.ServicesBase;
import java.util.List;

import com.eva.base.model.PaginationResponse;

import com.eva.base.model.PaginationRequest;

public interface IServicesBLBase<T extends ServicesBase> extends ICRUDOperation<T>{
	public T getByService(String service);


public PaginationResponse getDatatableDataByPId(PaginationRequest paginationrequest,String pid);


public List<T> getServicesByPId(String pid);

	
}