package com.valeo.sslnextgen.base.model;
import com.eva.base.model.BaseModel;
import com.eva.base.annotations.Table;
import com.eva.base.annotations.NotBlank;
import com.eva.base.annotations.Searchable;
import com.eva.base.util.ValidationErrorConstants;


@Table(name="ProjectType", keys={"sid"})
public class ProjectTypeBase extends BaseModel {

	@Searchable(index = true)
	private String pid;
	@NotBlank
	@Searchable(index = true)
	private String projectType;
	@Searchable(index = true)
	private Boolean status;
	@Searchable(index = true)
	private String dummyTest;

	public void setProjectType(String projectType) {
		this.projectType = projectType;
	}

	public String getProjectType() {
		return projectType;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public Boolean isStatus() {
		return status;
	}

	public void setDummyTest(String dummyTest) {
		this.dummyTest = dummyTest;
	}

	public String getDummyTest() {
		return dummyTest;
	}



	public void setPid(String pid) {
		this.pid = pid;
	}

	public String getPid() {
		return pid;
	}
}