package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum RequestJobCode {
	FROM_ED1_("From ED1*"),
	FROM_ED2_("From ED2*"),
	FROM_ED3_("From ED3*");

	private static final Map<String, RequestJobCode> displayNameMap = new HashMap<String, RequestJobCode>();
	static {
		for (RequestJobCode displayNameEnum : RequestJobCode.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	RequestJobCode(String displayName) {
		this.displayName = displayName;
	}

	public static RequestJobCode getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
