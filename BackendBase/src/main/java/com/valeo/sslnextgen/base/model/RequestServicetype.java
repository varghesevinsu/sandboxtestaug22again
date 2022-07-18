package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum RequestServicetype {
	EMC("EMC"),
	ECAD("ECAD"),
	SERVICE3("SERVICE3"),
	SERVICE4("SERVICE4");

	private static final Map<String, RequestServicetype> displayNameMap = new HashMap<String, RequestServicetype>();
	static {
		for (RequestServicetype displayNameEnum : RequestServicetype.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	RequestServicetype(String displayName) {
		this.displayName = displayName;
	}

	public static RequestServicetype getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
