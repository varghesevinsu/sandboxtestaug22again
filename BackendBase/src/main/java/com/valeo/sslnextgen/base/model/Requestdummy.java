package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum Requestdummy {
	MONDAY("monday"),
	TUESDAY("tuesday"),
	WEDNESDAY("wednesday"),
	THURSDAY("thursday"),
	FRIDAY("friday"),
	SATURDAY("saturday"),
	SUNDAY("sunday");

	private static final Map<String, Requestdummy> displayNameMap = new HashMap<String, Requestdummy>();
	static {
		for (Requestdummy displayNameEnum : Requestdummy.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	Requestdummy(String displayName) {
		this.displayName = displayName;
	}

	public static Requestdummy getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
