package com.valeo.sslnextgen.base.logic;

import com.eva.base.logic.ICRUDOperation;
import com.valeo.sslnextgen.base.model.UserGuideBase;
import java.util.List;

import com.eva.base.model.PaginationResponse;

import com.eva.base.model.PaginationRequest;

public interface IUserGuideBLBase<T extends UserGuideBase> extends ICRUDOperation<T>{
	public PaginationResponse getDatatableDataByPId(PaginationRequest paginationrequest,String pid);


public List<T> getUserGuideByPId(String pid);


public T getByLink(String link);

	
}