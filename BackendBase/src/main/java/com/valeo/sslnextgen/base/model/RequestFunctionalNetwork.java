package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum RequestFunctionalNetwork {
	FROM_ED_1("From ED 1"),
	FROM_ED2("From ED2"),
	FROM_ED3("From ED3");

	private static final Map<String, RequestFunctionalNetwork> displayNameMap = new HashMap<String, RequestFunctionalNetwork>();
	static {
		for (RequestFunctionalNetwork displayNameEnum : RequestFunctionalNetwork.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	RequestFunctionalNetwork(String displayName) {
		this.displayName = displayName;
	}

	public static RequestFunctionalNetwork getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
