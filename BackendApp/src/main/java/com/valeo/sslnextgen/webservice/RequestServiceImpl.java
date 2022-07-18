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

import com.valeo.sslnextgen.base.webservice.RequestServiceBaseImpl;
import com.valeo.sslnextgen.logic.IRequestBL;
import com.valeo.sslnextgen.logic.RequestBLImpl;
import com.valeo.sslnextgen.model.Request;

@Produces(MediaType.APPLICATION_JSON)
@Path("requests")
public class RequestServiceImpl extends RequestServiceBaseImpl<IRequestBL<Request>, Request> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(RequestServiceImpl.class);
	public RequestServiceImpl() {
		super(InstanceFactory.getProxy(new RequestBLImpl()));
	}
}
