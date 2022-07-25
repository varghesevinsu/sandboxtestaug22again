package com.valeo.sslnextgen.logic;

import com.eva.base.acl.IPerimeterManager;
import com.valeo.sslnextgen.base.logic.DelegationBLBaseImpl;
import com.valeo.sslnextgen.model.Delegation;
import com.valeo.sslnextgen.logic.DelegationPerimeterImpl;


public class DelegationBLImpl extends DelegationBLBaseImpl<Delegation> implements IDelegationBL<Delegation>{

	public DelegationBLImpl() {
		super(Delegation.class);	
		setChangelogBL(new ChangelogBLImpl()); 
	}
	

	
	protected IPerimeterManager<Delegation> getPerimeterManager() {
		return null;
	}
}