package com.valeo.sslnextgen.base.model;
import com.eva.base.model.BaseModel;
import com.eva.base.annotations.Table;
import com.eva.base.annotations.NotBlank;
import com.eva.base.annotations.Searchable;
import com.eva.base.util.ValidationErrorConstants;


@Table(name="Lab", keys={"sid"})
public class LabBase extends BaseModel {

	@Searchable(index = true)
	private String pid;
	@Searchable(index = true)
	private String test3;
	@Searchable(index = true)
	private String dummyTest;
	@NotBlank(message = ValidationErrorConstants.BLANK_VALUE)
	@Searchable(index = true)
	private String labName;

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

	public void setLabName(String labName) {
		this.labName = labName;
	}

	public String getLabName() {
		return labName;
	}



	public void setPid(String pid) {
		this.pid = pid;
	}

	public String getPid() {
		return pid;
	}
}