package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum RequestPanelization {
	YES("Yes"),
	NO("No");

	private static final Map<String, RequestPanelization> displayNameMap = new HashMap<String, RequestPanelization>();
	static {
		for (RequestPanelization displayNameEnum : RequestPanelization.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	RequestPanelization(String displayName) {
		this.displayName = displayName;
	}

	public static RequestPanelization getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
