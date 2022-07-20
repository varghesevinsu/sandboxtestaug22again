package com.valeo.sslnextgen.base.model;
import com.eva.base.model.BaseModel;
import com.eva.base.annotations.Table;
import com.eva.base.annotations.Searchable;
import javax.validation.constraints.NotNull;
import com.eva.base.util.ValidationErrorConstants;


@Table(name="Status", keys={"sid"})
public class StatusBase extends BaseModel {

	@Searchable(index = true)
	private String pid;
	@Searchable(index = true)
	private String test3;
	@Searchable(index = true)
	private String dummyTest;
	@NotNull(message = ValidationErrorConstants.NULL_VALUE)
	@Searchable(index = true)
	private StatusStatusoftherequest statusOfTheRequest;

	public void setTest3(String test3) {
		this.test3 = test3;
	}

	public String getTest3() {
		return test3;
	}

	public void setDummyTest(String dummyTest) {
		this.dummyTest = dummyTest;
	}

	public String getDummyTest() {
		return dummyTest;
	}

	public void setStatusOfTheRequest(StatusStatusoftherequest statusOfTheRequest) {
		this.statusOfTheRequest = statusOfTheRequest;
	}

	public StatusStatusoftherequest getStatusOfTheRequest() {
		return statusOfTheRequest;
	}



	public void setPid(String pid) {
		this.pid = pid;
	}

	public String getPid() {
		return pid;
	}
}