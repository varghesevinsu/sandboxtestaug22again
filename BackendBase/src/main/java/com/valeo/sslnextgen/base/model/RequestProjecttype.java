package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum RequestProjecttype {
	VALUE1_FROM_PR_TABLE("Value1 from PR table"),
	VALUE2_FROM_PR_TABLE("Value2 from PR table ");

	private static final Map<String, RequestProjecttype> displayNameMap = new HashMap<String, RequestProjecttype>();
	static {
		for (RequestProjecttype displayNameEnum : RequestProjecttype.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	RequestProjecttype(String displayName) {
		this.displayName = displayName;
	}

	public static RequestProjecttype getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
