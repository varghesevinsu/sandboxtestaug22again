package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum ManPowerCURRENCY {
	EURO("EURO"),
	USD("USD"),
	YUAN("YUAN"),
	PLEASE_SELECT("Please select");

	private static final Map<String, ManPowerCURRENCY> displayNameMap = new HashMap<String, ManPowerCURRENCY>();
	static {
		for (ManPowerCURRENCY displayNameEnum : ManPowerCURRENCY.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	ManPowerCURRENCY(String displayName) {
		this.displayName = displayName;
	}

	public static ManPowerCURRENCY getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
