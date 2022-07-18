package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum RequestProjectorActivity {
	PROJECT("Project"),
	ACTIVITY("Activity");

	private static final Map<String, RequestProjectorActivity> displayNameMap = new HashMap<String, RequestProjectorActivity>();
	static {
		for (RequestProjectorActivity displayNameEnum : RequestProjectorActivity.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	RequestProjectorActivity(String displayName) {
		this.displayName = displayName;
	}

	public static RequestProjectorActivity getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
