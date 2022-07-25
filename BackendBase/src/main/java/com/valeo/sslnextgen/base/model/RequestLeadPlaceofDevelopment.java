package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum RequestLeadPlaceofDevelopment {
	CRE1("CRE1"),
	CRE2("CRE2"),
	WUH1("WUH1"),
	WUH2("WUH2"),
	SHE1("SHE1");

	private static final Map<String, RequestLeadPlaceofDevelopment> displayNameMap = new HashMap<String, RequestLeadPlaceofDevelopment>();
	static {
		for (RequestLeadPlaceofDevelopment displayNameEnum : RequestLeadPlaceofDevelopment.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	RequestLeadPlaceofDevelopment(String displayName) {
		this.displayName = displayName;
	}

	public static RequestLeadPlaceofDevelopment getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
