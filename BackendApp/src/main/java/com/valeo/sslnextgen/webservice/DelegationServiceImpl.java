package com.valeo.sslnextgen.webservice;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.slf4j.ext.XLogger;
import org.slf4j.ext.XLoggerFactory;

import com.eva.base.factory.InstanceFactory;

import com.valeo.sslnextgen.base.webservice.DelegationServiceBaseImpl;
import com.valeo.sslnextgen.logic.IDelegationBL;
import com.valeo.sslnextgen.logic.DelegationBLImpl;
import com.valeo.sslnextgen.model.Delegation;

@Produces(MediaType.APPLICATION_JSON)
@Path("delegations")
public class DelegationServiceImpl extends DelegationServiceBaseImpl<IDelegationBL<Delegation>, Delegation> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(DelegationServiceImpl.class);
	public DelegationServiceImpl() {
		super(InstanceFactory.getProxy(new DelegationBLImpl()));
	}
}
