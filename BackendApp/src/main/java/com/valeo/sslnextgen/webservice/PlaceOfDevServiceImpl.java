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

import com.valeo.sslnextgen.base.webservice.PlaceOfDevServiceBaseImpl;
import com.valeo.sslnextgen.logic.IPlaceOfDevBL;
import com.valeo.sslnextgen.logic.PlaceOfDevBLImpl;
import com.valeo.sslnextgen.model.PlaceOfDev;

@Produces(MediaType.APPLICATION_JSON)
@Path("placeofdevs")
public class PlaceOfDevServiceImpl extends PlaceOfDevServiceBaseImpl<IPlaceOfDevBL<PlaceOfDev>, PlaceOfDev> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(PlaceOfDevServiceImpl.class);
	public PlaceOfDevServiceImpl() {
		super(InstanceFactory.getProxy(new PlaceOfDevBLImpl()));
	}
}
