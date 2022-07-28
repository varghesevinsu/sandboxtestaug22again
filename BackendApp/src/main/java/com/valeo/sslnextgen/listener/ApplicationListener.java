package com.valeo.sslnextgen.listener;

import com.eva.base.factory.ProviderFactory;
import com.eva.base.dal.providers.PersistenceType;
import com.vs.eva.gcp.firestore.BaseGCPFSDal;
import com.eva.base.factory.CacheProviderFactory;
import com.vs.eva.gaelibrary.memcache.MemCacheProvider;
import com.vs.eva.gaelibrary.search.BaseGAESearchDal;
import com.eva.base.factory.StorageFactory;
import com.vs.eva.gcs.CloudStorage;
import com.eva.base.mail.providers.EmailProviderFactory;
import com.eva.base.mail.providers.SendGridEmailProvider;
import com.eva.base.mail.providers.IEmailProvider.EmailProviderTypes;
import com.eva.base.rest.authproviders.APIAuthProviderFactory;
import com.eva.base.rest.authproviders.OAuth2APIAuthProvider;


public class ApplicationListener extends BaseApplicationListener {
   		ProviderFactory.register(PersistenceType.DB, new BaseGCPFSDal<>());
		CacheProviderFactory.registerProvider(new MemCacheProvider());
		ProviderFactory.register(PersistenceType.SEARCH, new BaseGAESearchDal<>());
		StorageFactory.register(PersistenceType.FILES, new CloudStorage());

		EmailProviderFactory.registerProvider(EmailProviderTypes.SEND_GRID, new SendGridEmailProvider());	
		APIAuthProviderFactory.registerProvider("Str", new OAuth2APIAuthProvider());

	
	@Override
	public void initializeConfigurations() {
		EmailProviderFactory.configureProviderProperties();
	}
}
