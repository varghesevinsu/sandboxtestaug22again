package com.valeo.sslnextgen.base.model;
import com.eva.base.model.BaseModel;
import com.eva.base.annotations.Table;
import com.eva.base.annotations.NotBlank;
import com.eva.base.annotations.Searchable;
import javax.validation.constraints.NotNull;
import com.eva.base.util.ValidationErrorConstants;


@Table(name="Tool", keys={"sid"})
public class ToolBase extends BaseModel {

	@Searchable(index = true)
	private String pid;
	@Searchable(index = true)
	private String dummyTest;
	@NotBlank
	@Searchable(index = true)
	private String tool;
	@NotNull(message = ValidationErrorConstants.NULL_VALUE)
	@Searchable(index = true)
	private Long rate;
	@NotNull(message = ValidationErrorConstants.NULL_VALUE)
	@Searchable(index = true)
	private ToolCURRENCY currency=ToolCURRENCY.PLEASE_SELECT;

	public void setDummyTest(String dummyTest) {
		this.dummyTest = dummyTest;
	}

	public String getDummyTest() {
		return dummyTest;
	}

	public void setTool(String tool) {
		this.tool = tool;
	}

	public String getTool() {
		return tool;
	}

	public void setRate(Long rate) {
		this.rate = rate;
	}

	public Long getRate() {
		return rate;
	}

	public void setCurrency(ToolCURRENCY currency) {
		this.currency = currency;
	}

	public ToolCURRENCY getCurrency() {
		return currency;
	}



	public void setPid(String pid) {
		this.pid = pid;
	}

	public String getPid() {
		return pid;
	}
}