package com.valeo.sslnextgen.logic;

import com.eva.base.acl.IPerimeterManager;
import com.valeo.sslnextgen.base.logic.LabBLBaseImpl;
import com.valeo.sslnextgen.model.Lab;
import com.valeo.sslnextgen.logic.LabPerimeterImpl;
import com.valeo.sslnextgen.logic.WorkflowHistoryBLImpl;


public class LabBLImpl extends LabBLBaseImpl<Lab> implements ILabBL<Lab>{

	public LabBLImpl() {
		super(Lab.class);	
		setChangelogBL(new ChangelogBLImpl()); 
	}
	

	
	protected IPerimeterManager<Lab> getPerimeterManager() {
		return new LabPerimeterImpl();
	}
}