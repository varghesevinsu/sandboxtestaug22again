package com.valeo.sslnextgen.base.model;

import com.eva.base.annotations.Searchable;
import com.eva.base.authentication.UserPrivilege;

public class ApplicationUserBase extends UserPrivilege {


	@Searchable(index = true)
	private Boolean leader=false;
	@Searchable(index = true)
	private Boolean approver=false;
	@Searchable(index = true)
	private Boolean viewer=false;
	@Searchable(index = true)
	private Boolean scheduler=false;
	@Searchable(index = true)
	private Boolean admin=false;
	@Searchable(index = true)
	private Boolean requester=false;

	public void setLeader(Boolean leader) {
		this.leader = leader;
	}

	public Boolean isLeader() {
		return leader;
	}

	public void setApprover(Boolean approver) {
		this.approver = approver;
	}

	public Boolean isApprover() {
		return approver;
	}

	public void setViewer(Boolean viewer) {
		this.viewer = viewer;
	}

	public Boolean isViewer() {
		return viewer;
	}

	public void setScheduler(Boolean scheduler) {
		this.scheduler = scheduler;
	}

	public Boolean isScheduler() {
		return scheduler;
	}

	public void setAdmin(Boolean admin) {
		this.admin = admin;
	}

	public Boolean isAdmin() {
		return admin;
	}

	public void setRequester(Boolean requester) {
		this.requester = requester;
	}

	public Boolean isRequester() {
		return requester;
	}


}