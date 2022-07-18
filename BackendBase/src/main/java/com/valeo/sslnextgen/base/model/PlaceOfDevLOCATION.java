package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum PlaceOfDevLOCATION {
	LOCATION1_FROM_ED("Location1 from ED"),
	LOCATION2_FROM_ED("Location2 from ED"),
	LOCATION3_FROM_ED("Location3 from ED"),
	PLEASE_SELECT("Please select");

	private static final Map<String, PlaceOfDevLOCATION> displayNameMap = new HashMap<String, PlaceOfDevLOCATION>();
	static {
		for (PlaceOfDevLOCATION displayNameEnum : PlaceOfDevLOCATION.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	PlaceOfDevLOCATION(String displayName) {
		this.displayName = displayName;
	}

	public static PlaceOfDevLOCATION getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
