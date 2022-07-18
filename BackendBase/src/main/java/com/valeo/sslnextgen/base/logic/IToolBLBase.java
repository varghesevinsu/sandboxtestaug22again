package com.valeo.sslnextgen.base.logic;

import com.eva.base.logic.ICRUDOperation;
import com.valeo.sslnextgen.base.model.ToolBase;
import java.util.List;

import com.eva.base.model.PaginationResponse;

import com.eva.base.model.PaginationRequest;

public interface IToolBLBase<T extends ToolBase> extends ICRUDOperation<T>{
	public List<T> getToolByPId(String pid);


public PaginationResponse getDatatableDataByPId(PaginationRequest paginationrequest,String pid);


public T getByTool(String tool);

	
}