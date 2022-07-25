package com.valeo.sslnextgen.logic;

import com.eva.base.acl.IPerimeterManager;
import com.valeo.sslnextgen.base.logic.ManPowerBLBaseImpl;
import com.valeo.sslnextgen.model.ManPower;
import com.valeo.sslnextgen.logic.ManPowerPerimeterImpl;


public class ManPowerBLImpl extends ManPowerBLBaseImpl<ManPower> implements IManPowerBL<ManPower>{

	public ManPowerBLImpl() {
		super(ManPower.class);	
		setChangelogBL(new ChangelogBLImpl()); 
	}
	

	
	protected IPerimeterManager<ManPower> getPerimeterManager() {
		return null;
	}
}