package com.valeo.sslnextgen.base.logic;

import com.eva.base.logic.ICRUDOperation;
import com.valeo.sslnextgen.base.model.HistoryBase;
import java.util.List;

import com.eva.base.model.PaginationResponse;

import com.eva.base.model.PaginationRequest;

public interface IHistoryBLBase<T extends HistoryBase> extends ICRUDOperation<T>{
	public List<T> getHistoryByPId(String pid);


public PaginationResponse getDatatableDataByPId(PaginationRequest paginationrequest,String pid);


public T getByRequestCode(Long requestCode);

	
}