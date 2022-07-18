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

import com.valeo.sslnextgen.base.webservice.LabServiceBaseImpl;
import com.valeo.sslnextgen.logic.ILabBL;
import com.valeo.sslnextgen.logic.LabBLImpl;
import com.valeo.sslnextgen.model.Lab;

@Produces(MediaType.APPLICATION_JSON)
@Path("labs")
public class LabServiceImpl extends LabServiceBaseImpl<ILabBL<Lab>, Lab> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(LabServiceImpl.class);
	public LabServiceImpl() {
		super(InstanceFactory.getProxy(new LabBLImpl()));
	}
}
