package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum RequestEMCLab {
	VALUE1_FROM_LAB_TABLE("Value1 from Lab table"),
	VALUE2_FROM_LAB_TABLE("Value2 from Lab table");

	private static final Map<String, RequestEMCLab> displayNameMap = new HashMap<String, RequestEMCLab>();
	static {
		for (RequestEMCLab displayNameEnum : RequestEMCLab.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	RequestEMCLab(String displayName) {
		this.displayName = displayName;
	}

	public static RequestEMCLab getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
