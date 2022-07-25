package com.valeo.sslnextgen.integrations.rest.str;

import java.util.HashMap;
import java.util.Map;

import com.eva.base.appconfiguration.AppConfigurationCache;
import com.eva.base.cache.CacheManager;
import com.eva.base.rest.RESTAPIAuthenticationType;
import com.eva.base.rest.APIConstants;

public class StrRestAPIProvider {
	public static final String PROVIDER_NAME = "Str";
	public static String baseURL;
	protected static RESTAPIAuthenticationType apiAuthenticationType = RESTAPIAuthenticationType.OAUTH2;
	protected static Map<String, String> authenticationDetails = new HashMap<>();
	
	public static void init() {
		AppConfigurationCache configCache = CacheManager.getInstance().getCache(AppConfigurationCache.NAME);
		baseURL = (String) configCache.get("Str_base_url");
		authenticationDetails.put(APIConstants.PROVIDER_NAME, PROVIDER_NAME);
		authenticationDetails.put(APIConstants.OAUTH_CLIENT_ID,
				(String) configCache.get("Str_client_id"));
		authenticationDetails.put(APIConstants.OAUTH_CLIENT_SECRET,
				(String) configCache.get("Str_client_secret"));
		authenticationDetails.put(APIConstants.OAUTH_AUTHORIZE_URL,
				(String) configCache.get("Str_authorize_url"));
		authenticationDetails.put(APIConstants.OAUTH_REDIRECT_URL,
				(String) configCache.get("Str_redirect_url"));
		authenticationDetails.put(APIConstants.OAUTH_REFRESH_URL,
				(String) configCache.get("Str_refresh_url"));
		authenticationDetails.put(APIConstants.OAUTH_GRANT_TYPE,
				(String) configCache.get("Str_grant_type"));
	}
}