package com.valeo.sslnextgen.base.model;
import com.eva.base.model.BaseModel;
import com.eva.base.annotations.Table;
import com.eva.base.annotations.Searchable;
import javax.validation.constraints.NotNull;
import com.eva.base.util.ValidationErrorConstants;


@Table(name="Services", keys={"sid"})
public class ServicesBase extends BaseModel {

	@Searchable(index = true)
	private String pid;
	@NotNull(message = ValidationErrorConstants.NULL_VALUE)
	@Searchable(index = true)
	private ServicesService service;
	@Searchable(index = true)
	private ServicesSpecificFields specificFields=ServicesSpecificFields.N_A;
	@Searchable(index = true)
	private String respLeader;
	@Searchable(index = true)
	private Boolean enabledLab=true;
	@Searchable(index = true)
	private String dummyTest;
	@Searchable(index = true)
	private String metier;
	@Searchable(index = true)
	private String respScheduler;

	public void setService(ServicesService service) {
		this.service = service;
	}

	public ServicesService getService() {
		return service;
	}

	public void setSpecificFields(ServicesSpecificFields specificFields) {
		this.specificFields = specificFields;
	}

	public ServicesSpecificFields getSpecificFields() {
		return specificFields;
	}

	public void setRespLeader(String respLeader) {
		this.respLeader = respLeader;
	}

	public String getRespLeader() {
		return respLeader;
	}

	public void setEnabledLab(Boolean enabledLab) {
		this.enabledLab = enabledLab;
	}

	public Boolean isEnabledLab() {
		return enabledLab;
	}

	public void setDummyTest(String dummyTest) {
		this.dummyTest = dummyTest;
	}

	public String getDummyTest() {
		return dummyTest;
	}

	public void setMetier(String metier) {
		this.metier = metier;
	}

	public String getMetier() {
		return metier;
	}

	public void setRespScheduler(String respScheduler) {
		this.respScheduler = respScheduler;
	}

	public String getRespScheduler() {
		return respScheduler;
	}



	public void setPid(String pid) {
		this.pid = pid;
	}

	public String getPid() {
		return pid;
	}
}