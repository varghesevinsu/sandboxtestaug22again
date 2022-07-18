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

import com.valeo.sslnextgen.base.webservice.StatusServiceBaseImpl;
import com.valeo.sslnextgen.logic.IStatusBL;
import com.valeo.sslnextgen.logic.StatusBLImpl;
import com.valeo.sslnextgen.model.Status;

@Produces(MediaType.APPLICATION_JSON)
@Path("statuses")
public class StatusServiceImpl extends StatusServiceBaseImpl<IStatusBL<Status>, Status> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(StatusServiceImpl.class);
	public StatusServiceImpl() {
		super(InstanceFactory.getProxy(new StatusBLImpl()));
	}
}
