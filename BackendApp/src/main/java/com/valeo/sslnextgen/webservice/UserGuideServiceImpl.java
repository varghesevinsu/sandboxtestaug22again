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

import com.valeo.sslnextgen.base.webservice.UserGuideServiceBaseImpl;
import com.valeo.sslnextgen.logic.IUserGuideBL;
import com.valeo.sslnextgen.logic.UserGuideBLImpl;
import com.valeo.sslnextgen.model.UserGuide;

@Produces(MediaType.APPLICATION_JSON)
@Path("userguides")
public class UserGuideServiceImpl extends UserGuideServiceBaseImpl<IUserGuideBL<UserGuide>, UserGuide> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(UserGuideServiceImpl.class);
	public UserGuideServiceImpl() {
		super(InstanceFactory.getProxy(new UserGuideBLImpl()));
	}
}
