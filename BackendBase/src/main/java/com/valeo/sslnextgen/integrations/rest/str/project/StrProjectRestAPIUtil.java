package com.valeo.sslnextgen.integrations.rest.str.project;

import org.apache.commons.lang3.exception.ExceptionUtils;
import com.eva.base.logger.Logger;
import com.eva.base.logger.LoggerFactory;

import com.valeo.sslnextgen.integrations.rest.str.StrRestAPIProvider;
import com.valeo.sslnextgen.integrations.rest.str.model.Projec;
import com.eva.base.rest.HTTPMediaType;
import com.eva.base.exception.InternalException;
import com.eva.base.rest.BaseRestServiceExecutor;
import com.eva.base.rest.APIConstants;
import com.eva.base.rest.HttpMethod;
import com.eva.base.rest.InputDefinition;
import com.eva.base.rest.OutputDefinition;
import com.eva.base.rest.ResponseObject;
import com.eva.base.rest.Service;
import com.eva.jersey.rest.JerseyRestServiceExecutor;

public class StrProjectRestAPIUtil extends StrRestAPIProvider {
	private static final Logger LOGGER = LoggerFactory.getLogger(StrProjectRestAPIUtil.class);
	private static BaseRestServiceExecutor getExecutor() {
		return new JerseyRestServiceExecutor();
	}

	public static Projec getdetailsProject() {
		Service service =
				new Service(baseURL + "/pjt/v3/projects/{projectID}", HttpMethod.GET, HTTPMediaType.NONE, HTTPMediaType.JSON);
		InputDefinition inputDefinition = InputDefinition.builder()
				.authentication(apiAuthenticationType, authenticationDetails).build();
		OutputDefinition outputDefinition =
				OutputDefinition.builder().isJson(true).pojoClass(Projec.class).build();
		try {
			ResponseObject responseObject = getExecutor().execute(service, inputDefinition, outputDefinition, null);
			return (Projec) responseObject.getResponseContent();			
		} catch (Exception e) {
			LOGGER.error("Exception in API Execution :" + ExceptionUtils.getStackTrace(e));
			throw new InternalException("API Exception");
		}
	}
}
