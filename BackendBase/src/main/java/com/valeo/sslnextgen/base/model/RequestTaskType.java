package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum RequestTaskType {
	VALUE1_FROM_DESIGNTOOL_TABLE("Value1 from DesignTool table");

	private static final Map<String, RequestTaskType> displayNameMap = new HashMap<String, RequestTaskType>();
	static {
		for (RequestTaskType displayNameEnum : RequestTaskType.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	RequestTaskType(String displayName) {
		this.displayName = displayName;
	}

	public static RequestTaskType getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
