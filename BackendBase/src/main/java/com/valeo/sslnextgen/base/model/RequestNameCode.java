package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum RequestNameCode {
	FROM_ED1_("From ED1*"),
	FROM_ED2_("From ED2*"),
	FROM_ED3_("From ED3*");

	private static final Map<String, RequestNameCode> displayNameMap = new HashMap<String, RequestNameCode>();
	static {
		for (RequestNameCode displayNameEnum : RequestNameCode.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	RequestNameCode(String displayName) {
		this.displayName = displayName;
	}

	public static RequestNameCode getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
