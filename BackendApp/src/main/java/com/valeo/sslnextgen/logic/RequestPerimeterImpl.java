package com.valeo.sslnextgen.logic;

import com.valeo.sslnextgen.model.Request;
import com.valeo.sslnextgen.base.logic.RequestPerimeterBaseImpl;
import com.valeo.sslnextgen.base.model.ApplicationUserBase;


public class RequestPerimeterImpl extends RequestPerimeterBaseImpl<Request> {
	
	@Override
	public boolean canCreate(Request model) {
		return true;
	}

	@Override
	public boolean canUpdate(Request model) {
		return true;
	}

	@Override
	public boolean canDelete(Request model) {
		return true;
	}

	@Override
	public boolean canRead(Request model) {
		return true;
	}
}
