package com.valeo.sslnextgen.base.model;
import com.eva.base.model.BaseModel;
import com.eva.base.annotations.Table;
import com.eva.base.annotations.Searchable;
import java.util.Date;


@Table(name="History", keys={"sid"})
public class HistoryBase extends BaseModel {

	@Searchable(index = true)
	private String pid;
	@Searchable(index = false)
	private String who;
	@Searchable(index = false)
	private String comment;
	@Searchable(index = true)
	private String dummyTest;
	@Searchable(index = true)
	private Long requestCode;
	@Searchable(index = false)
	private String nextStatus;
	@Searchable(index = false)
	private String currentStatus;
	@Searchable(index = false)
	private String role;
	@Searchable(index = false)
	private String action;
	@Searchable(index = true)
	private Date when;

	public void setWho(String who) {
		this.who = who;
	}

	public String getWho() {
		return who;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getComment() {
		return comment;
	}

	public void setDummyTest(String dummyTest) {
		this.dummyTest = dummyTest;
	}

	public String getDummyTest() {
		return dummyTest;
	}

	public void setRequestCode(Long requestCode) {
		this.requestCode = requestCode;
	}

	public Long getRequestCode() {
		return requestCode;
	}

	public void setNextStatus(String nextStatus) {
		this.nextStatus = nextStatus;
	}

	public String getNextStatus() {
		return nextStatus;
	}

	public void setCurrentStatus(String currentStatus) {
		this.currentStatus = currentStatus;
	}

	public String getCurrentStatus() {
		return currentStatus;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getRole() {
		return role;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public String getAction() {
		return action;
	}

	public void setWhen(Date when) {
		this.when = when;
	}

	public Date getWhen() {
		return when;
	}



	public void setPid(String pid) {
		this.pid = pid;
	}

	public String getPid() {
		return pid;
	}
}