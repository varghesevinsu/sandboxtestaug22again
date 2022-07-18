package com.valeo.sslnextgen.base.logic;

import com.eva.base.logic.ICRUDOperation;
import com.valeo.sslnextgen.base.model.ManPowerBase;
import java.util.List;

import com.eva.base.model.PaginationResponse;

import com.eva.base.model.PaginationRequest;

public interface IManPowerBLBase<T extends ManPowerBase> extends ICRUDOperation<T>{
	public T getByService(String service);


public List<T> getManPowerByPId(String pid);


public PaginationResponse getDatatableDataByPId(PaginationRequest paginationrequest,String pid);

	
}