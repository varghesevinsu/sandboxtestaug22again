package com.valeo.sslnextgen.logic;

import com.eva.base.acl.IPerimeterManager;
import com.valeo.sslnextgen.base.logic.HistoryBLBaseImpl;
import com.valeo.sslnextgen.model.History;
import com.valeo.sslnextgen.logic.HistoryPerimeterImpl;
import com.valeo.sslnextgen.logic.WorkflowHistoryBLImpl;


public class HistoryBLImpl extends HistoryBLBaseImpl<History> implements IHistoryBL<History>{

	public HistoryBLImpl() {
		super(History.class);	
		setChangelogBL(new ChangelogBLImpl()); 
	}
	

	
	protected IPerimeterManager<History> getPerimeterManager() {
		return new HistoryPerimeterImpl();
	}
}