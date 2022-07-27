package com.valeo.sslnextgen.webservice;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.ext.XLogger;
import org.slf4j.ext.XLoggerFactory;

import com.eva.base.factory.InstanceFactory;

import com.valeo.sslnextgen.base.webservice.ApplicationUserServiceBaseImpl;
import com.valeo.sslnextgen.logic.IApplicationUserBL;
import com.valeo.sslnextgen.logic.ApplicationUserBLImpl;
import com.valeo.sslnextgen.model.ApplicationUser;



@Produces(MediaType.APPLICATION_JSON)
@Path("applicationusers")
public class ApplicationUserServiceImpl extends ApplicationUserServiceBaseImpl<IApplicationUserBL<ApplicationUser>, ApplicationUser> {

	public ApplicationUserServiceImpl() {
		super(InstanceFactory.getProxy(new ApplicationUserBLImpl()));
	}
	
	@GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/autosuggest/leader")
    public List<Object> autoSuggestLeader(@QueryParam("q") String searchText,@QueryParam("sortColumn") String sortColumn,@QueryParam("sortOrder") String sortOrder,@QueryParam("pgNo") int pgNo,@QueryParam("pgLen") int length) {
        if(StringUtils.isNotBlank(searchText)) {
            searchText = searchText + " AND leader : true";
        } else {
            searchText = "leader : true";
        }
        return super.autosuggest(searchText,sortColumn,sortOrder,pgNo,length);
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/autosuggest/scheduler")
    public List<Object> autoSuggestScheduler(@QueryParam("q") String searchText,@QueryParam("sortColumn") String sortColumn,@QueryParam("sortOrder") String sortOrder,@QueryParam("pgNo") int pgNo,@QueryParam("pgLen") int length) {
        if(StringUtils.isNotBlank(searchText)) {
            searchText = searchText + " AND scheduler : true";
        } else {
            searchText = "scheduler : true";
        }
        return super.autosuggest(searchText,sortColumn,sortOrder,pgNo,length);
    }
	
}
