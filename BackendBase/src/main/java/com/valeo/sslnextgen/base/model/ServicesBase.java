package com.valeo.sslnextgen.base.model;
import com.eva.base.model.BaseModel;
import com.eva.base.annotations.Table;
import java.util.List;
import com.eva.base.annotations.NotBlank;
import com.eva.base.annotations.Searchable;
import com.eva.base.util.ValidationErrorConstants;
import com.eva.base.model.Lookup;


@Table(name="Services", keys={"sid"})
public class ServicesBase extends BaseModel {

	@Searchable(index = true)
	private String pid;
	@NotBlank(message = ValidationErrorConstants.BLANK_VALUE)
	@Searchable(index = true)
	private String service;
	@Searchable(index = true)
	private ServicesSpecificFields specificFields=ServicesSpecificFields.N_A;
	@Searchable(index = true)
	private List<Lookup> respLeader;
	@Searchable(index = true)
	private Boolean enabledLab=true;
	@Searchable(index = true)
	private String dummyTest;
	@Searchable(index = true)
	private String metier;
	@Searchable(index = true)
	private List<Lookup> respScheduler;

	public void setService(String service) {
		this.service = service;
	}

	public String getService() {
		return service;
	}

	public void setSpecificFields(ServicesSpecificFields specificFields) {
		this.specificFields = specificFields;
	}

	public ServicesSpecificFields getSpecificFields() {
		return specificFields;
	}

	public void setRespLeader(List<Lookup> respLeader) {
		this.respLeader = respLeader;
	}

	public List<Lookup> getRespLeader() {
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

	public void setRespScheduler(List<Lookup> respScheduler) {
		this.respScheduler = respScheduler;
	}

	public List<Lookup> getRespScheduler() {
		return respScheduler;
	}



	public void setPid(String pid) {
		this.pid = pid;
	}

	public String getPid() {
		return pid;
	}
}