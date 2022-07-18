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

import com.valeo.sslnextgen.base.webservice.ToolServiceBaseImpl;
import com.valeo.sslnextgen.logic.IToolBL;
import com.valeo.sslnextgen.logic.ToolBLImpl;
import com.valeo.sslnextgen.model.Tool;

@Produces(MediaType.APPLICATION_JSON)
@Path("tools")
public class ToolServiceImpl extends ToolServiceBaseImpl<IToolBL<Tool>, Tool> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(ToolServiceImpl.class);
	public ToolServiceImpl() {
		super(InstanceFactory.getProxy(new ToolBLImpl()));
	}
}
