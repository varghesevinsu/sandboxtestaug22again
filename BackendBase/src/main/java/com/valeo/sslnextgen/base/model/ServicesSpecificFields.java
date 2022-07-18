package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum ServicesSpecificFields {
	EMC("EMC"),
	ECAD("ECAD"),
	N_A("N/A");

	private static final Map<String, ServicesSpecificFields> displayNameMap = new HashMap<String, ServicesSpecificFields>();
	static {
		for (ServicesSpecificFields displayNameEnum : ServicesSpecificFields.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	ServicesSpecificFields(String displayName) {
		this.displayName = displayName;
	}

	public static ServicesSpecificFields getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
