package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum ManPowerSERVICE {
	EMC("EMC"),
	ECAD("ECAD"),
	SERVICE2("SERVICE2");

	private static final Map<String, ManPowerSERVICE> displayNameMap = new HashMap<String, ManPowerSERVICE>();
	static {
		for (ManPowerSERVICE displayNameEnum : ManPowerSERVICE.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	ManPowerSERVICE(String displayName) {
		this.displayName = displayName;
	}

	public static ManPowerSERVICE getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
