package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum PlaceOfDevENTITY {
	ENTITY1_FROM_ED("Entity1 from ED"),
	ENTITY2_FROM_ED("Entity2 from ED"),
	ENTITY3_FROM_ED("Entity3 from ED"),
	PLEASE_SELECT("Please select");

	private static final Map<String, PlaceOfDevENTITY> displayNameMap = new HashMap<String, PlaceOfDevENTITY>();
	static {
		for (PlaceOfDevENTITY displayNameEnum : PlaceOfDevENTITY.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	PlaceOfDevENTITY(String displayName) {
		this.displayName = displayName;
	}

	public static PlaceOfDevENTITY getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
