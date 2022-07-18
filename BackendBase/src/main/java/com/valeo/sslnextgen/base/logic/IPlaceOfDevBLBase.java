package com.valeo.sslnextgen.base.logic;

import com.eva.base.logic.ICRUDOperation;
import com.valeo.sslnextgen.base.model.PlaceOfDevBase;
import java.util.List;

import com.eva.base.model.PaginationResponse;

import com.eva.base.model.PaginationRequest;

public interface IPlaceOfDevBLBase<T extends PlaceOfDevBase> extends ICRUDOperation<T>{
	public PaginationResponse getDatatableDataByPId(PaginationRequest paginationrequest,String pid);


public List<T> getPlaceOfDevByPId(String pid);


public T getBySiteCode(String siteCode);

	
}