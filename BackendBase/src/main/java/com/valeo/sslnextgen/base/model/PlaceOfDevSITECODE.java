package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum PlaceOfDevSITECODE {
	SITE1_FROM_ED("Site1 from ED"),
	SITE2_FROM_ED("Site2 from ED"),
	SITE_3_FROM_ED("Site 3 from ED"),
	PLEASE_SELECT("Please select");

	private static final Map<String, PlaceOfDevSITECODE> displayNameMap = new HashMap<String, PlaceOfDevSITECODE>();
	static {
		for (PlaceOfDevSITECODE displayNameEnum : PlaceOfDevSITECODE.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	PlaceOfDevSITECODE(String displayName) {
		this.displayName = displayName;
	}

	public static PlaceOfDevSITECODE getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
