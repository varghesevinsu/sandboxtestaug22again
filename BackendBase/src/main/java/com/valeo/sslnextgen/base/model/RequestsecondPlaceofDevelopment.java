package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum RequestsecondPlaceofDevelopment {
	CRE1("CRE1"),
	CRE2("CRE2"),
	WUH1("WUH1"),
	WHU2("WHU2"),
	SHE1("SHE1");

	private static final Map<String, RequestsecondPlaceofDevelopment> displayNameMap = new HashMap<String, RequestsecondPlaceofDevelopment>();
	static {
		for (RequestsecondPlaceofDevelopment displayNameEnum : RequestsecondPlaceofDevelopment.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	RequestsecondPlaceofDevelopment(String displayName) {
		this.displayName = displayName;
	}

	public static RequestsecondPlaceofDevelopment getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
