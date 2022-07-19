package com.valeo.sslnextgen.base.webservice;

import javax.ws.rs.Path;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.eva.base.dal.providers.PersistenceType;
import com.eva.jersey.base.webservice.BaseWebService;
import com.valeo.sslnextgen.base.logic.IHistoryBLBase;
import com.valeo.sslnextgen.base.model.HistoryBase;
import javax.ws.rs.PUT;

import javax.ws.rs.QueryParam;

import java.util.List;

import javax.ws.rs.PathParam;

import javax.ws.rs.POST;

import javax.ws.rs.DELETE;

import com.eva.base.model.PaginationRequest;

import com.eva.base.model.PaginationResponse;

import com.eva.base.model.Primary;

import javax.ws.rs.GET;

import java.util.Map;

@Produces(MediaType.APPLICATION_JSON)
public abstract class HistoryServiceBaseImpl<BL extends IHistoryBLBase<M>, M extends HistoryBase>
		extends BaseWebService<BL, M> {
	
	
	public HistoryServiceBaseImpl(BL logic) {
		super(logic);
	}
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/bypid/{pid}")
	public List<M> getHistoryByPId(@PathParam("pid") String pid) {
		return logic.getHistoryByPId(pid);
	}


	@PUT
	public M update(M modelObj) {
		return super.update(modelObj);
	}



	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/autosuggest")
	public List<Object> autoSuggestService(@QueryParam("q") String searchText,@QueryParam("sortColumn") String sortColumn,@QueryParam("sortOrder") String sortOrder,@QueryParam("pgNo") int pgNo,@QueryParam("pgLen") int length) {
		return super.autosuggest(searchText,sortColumn,sortOrder,pgNo,length);
	}


	@POST
	@Path("/datatable/{pid}")
	public PaginationResponse getDatatableDataByPId(PaginationRequest dataTable, @PathParam("pid") String pid)
	{
	 	return logic.getDatatableDataByPId(dataTable,pid);
	}	


	@POST
	public M create(M modelObj) {
		return super.save(modelObj);
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


	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("byrequestcode/{requestcode}")
	public M getByRequestCode(@PathParam("requestcode") Long requestCode) {
		return logic.getByRequestCode(requestCode);
	}


	@POST
	@Path("/datatable")
	public PaginationResponse getDatatableData(PaginationRequest dataTable)
	{
	 	return logic.getAllByPage(PersistenceType.SEARCH, dataTable);
	}
	


	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{sid}")
	public M getById(@PathParam("sid") Primary sid) {
		return super.getById(sid);
	}



	
}
