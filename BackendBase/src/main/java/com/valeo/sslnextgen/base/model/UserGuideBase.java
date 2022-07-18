package com.valeo.sslnextgen.base.model;
import com.eva.base.model.BaseModel;
import com.eva.base.annotations.Table;
import com.eva.base.annotations.NotBlank;
import com.eva.base.annotations.Searchable;
import com.eva.base.util.ValidationErrorConstants;


@Table(name="UserGuide", keys={"sid"})
public class UserGuideBase extends BaseModel {

	@Searchable(index = true)
	private String pid;
	@NotBlank
	@Searchable(index = true)
	private String link;
	@Searchable(index = true)
	private String description;
	@Searchable(index = true)
	private String dummyTest;

	public void setLink(String link) {
		this.link = link;
	}

	public String getLink() {
		return link;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDescription() {
		return description;
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