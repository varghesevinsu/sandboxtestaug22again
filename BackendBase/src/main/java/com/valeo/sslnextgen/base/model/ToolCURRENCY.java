package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum ToolCURRENCY {
	EURO("EURO"),
	USD("USD"),
	YUAN("YUAN"),
	PLEASE_SELECT("Please select");

	private static final Map<String, ToolCURRENCY> displayNameMap = new HashMap<String, ToolCURRENCY>();
	static {
		for (ToolCURRENCY displayNameEnum : ToolCURRENCY.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	ToolCURRENCY(String displayName) {
		this.displayName = displayName;
	}

	public static ToolCURRENCY getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
