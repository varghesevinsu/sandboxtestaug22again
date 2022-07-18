package com.valeo.sslnextgen.model;

import java.util.HashMap;
import java.util.Map;

public enum Roles {
	DEVADMIN(7,"Development Administrator"),
VIEWER(5,"Viewer"),
LEADER(4,"Leader"),
APPROVER(2,"Approver"),
SCHEDULER(6,"Scheduler"),
ADMIN(1,"Admin"),
REQUESTER(3,"Requester ");

	private static final Map<String, Roles> roleNameMap = new HashMap<String, Roles>();
	static {
		for (Roles roleNameEnum : Roles.values()) {
			roleNameMap.put(roleNameEnum.getRoleName(), roleNameEnum);
		}
	}
	
	private Integer roleId;
	private String roleName;

	Roles(Integer roleId,String roleName) {
		this.setRoleId(roleId);
		this.setRoleName(roleName);
	}

	public static Roles getRoleNameEnum(String roleName) {
		return roleNameMap.get(roleName);
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
	
	public Integer getRoleId() {
		return roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}
}
