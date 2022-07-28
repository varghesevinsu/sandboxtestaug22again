package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum RequestServicetype {
	ECAD("ECAD"),
	EMC("EMC"),
	SERVICE1("SERVICE1");

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
