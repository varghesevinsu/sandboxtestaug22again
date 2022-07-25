package com.valeo.sslnextgen.logic;

import com.eva.base.acl.IPerimeterManager;
import com.valeo.sslnextgen.base.logic.UserGuideBLBaseImpl;
import com.valeo.sslnextgen.model.UserGuide;
import com.valeo.sslnextgen.logic.UserGuidePerimeterImpl;


public class UserGuideBLImpl extends UserGuideBLBaseImpl<UserGuide> implements IUserGuideBL<UserGuide>{

	public UserGuideBLImpl() {
		super(UserGuide.class);	
		setChangelogBL(new ChangelogBLImpl()); 
	}
	

	
	protected IPerimeterManager<UserGuide> getPerimeterManager() {
		return null;
	}
}