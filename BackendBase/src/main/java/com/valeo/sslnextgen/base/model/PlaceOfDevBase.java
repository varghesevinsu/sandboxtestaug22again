package com.valeo.sslnextgen.base.model;
import com.eva.base.model.BaseModel;
import com.eva.base.annotations.Table;
import com.eva.base.annotations.Searchable;
import javax.validation.constraints.NotNull;
import com.eva.base.util.ValidationErrorConstants;


@Table(name="PlaceOfDev", keys={"sid"})
public class PlaceOfDevBase extends BaseModel {

	@Searchable(index = true)
	private String pid;
	@NotNull(message = ValidationErrorConstants.NULL_VALUE)
	@Searchable(index = true)
	private PlaceOfDevENTITY entity=PlaceOfDevENTITY.PLEASE_SELECT;
	@NotNull(message = ValidationErrorConstants.NULL_VALUE)
	@Searchable(index = true)
	private PlaceOfDevSITECODE siteCode=PlaceOfDevSITECODE.PLEASE_SELECT;
	@Searchable(index = true)
	private String dummyTest;
	@NotNull(message = ValidationErrorConstants.NULL_VALUE)
	@Searchable(index = false)
	private PlaceOfDevLOCATION location=PlaceOfDevLOCATION.PLEASE_SELECT;

	public void setEntity(PlaceOfDevENTITY entity) {
		this.entity = entity;
	}

	public PlaceOfDevENTITY getEntity() {
		return entity;
	}

	public void setSiteCode(PlaceOfDevSITECODE siteCode) {
		this.siteCode = siteCode;
	}

	public PlaceOfDevSITECODE getSiteCode() {
		return siteCode;
	}

	public void setDummyTest(String dummyTest) {
		this.dummyTest = dummyTest;
	}

	public String getDummyTest() {
		return dummyTest;
	}

	public void setLocation(PlaceOfDevLOCATION location) {
		this.location = location;
	}

	public PlaceOfDevLOCATION getLocation() {
		return location;
	}



	public void setPid(String pid) {
		this.pid = pid;
	}

	public String getPid() {
		return pid;
	}
}