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

import com.valeo.sslnextgen.base.webservice.HistoryServiceBaseImpl;
import com.valeo.sslnextgen.logic.IHistoryBL;
import com.valeo.sslnextgen.logic.HistoryBLImpl;
import com.valeo.sslnextgen.model.History;

@Produces(MediaType.APPLICATION_JSON)
@Path("histories")
public class HistoryServiceImpl extends HistoryServiceBaseImpl<IHistoryBL<History>, History> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(HistoryServiceImpl.class);
	public HistoryServiceImpl() {
		super(InstanceFactory.getProxy(new HistoryBLImpl()));
	}
}
