package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum StatusStatusoftherequest {
	DRAFT("Draft"),
	SCHEDULER_ANALYSIS("Scheduler Analysis"),
	LEADER_VERIFICATION("Leader Verification "),
	APPROVER_VALIDATION("Approver Validation"),
	COMPLETED("Completed"),
	CANCELLED("Cancelled ");

	private static final Map<String, StatusStatusoftherequest> displayNameMap = new HashMap<String, StatusStatusoftherequest>();
	static {
		for (StatusStatusoftherequest displayNameEnum : StatusStatusoftherequest.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	StatusStatusoftherequest(String displayName) {
		this.displayName = displayName;
	}

	public static StatusStatusoftherequest getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
