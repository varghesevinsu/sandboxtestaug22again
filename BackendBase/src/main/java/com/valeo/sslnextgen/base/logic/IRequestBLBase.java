package com.valeo.sslnextgen.base.logic;

import com.eva.base.logic.ICRUDOperation;
import com.valeo.sslnextgen.base.model.RequestBase;


public interface IRequestBLBase<T extends RequestBase> extends ICRUDOperation<T>,ISSLWorkflowWorkflowActions<T>{
	
	T getRequestWorkflowModelBySid(Object sid);

}