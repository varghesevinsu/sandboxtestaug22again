package com.valeo.sslnextgen.listener;

import com.eva.base.listener.EvaApplicationListener;
import com.eva.base.loader.ServletContextParamLoader;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Collections;
import javax.servlet.ServletContextEvent;

import org.slf4j.ext.XLogger;
import org.slf4j.ext.XLoggerFactory;

import com.eva.base.cache.CacheManager;
import com.eva.base.dal.providers.PersistenceType;
import com.eva.base.exception.BaseEvaException;
import com.eva.base.factory.ProviderFactory;

import com.eva.base.provider.RegistrationProvider;
import com.eva.base.transaction.TransactionManager;
import com.eva.base.cache.ServiceAclCache;
import com.eva.base.crypto.provider.CipherCryptoConfigKeys;
import com.valeo.sslnextgen.logic.ApplicationUserBLImpl;
import com.valeo.sslnextgen.model.ApplicationUser;
import com.eva.base.crypto.loader.CipheCryptoConfig;
import com.eva.base.crypto.loader.CipherCryptoConfigConstants;
import com.eva.base.cache.WorkflowConfigurationCache;
import com.eva.base.util.Constants;

import com.eva.base.cache.MenuCache;
import com.eva.base.authentication.logic.AppUserPrivilegeCache;
import com.eva.base.appconfiguration.AppConfigurationCache;
import com.vs.eva.gcp.firestore.BaseGCPFSDal;
import com.vs.eva.gcp.firestore.connection.FSTransactionManager;
import com.vs.eva.gaelibrary.memcache.MemCacheProvider;
import com.eva.base.factory.CacheProviderFactory;
import com.vs.eva.gaelibrary.search.BaseGAESearchDal;
import com.vs.eva.gaelibrary.search.connection.SearchTransactionManager;
import com.vs.eva.gcs.CloudStorage;
import com.eva.base.factory.StorageFactory;
import com.eva.base.rest.authproviders.APIAuthProviderFactory;
import com.eva.base.rest.authproviders.OAuth2APIAuthProvider;
import com.valeo.sslnextgen.integrations.rest.str.StrRestAPIProvider;


public abstract class BaseApplicationListener implements EvaApplicationListener {	
private XLogger LOGGER = XLoggerFactory.getXLogger(BaseApplicationListener.class);
	
	@Override
	public List<RegistrationProvider> initialized(ServletContextEvent sce) {
		return Collections.EMPTY_LIST;
	}

	@Override
	public List<RegistrationProvider> destroyed(ServletContextEvent sce) {
		return Collections.EMPTY_LIST;
	}

	@Override
	public void registerProvider() {
		LOGGER.debug("Registering Providers");
		ProviderFactory.register(PersistenceType.DB, new BaseGCPFSDal<>());
		CacheProviderFactory.registerProvider(new MemCacheProvider());
		ProviderFactory.register(PersistenceType.SEARCH, new BaseGAESearchDal<>());
		StorageFactory.register(PersistenceType.FILES, new CloudStorage());
		LOGGER.debug("Registering storage Providers");
		
		APIAuthProviderFactory.registerProvider("Str", new OAuth2APIAuthProvider());
	}

	@Override
	public void registerCache() {
		LOGGER.debug("Registering application user and menu Cache");
		CacheManager manager = CacheManager.getInstance();
		manager.register(new AppConfigurationCache());
		manager.register(new AppUserPrivilegeCache<ApplicationUser>(new ApplicationUserBLImpl()));
		manager.register(new MenuCache());		
		// manager.register(new TaskHandlerCache(new TaskHandlerBL<>(TaskHandler.class)));
		manager.register(new ServiceAclCache());
		Map<String, String> workflowConfigFiles = new HashMap<>();
		ServletContextParamLoader loader = ServletContextParamLoader.getInstance();
		String wfConfigLocation = loader.get(CipherCryptoConfigConstants.CONFIG_LOCATION) + Constants.FORWARD_SLASH
				+ CipherCryptoConfigConstants.WORKFLOW_FOLDER + Constants.FORWARD_SLASH
				+ loader.get(CipherCryptoConfigConstants.MODULE_NAME);
		workflowConfigFiles.put(wfConfigLocation, "sslworkflow_workflow.json");
		manager.register(new WorkflowConfigurationCache(new CipheCryptoConfig(workflowConfigFiles, false)));
	}

	@Override
	public void registerTxnManagers() {
		LOGGER.debug("Registering Transaction Manager Providers");
		TransactionManager.register(PersistenceType.DB, new FSTransactionManager());
		TransactionManager.register(PersistenceType.SEARCH, new SearchTransactionManager());
		  TransactionManager.register(PersistenceType.QUEUE, new FSTransactionManager());
	}
	
	@Override
	public void contextInitialized(ServletContextEvent sce) {
		System.setProperty(BaseEvaException.ERROR_MSG_SYSTEM_PROPERTY, "custom_error_messages");
		EvaApplicationListener.super.contextInitialized(sce);
	}

	@Override
	public void initializeRESTAPIProviders() {
		StrRestAPIProvider.init();
	}
	
	@Override
	public void registerDeployers() {
		
	}
	
	@Override
	public void initializeConfigurations() {
		Map<CipherCryptoConfigKeys, Object> config = new HashMap<>();
		ServletContextParamLoader loader = ServletContextParamLoader.getInstance();
		/*config.put(GoogleCipherCryptoConfigKeys.PROJECT_ID, AppEngineProperty.PROJECT_ID);
		config.put(GoogleCipherCryptoConfigKeys.KEY_RING_ID, loader.get(GoogleCipherCryptoConfigConstants.KEY_RING_ID));
		config.put(GoogleCipherCryptoConfigKeys.KEY_LOCATION_ID, loader.get(GoogleCipherCryptoConfigConstants.KEY_LOCATION_ID));
		config.put(GoogleCipherCryptoConfigKeys.KEY_ID, loader.get(GoogleCipherCryptoConfigConstants.KEY_ID));
		CipherCryptoProviderFactory.getProvider().configure(config);*/
	}
}
