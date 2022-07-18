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

import com.valeo.sslnextgen.base.webservice.ManPowerServiceBaseImpl;
import com.valeo.sslnextgen.logic.IManPowerBL;
import com.valeo.sslnextgen.logic.ManPowerBLImpl;
import com.valeo.sslnextgen.model.ManPower;

@Produces(MediaType.APPLICATION_JSON)
@Path("manpowers")
public class ManPowerServiceImpl extends ManPowerServiceBaseImpl<IManPowerBL<ManPower>, ManPower> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(ManPowerServiceImpl.class);
	public ManPowerServiceImpl() {
		super(InstanceFactory.getProxy(new ManPowerBLImpl()));
	}
}
