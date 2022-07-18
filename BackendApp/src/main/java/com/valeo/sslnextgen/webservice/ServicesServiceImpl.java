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

import com.valeo.sslnextgen.base.webservice.ServicesServiceBaseImpl;
import com.valeo.sslnextgen.logic.IServicesBL;
import com.valeo.sslnextgen.logic.ServicesBLImpl;
import com.valeo.sslnextgen.model.Services;

@Produces(MediaType.APPLICATION_JSON)
@Path("services")
public class ServicesServiceImpl extends ServicesServiceBaseImpl<IServicesBL<Services>, Services> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(ServicesServiceImpl.class);
	public ServicesServiceImpl() {
		super(InstanceFactory.getProxy(new ServicesBLImpl()));
	}
}
