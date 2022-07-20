package com.valeo.sslnextgen.base.model;
import com.eva.base.model.BaseModel;
import com.eva.base.annotations.Table;
import com.eva.base.annotations.Searchable;
import javax.validation.constraints.NotNull;
import com.eva.base.util.ValidationErrorConstants;


@Table(name="ManPower", keys={"sid"})
public class ManPowerBase extends BaseModel {

	@Searchable(index = true)
	private String pid;
	@Searchable(index = true)
	private String dummyTest;
	@NotNull(message = ValidationErrorConstants.NULL_VALUE)
	@Searchable(index = true)
	private ManPowerSERVICE service;
	@Searchable(index = true)
	private String test2;
	@Searchable(index = false)
	private String metier;
	@NotNull(message = ValidationErrorConstants.NULL_VALUE)
	@Searchable(index = true)
	private ManPowerCURRENCY currency=ManPowerCURRENCY.PLEASE_SELECT;
	@NotNull(message = ValidationErrorConstants.NULL_VALUE)
	@Searchable(index = true)
	private Long rate;
	@NotNull(message = ValidationErrorConstants.NULL_VALUE)
	@Searchable(index = true)
	private ManPowerSite site=ManPowerSite.PLEASE_SELECT;

	public void setDummyTest(String dummyTest) {
		this.dummyTest = dummyTest;
	}

	public String getDummyTest() {
		return dummyTest;
	}

	public void setService(ManPowerSERVICE service) {
		this.service = service;
	}

	public ManPowerSERVICE getService() {
		return service;
	}

	public void setTest2(String test2) {
		this.test2 = test2;
	}

	public String getTest2() {
		return test2;
	}

	public void setMetier(String metier) {
		this.metier = metier;
	}

	public String getMetier() {
		return metier;
	}

	public void setCurrency(ManPowerCURRENCY currency) {
		this.currency = currency;
	}

	public ManPowerCURRENCY getCurrency() {
		return currency;
	}

	public void setRate(Long rate) {
		this.rate = rate;
	}

	public Long getRate() {
		return rate;
	}

	public void setSite(ManPowerSite site) {
		this.site = site;
	}

	public ManPowerSite getSite() {
		return site;
	}



	public void setPid(String pid) {
		this.pid = pid;
	}

	public String getPid() {
		return pid;
	}
}