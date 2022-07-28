package com.valeo.sslnextgen.listener;

import com.eva.base.mail.providers.EmailProviderFactory;
import com.eva.base.mail.providers.SendGridEmailProvider;
import com.eva.base.mail.providers.IEmailProvider.EmailProviderTypes;

public class ApplicationListener extends BaseApplicationListener {
    @Override
	public void registerProvider() {
		super.registerProvider();
		EmailProviderFactory.registerProvider(EmailProviderTypes.SEND_GRID, new SendGridEmailProvider());
	}
	
	@Override
	public void initializeConfigurations() {
		super.initializeConfigurations();
		EmailProviderFactory.configureProviderProperties();
	}
}
