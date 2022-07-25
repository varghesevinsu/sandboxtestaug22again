package com.valeo.sslnextgen.logic;

import com.eva.base.acl.IPerimeterManager;
import com.valeo.sslnextgen.base.logic.ToolBLBaseImpl;
import com.valeo.sslnextgen.model.Tool;
import com.valeo.sslnextgen.logic.ToolPerimeterImpl;


public class ToolBLImpl extends ToolBLBaseImpl<Tool> implements IToolBL<Tool>{

	public ToolBLImpl() {
		super(Tool.class);	
		setChangelogBL(new ChangelogBLImpl()); 
	}
	

	
	protected IPerimeterManager<Tool> getPerimeterManager() {
		return null;
	}
}