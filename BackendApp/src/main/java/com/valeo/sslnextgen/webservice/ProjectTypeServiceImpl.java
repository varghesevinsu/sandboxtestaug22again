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

import com.valeo.sslnextgen.base.webservice.ProjectTypeServiceBaseImpl;
import com.valeo.sslnextgen.logic.IProjectTypeBL;
import com.valeo.sslnextgen.logic.ProjectTypeBLImpl;
import com.valeo.sslnextgen.model.ProjectType;

@Produces(MediaType.APPLICATION_JSON)
@Path("projecttypes")
public class ProjectTypeServiceImpl extends ProjectTypeServiceBaseImpl<IProjectTypeBL<ProjectType>, ProjectType> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(ProjectTypeServiceImpl.class);
	public ProjectTypeServiceImpl() {
		super(InstanceFactory.getProxy(new ProjectTypeBLImpl()));
	}
}
