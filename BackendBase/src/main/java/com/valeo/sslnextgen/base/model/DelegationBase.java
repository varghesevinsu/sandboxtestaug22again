package com.valeo.sslnextgen.base.model;
import com.eva.base.model.BaseModel;
import com.eva.base.annotations.Table;
import com.eva.base.annotations.NotBlank;
import com.eva.base.annotations.Searchable;
import com.eva.base.util.ValidationErrorConstants;
import java.util.Date;


@Table(name="Delegation", keys={"sid"})
public class DelegationBase extends BaseModel {

	@Searchable(index = true)
	private DelegationDelegationenddate delegationEndDate;
	@Searchable(index = true)
	private String approverLeader;
	@NotBlank(message = ValidationErrorConstants.BLANK_VALUE)
	@Searchable(index = true)
	private String delegateName;
	@Searchable(index = true)
	private String test2;
	@Searchable(index = true)
	private DelegationDelegationstartdate delegationStartDate;

	public void setDelegationEndDate(DelegationDelegationenddate delegationEndDate) {
		this.delegationEndDate = delegationEndDate;
	}

	public DelegationDelegationenddate getDelegationEndDate() {
		return delegationEndDate;
	}

	public void setApproverLeader(String approverLeader) {
		this.approverLeader = approverLeader;
	}

	public String getApproverLeader() {
		return approverLeader;
	}

	public void setDelegateName(String delegateName) {
		this.delegateName = delegateName;
	}

	public String getDelegateName() {
		return delegateName;
	}

	public void setTest2(String test2) {
		this.test2 = test2;
	}

	public String getTest2() {
		return test2;
	}

	public void setDelegationStartDate(DelegationDelegationstartdate delegationStartDate) {
		this.delegationStartDate = delegationStartDate;
	}

	public DelegationDelegationstartdate getDelegationStartDate() {
		return delegationStartDate;
	}



}