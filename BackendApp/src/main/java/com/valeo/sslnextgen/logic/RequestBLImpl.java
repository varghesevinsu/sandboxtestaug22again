package com.valeo.sslnextgen.logic;

import com.eva.base.acl.IPerimeterManager;
import com.valeo.sslnextgen.base.logic.RequestBLBaseImpl;
import com.valeo.sslnextgen.model.Request;
import com.valeo.sslnextgen.logic.RequestPerimeterImpl;
import com.valeo.sslnextgen.logic.WorkflowHistoryBLImpl;


public class RequestBLImpl extends RequestBLBaseImpl<Request> implements IRequestBL<Request>{

	public RequestBLImpl() {
		super(Request.class);	
		setChangelogBL(new ChangelogBLImpl()); 
		setWorkflowHistoryBL(new WorkflowHistoryBLImpl());
	}
	

	
	protected IPerimeterManager<Request> getPerimeterManager() {
		return new RequestPerimeterImpl();
	}
}