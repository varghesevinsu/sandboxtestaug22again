package com.valeo.sslnextgen.base.webservice;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.glassfish.jersey.media.multipart.BodyPartEntity;
import org.glassfish.jersey.media.multipart.FormDataBodyPart;
import org.glassfish.jersey.media.multipart.FormDataMultiPart;

import com.eva.base.attachment.logic.EvaAttachment;
import com.eva.base.attachment.model.FileDownloadInfo;
import com.eva.base.attachment.model.FileInfo;
import com.eva.base.attachment.model.FileUploadInfo;
import com.eva.base.model.EvaAttachmentResponse;
import com.eva.jersey.base.webservice.BaseWebService;
import com.eva.storage.files.AttachmentBL;

@Produces(MediaType.APPLICATION_JSON)
public class AttachmentServiceBaseImpl<BL extends AttachmentBL> extends BaseWebService<BL, EvaAttachment> {
	public AttachmentServiceBaseImpl(BL logic) {
		super(logic);
	}

	@POST
	@Path("/upload")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	public List<EvaAttachmentResponse> upload(FormDataMultiPart multiPart) {
		FileUploadInfo fileUploadInfo = new FileUploadInfo();
		fileUploadInfo.setModelName(multiPart.getField("modelName").getValue());
		fileUploadInfo.setModelKey(multiPart.getField("modelKey").getValue());
		fileUploadInfo.setFieldName(multiPart.getField("fieldName").getValue());
		fileUploadInfo.setFileDesc(multiPart.getField("fileDesc").getValue());
		List<FormDataBodyPart> bodyParts = multiPart.getFields("files");
		List<FileInfo> fileInfo = new ArrayList<>(bodyParts.size());
		for (int i = 0; i < bodyParts.size(); i++) {
			BodyPartEntity bodyPartEntity = (BodyPartEntity) bodyParts.get(i).getEntity();
			fileInfo.add(new FileInfo(bodyPartEntity.getInputStream(),
					bodyParts.get(i).getContentDisposition().getFileName()));
		}
		fileUploadInfo.setFileInfo(fileInfo);
		return logic.upload(fileUploadInfo);
	}

	@GET
	@Path("/download/attachment/{attachment_id}")
	public Response downloadAsAttachment(@PathParam("attachment_id") String attachmentId) throws IOException {
		FileDownloadInfo fileDownloadInfo = logic.download(attachmentId);
		return Response.ok(fileDownloadInfo.getInputStream(), MediaType.APPLICATION_OCTET_STREAM)
				.header("content-disposition", "attachment; filename = " + fileDownloadInfo.getFileName()).build();
	}
	
	@GET
	@Path("/download/inline/{attachment_id}")
	public Response downloadAsInline(@PathParam("attachment_id") String attachmentId) throws IOException {
		FileDownloadInfo fileDownloadInfo = logic.download(attachmentId);
		return Response.ok(fileDownloadInfo.getInputStream(), MediaType.APPLICATION_OCTET_STREAM)
				.header("content-disposition", "inline; filename = " + fileDownloadInfo.getFileName()).build();
	}
	
	@GET
	@Path("/all/{modelKey}")
	public List<EvaAttachment> getAllByModelKey(@PathParam("modelKey") String modelKey) throws IOException {
		return logic.getAllByModelKey(modelKey);
	}
	
	@POST
	@Path("/link")
	public EvaAttachmentResponse addLink(EvaAttachment linkAttachment) throws IOException {
		return logic.addLink(linkAttachment);
	}
}
