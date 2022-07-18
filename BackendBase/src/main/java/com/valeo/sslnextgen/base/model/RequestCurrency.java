package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum RequestCurrency {
	EURO("Euro"),
	USD("USD"),
	YUAN("Yuan"),
	PLEASE_SELECT("Please select");

	private static final Map<String, RequestCurrency> displayNameMap = new HashMap<String, RequestCurrency>();
	static {
		for (RequestCurrency displayNameEnum : RequestCurrency.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	RequestCurrency(String displayName) {
		this.displayName = displayName;
	}

	public static RequestCurrency getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
