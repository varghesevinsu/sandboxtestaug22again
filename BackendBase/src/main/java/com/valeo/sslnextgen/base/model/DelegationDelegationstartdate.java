package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum DelegationDelegationstartdate {
	MONDAY("monday"),
	TUESDAY("tuesday"),
	WEDNESDAY("wednesday"),
	THURSDAY("thursday"),
	FRIDAY("friday"),
	SATURDAY("saturday"),
	SUNDAY("sunday");

	private static final Map<String, DelegationDelegationstartdate> displayNameMap = new HashMap<String, DelegationDelegationstartdate>();
	static {
		for (DelegationDelegationstartdate displayNameEnum : DelegationDelegationstartdate.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	DelegationDelegationstartdate(String displayName) {
		this.displayName = displayName;
	}

	public static DelegationDelegationstartdate getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
