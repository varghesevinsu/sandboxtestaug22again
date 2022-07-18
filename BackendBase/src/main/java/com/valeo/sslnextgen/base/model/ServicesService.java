package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum ServicesService {
	EMC("EMC"),
	ECAD("ECAD"),
	SERVICE_3("SERVICE 3"),
	SERVICE_4("SERVICE 4");

	private static final Map<String, ServicesService> displayNameMap = new HashMap<String, ServicesService>();
	static {
		for (ServicesService displayNameEnum : ServicesService.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	ServicesService(String displayName) {
		this.displayName = displayName;
	}

	public static ServicesService getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
