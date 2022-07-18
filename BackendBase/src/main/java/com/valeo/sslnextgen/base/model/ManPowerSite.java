package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum ManPowerSite {
	SITE1_FROM_ED("Site1 from ED"),
	SITE2_FRROM_ED("Site2 frrom ED"),
	SITE3_FROM_ED("Site3 from ED"),
	PLEASE_SELECT("Please select");

	private static final Map<String, ManPowerSite> displayNameMap = new HashMap<String, ManPowerSite>();
	static {
		for (ManPowerSite displayNameEnum : ManPowerSite.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	ManPowerSite(String displayName) {
		this.displayName = displayName;
	}

	public static ManPowerSite getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
