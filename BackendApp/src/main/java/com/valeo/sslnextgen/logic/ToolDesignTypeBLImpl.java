package com.valeo.sslnextgen.logic;

import com.eva.base.acl.IPerimeterManager;
import com.valeo.sslnextgen.base.logic.ToolDesignTypeBLBaseImpl;
import com.valeo.sslnextgen.model.ToolDesignType;
import com.valeo.sslnextgen.logic.ToolDesignTypePerimeterImpl;


public class ToolDesignTypeBLImpl extends ToolDesignTypeBLBaseImpl<ToolDesignType> implements IToolDesignTypeBL<ToolDesignType>{

	public ToolDesignTypeBLImpl() {
		super(ToolDesignType.class);	
		setChangelogBL(new ChangelogBLImpl()); 
	}
	

	
	protected IPerimeterManager<ToolDesignType> getPerimeterManager() {
		return null;
	}
}