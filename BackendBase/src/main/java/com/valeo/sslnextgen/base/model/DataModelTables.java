package com.valeo.sslnextgen.base.model;

import java.util.HashMap;
import java.util.Map;

public enum DataModelTables {
	STATUS("Status"),
	SERVICES("Services"),
	PROJECT_TYPE("Project type"),
	PLACE_OF_DEV("Place of dev"),
	REQUEST("Request"),
	TOOL_DESIGN_TYPE("Tool design type"),
	LAB("Lab"),
	HISTORY("History"),
	USER_GUIDE("User Guide"),
	MANPOWER("ManPower"),
	DELEGATION("Delegation"),
	TOOL("Tool");

	private static final Map<String, DataModelTables> displayNameMap = new HashMap<String, DataModelTables>();
	static {
		for (DataModelTables displayNameEnum : DataModelTables.values()) {
			displayNameMap.put(displayNameEnum.getDisplayName(), displayNameEnum);
		}
	}
	private String displayName;

	DataModelTables(String displayName) {
		this.displayName = displayName;
	}

	public static DataModelTables getDisplayNameEnum(String displayName) {
		return displayNameMap.get(displayName);
	}

	public String getDisplayName() {
		return displayName;
	}
}
