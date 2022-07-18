package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum RequestSchedulercurrency {
	EURO("EURO"),
	USD("USD"),
	YUAN("YUAN"),
	PLEASE_SELECT("Please select");

	private static final Map<String, RequestSchedulercurrency> displayNameMap = new HashMap<String, RequestSchedulercurrency>();
	static {
		for (RequestSchedulercurrency displayNameEnum : RequestSchedulercurrency.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	RequestSchedulercurrency(String displayName) {
		this.displayName = displayName;
	}

	public static RequestSchedulercurrency getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
