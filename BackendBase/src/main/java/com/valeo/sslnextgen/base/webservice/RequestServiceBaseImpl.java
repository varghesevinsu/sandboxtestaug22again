package com.valeo.sslnextgen.base.webservice;

import javax.ws.rs.Path;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.eva.base.dal.providers.PersistenceType;
import com.eva.jersey.base.webservice.BaseWebService;
import com.valeo.sslnextgen.base.logic.IRequestBLBase;
import com.valeo.sslnextgen.base.model.RequestBase;
import com.eva.base.model.PaginationRequest;

import com.eva.base.model.PaginationResponse;

import javax.ws.rs.QueryParam;

import java.util.List;

import javax.ws.rs.POST;

import javax.ws.rs.PathParam;

import com.eva.base.model.Primary;

import javax.ws.rs.GET;

import javax.ws.rs.DELETE;

import javax.ws.rs.PUT;

import com.eva.base.model.wrapper.ModelWrapper;

import java.util.Map;

@Produces(MediaType.APPLICATION_JSON)
public abstract class RequestServiceBaseImpl<BL extends IRequestBLBase<M>, M extends RequestBase>
		extends BaseWebService<BL, M> {
	
	
	public RequestServiceBaseImpl(BL logic) {
		super(logic);
	}
	@POST
	@Path("/datatable")
	public PaginationResponse getDatatableData(PaginationRequest dataTable)
	{
	 	return logic.getAllByPage(PersistenceType.SEARCH, dataTable);
	}
	


	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/autosuggest")
	public List<Object> autoSuggestService(@QueryParam("q") String searchText,@QueryParam("sortColumn") String sortColumn,@QueryParam("sortOrder") String sortOrder,@QueryParam("pgNo") int pgNo,@QueryParam("pgLen") int length) {
		return super.autosuggest(searchText,sortColumn,sortOrder,pgNo,length);
	}


	@POST
	public M create(M modelObj) {
		return super.save(modelObj);
	}


	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{sid}")
	public M getById(@PathParam("sid") Primary sid) {
		return logic.getRequestWorkflowModelBySid(sid.get());
	}


	@DELETE
	@Path("/{ids}")
	public Response deleteRecords(@PathParam("ids") String ids) {
		boolean isDeleted = super.delete(ids);
		if (isDeleted)
			return Response.ok().build();
		else
			return Response.serverError().build();
	}


	@PUT
	public M update(M modelObj) {
		return super.update(modelObj);
	}



	
		@PUT
	@Path("sslworkflow/cancel/{id}")
	public M sslWorkflowCancel(@PathParam("id") Primary id, Map<String, Object> additionalInfo)
	{
	 	return logic.cancel(id.get(),additionalInfo);
	}	
	@PUT
	@Path("sslworkflow/approvetoleader/{id}")
	public M sslWorkflowApproveToLeader(@PathParam("id") Primary id, Map<String, Object> additionalInfo)
	{
	 	return logic.approveToLeader(id.get(),additionalInfo);
	}	
	@PUT
	@Path("sslworkflow/demotetoleader/{id}")
	public M sslWorkflowDemoteToLeader(@PathParam("id") Primary id, Map<String, Object> additionalInfo)
	{
	 	return logic.demoteToLeader(id.get(),additionalInfo);
	}	
	@PUT
	@Path("sslworkflow/submit/{id}")
	public M sslWorkflowSubmit(@PathParam("id") Primary id, Map<String, Object> additionalInfo)
	{
	 	return logic.submit(id.get(),additionalInfo);
	}	
	@PUT
	@Path("sslworkflow/submittoapprover/{id}")
	public M sslWorkflowSubmitToApprover(@PathParam("id") Primary id, Map<String, Object> additionalInfo)
	{
	 	return logic.submitToApprover(id.get(),additionalInfo);
	}	
	@PUT
	@Path("sslworkflow/demotetorequester/{id}")
	public M sslWorkflowDemoteToRequester(@PathParam("id") Primary id, Map<String, Object> additionalInfo)
	{
	 	return logic.demoteToRequester(id.get(),additionalInfo);
	}	
	@PUT
	@Path("sslworkflow/demotetoscheduler/{id}")
	public M sslWorkflowDemoteToScheduler(@PathParam("id") Primary id, Map<String, Object> additionalInfo)
	{
	 	return logic.demoteToScheduler(id.get(),additionalInfo);
	}	
	@PUT
	@Path("sslworkflow/validate/{id}")
	public M sslWorkflowValidate(@PathParam("id") Primary id, Map<String, Object> additionalInfo)
	{
	 	return logic.validate(id.get(),additionalInfo);
	}	
	@PUT
	@Path("sslworkflow/assign/{id}")
	public M sslWorkflowAssign(@PathParam("id") Primary id, Map<String, Object> additionalInfo)
	{
	 	return logic.assign(id.get(),additionalInfo);
	}	

	
}
