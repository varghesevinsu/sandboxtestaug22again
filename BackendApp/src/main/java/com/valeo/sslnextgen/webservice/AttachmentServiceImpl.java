package com.valeo.sslnextgen.webservice;

import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.eva.base.factory.InstanceFactory;
import com.valeo.sslnextgen.logic.AttachmentBLImpl;
import com.valeo.sslnextgen.base.webservice.AttachmentServiceBaseImpl;

@Path("attachments")
@Produces(MediaType.APPLICATION_JSON)
public class AttachmentServiceImpl extends AttachmentServiceBaseImpl<AttachmentBLImpl> {
	public AttachmentServiceImpl() {
		super(InstanceFactory.getInstance(AttachmentBLImpl.class));
	}
}
