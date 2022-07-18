package com.valeo.sslnextgen.base.model;
import com.eva.base.model.BaseModel;
import com.eva.base.annotations.Table;
import com.eva.base.annotations.NotBlank;
import com.eva.base.annotations.Searchable;
import com.eva.base.util.ValidationErrorConstants;


@Table(name="ToolDesignType", keys={"sid"})
public class ToolDesignTypeBase extends BaseModel {

	@Searchable(index = true)
	private String pid;
	@Searchable(index = true)
	private Boolean enabled;
	@NotBlank
	@Searchable(index = false)
	private String toolDesignType;
	@Searchable(index = true)
	private String dummyTest;

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}

	public Boolean isEnabled() {
		return enabled;
	}

	public void setToolDesignType(String toolDesignType) {
		this.toolDesignType = toolDesignType;
	}

	public String getToolDesignType() {
		return toolDesignType;
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