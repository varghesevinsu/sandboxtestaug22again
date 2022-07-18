package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum DelegationDelegationenddate {
	MONDAY("monday"),
	TUESDAY("tuesday"),
	WEDNESDAY("wednesday"),
	THURSDAY("thursday"),
	FRIDAY("friday"),
	SATURDAY("saturday"),
	SUNDAY("sunday");

	private static final Map<String, DelegationDelegationenddate> displayNameMap = new HashMap<String, DelegationDelegationenddate>();
	static {
		for (DelegationDelegationenddate displayNameEnum : DelegationDelegationenddate.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	DelegationDelegationenddate(String displayName) {
		this.displayName = displayName;
	}

	public static DelegationDelegationenddate getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
