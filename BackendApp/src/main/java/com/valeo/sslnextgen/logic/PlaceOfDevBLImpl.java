package com.valeo.sslnextgen.logic;

import com.eva.base.acl.IPerimeterManager;
import com.valeo.sslnextgen.base.logic.PlaceOfDevBLBaseImpl;
import com.valeo.sslnextgen.model.PlaceOfDev;
import com.valeo.sslnextgen.logic.PlaceOfDevPerimeterImpl;
import com.valeo.sslnextgen.logic.WorkflowHistoryBLImpl;


public class PlaceOfDevBLImpl extends PlaceOfDevBLBaseImpl<PlaceOfDev> implements IPlaceOfDevBL<PlaceOfDev>{

	public PlaceOfDevBLImpl() {
		super(PlaceOfDev.class);	
		setChangelogBL(new ChangelogBLImpl()); 
	}
	

	
	protected IPerimeterManager<PlaceOfDev> getPerimeterManager() {
		return new PlaceOfDevPerimeterImpl();
	}
}