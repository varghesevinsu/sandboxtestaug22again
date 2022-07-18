package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum RequestStatusoftherequest {
	DRAFT("Draft"),
	SCHEDULER_ANALYSIS("Scheduler Analysis"),
	LEADER_VERIFICATION("Leader Verification"),
	APPROVER_VALIDATION("Approver Validation"),
	COMPLETED("Completed"),
	CANCELLED("Cancelled"),
	CLOSED("Closed");

	private static final Map<String, RequestStatusoftherequest> displayNameMap = new HashMap<String, RequestStatusoftherequest>();
	static {
		for (RequestStatusoftherequest displayNameEnum : RequestStatusoftherequest.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	RequestStatusoftherequest(String displayName) {
		this.displayName = displayName;
	}

	public static RequestStatusoftherequest getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
