package com.valeo.sslnextgen.base.logic;

import com.eva.base.logic.ICRUDOperation;
import com.valeo.sslnextgen.base.model.ToolDesignTypeBase;
import java.util.List;

import com.eva.base.model.PaginationResponse;

import com.eva.base.model.PaginationRequest;

public interface IToolDesignTypeBLBase<T extends ToolDesignTypeBase> extends ICRUDOperation<T>{
	public PaginationResponse getDatatableDataByPId(PaginationRequest paginationrequest,String pid);


public List<T> getToolDesignTypeByPId(String pid);


public T getByToolDesignType(String toolDesignType);

	
}