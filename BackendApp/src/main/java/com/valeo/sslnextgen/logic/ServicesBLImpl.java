package com.valeo.sslnextgen.logic;

import com.eva.base.acl.IPerimeterManager;
import com.valeo.sslnextgen.base.logic.ServicesBLBaseImpl;
import com.valeo.sslnextgen.model.Services;
import com.valeo.sslnextgen.logic.ServicesPerimeterImpl;
import com.valeo.sslnextgen.logic.WorkflowHistoryBLImpl;


public class ServicesBLImpl extends ServicesBLBaseImpl<Services> implements IServicesBL<Services>{

	public ServicesBLImpl() {
		super(Services.class);	
		setChangelogBL(new ChangelogBLImpl()); 
	}
	

	
	protected IPerimeterManager<Services> getPerimeterManager() {
		return new ServicesPerimeterImpl();
	}
}