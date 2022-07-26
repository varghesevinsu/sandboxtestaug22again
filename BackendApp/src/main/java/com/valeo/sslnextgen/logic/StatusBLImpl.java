package com.valeo.sslnextgen.logic;

import com.eva.base.acl.IPerimeterManager;
import com.valeo.sslnextgen.base.logic.StatusBLBaseImpl;
import com.valeo.sslnextgen.model.Status;
import com.valeo.sslnextgen.logic.StatusPerimeterImpl;


public class StatusBLImpl extends StatusBLBaseImpl<Status> implements IStatusBL<Status>{

	public StatusBLImpl() {
		super(Status.class);	
		setChangelogBL(new ChangelogBLImpl()); 
	}
	

	
	protected IPerimeterManager<Status> getPerimeterManager() {
		return new StatusPerimeterImpl();
	}
}