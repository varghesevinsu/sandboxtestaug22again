package com.valeo.sslnextgen.cron.webservice;

import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import com.valeo.sslnextgen.base.webservice.CronServicesBase;

@Produces(MediaType.APPLICATION_JSON)
@Path("cronservices")
public class CronServices extends CronServicesBase{	
}

