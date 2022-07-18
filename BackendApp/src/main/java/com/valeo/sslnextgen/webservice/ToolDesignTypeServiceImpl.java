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

import com.valeo.sslnextgen.base.webservice.ToolDesignTypeServiceBaseImpl;
import com.valeo.sslnextgen.logic.IToolDesignTypeBL;
import com.valeo.sslnextgen.logic.ToolDesignTypeBLImpl;
import com.valeo.sslnextgen.model.ToolDesignType;

@Produces(MediaType.APPLICATION_JSON)
@Path("tooldesigntypes")
public class ToolDesignTypeServiceImpl extends ToolDesignTypeServiceBaseImpl<IToolDesignTypeBL<ToolDesignType>, ToolDesignType> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(ToolDesignTypeServiceImpl.class);
	public ToolDesignTypeServiceImpl() {
		super(InstanceFactory.getProxy(new ToolDesignTypeBLImpl()));
	}
}
