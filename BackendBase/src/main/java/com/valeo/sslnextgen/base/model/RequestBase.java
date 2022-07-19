package com.valeo.sslnextgen.base.model;
import com.eva.base.workflow.model.BaseWorkflowModel;
import com.eva.base.annotations.Table;
import com.eva.base.annotations.NotBlank;
import java.util.Map;
import com.eva.base.annotations.Searchable;
import javax.validation.constraints.NotNull;
import com.eva.base.util.ValidationErrorConstants;
import com.google.cloud.firestore.annotation.Exclude;
import java.util.Date;
import com.eva.base.workflow.util.WorkflowBasicInfo;


@Table(name="Request", keys={"sid"})
public class RequestBase extends BaseWorkflowModel {

	@NotNull(message = ValidationErrorConstants.NULL_VALUE)
	@Searchable(index = true)
	private Long boardNumber;
	@Searchable(index = true)
	private String name;
	@Searchable(index = true)
	private String orgalocToBeInvoiced;
	@Searchable(index = false)
	private String commentsTravelExtraCosts;
	@Searchable(index = false)
	private String tasks;
	@Searchable(index = false)
	private String businessController;
	@Searchable(index = true)
	private Long totalBudget;
	@Searchable(index = true)
	private Long budgetTool;
	@Searchable(index = true)
	private String place;
	@Searchable(index = false)
	private String otherSubActivityStatus;
	@Searchable(index = false)
	private String tool;
	@Searchable(index = true)
	private Long budgetManpower2;
	@Searchable(index = true)
	private String nameCode;
	@Searchable(index = true)
	private RequestStatusoftherequest statusOfTheRequest=RequestStatusoftherequest.DRAFT;
	@Searchable(index = false)
	private String osaNameToBeCreatedInStr;
	@Searchable(index = true)
	private String commentsToolExtraCosts;
	@Searchable(index = true)
	private Long hoursTool;
	@Searchable(index = true)
	private String prjOaEntity;
	@Searchable(index = true)
	private String dummyTest;
	@Searchable(index = false)
	private String projectManagerOrActivityLeader;
	@NotBlank
	@Searchable(index = true)
	private String schedulerName;
	@Searchable(index = true)
	private String internalPoNumber;
	@Searchable(index = true)
	private String otherBudget2;
	@Searchable(index = true)
	private String nameOfTheRequest;
	@Searchable(index = false)
	private String stCodeLocation;
	@Searchable(index = true)
	private RequestPanelization panelization;
	@Searchable(index = true)
	private String prjOaCode;
	@Searchable(index = true)
	private String schedulerAdditionalInformation;
	@Searchable(index = false)
	private String travelExtraCosts;
	@Searchable(index = true)
	private Long budgetManpower;
	@Searchable(index = true)
	private String dummy2;
	@Searchable(index = true)
	private RequestCurrency currency=RequestCurrency.PLEASE_SELECT;
	@Searchable(index = true)
	private String additionnalCost2;
	@Searchable(index = true)
	private Long budgetTool2;
	@Searchable(index = true)
	private String purchasingEntityCode;
	@Searchable(index = true)
	private String sapTypeOfCostForExternal;
	@Searchable(index = true)
	private String sapRdCost;
	@Searchable(index = true)
	private String selletEntityCode;
	@Searchable(index = false)
	private String watcher;
	@Searchable(index = true)
	private String leader;
	@Searchable(index = true)
	private Long rate;
	@NotNull(message = ValidationErrorConstants.NULL_VALUE)
	@Searchable(index = true)
	private Date schedulerProposedStartDate;
	@Searchable(index = true)
	private String metier;
	@Searchable(index = true)
	private RequestNameCode namecode;
	@Searchable(index = true)
	private Date schedulerProposedEndDate;
	@Searchable(index = true)
	private String otherActivityCode;
	@Searchable(index = true)
	private String subName;
	@Searchable(index = true)
	private String sapTypeOfCostForInternal;
	@Searchable(index = true)
	private String leadPlaceOfDevelopment;
	@NotBlank
	@Searchable(index = true)
	private String boardName;
	@Searchable(index = true)
	private String globalBudget;
	@Searchable(index = true)
	private String additionnalCost;
	@Searchable(index = true)
	private String areLeftRightDesign;
	@Searchable(index = true)
	private Long requestCode;
	@Searchable(index = true)
	private String location;
	@Searchable(index = true)
	private String prOrActivityName;
	@Searchable(index = true)
	private Long rateManpower2;
	@Searchable(index = false)
	private String osaStatus;
	@NotNull(message = ValidationErrorConstants.NULL_VALUE)
	@Searchable(index = true)
	private RequestProjectorActivity projectOrActivity;
	@Searchable(index = true)
	private RequestFunctionalNetwork functionalNetwork;
	@Searchable(index = false)
	private String toolExtraCosts;
	@Searchable(index = false)
	private String technicalOffredBy;
	@Searchable(index = true)
	private Long hoursManpower;
	@Searchable(index = false)
	private String stCodeLocation2;
	@Searchable(index = true)
	private String bgStr;
	@Searchable(index = false)
	private String otherBudget;
	@Searchable(index = true)
	private Date requestedEndDate;
	@Searchable(index = true)
	private Long hoursTool2;
	@Searchable(index = true)
	private Long hoursManpower2;
	@Searchable(index = false)
	private String extraCost;
	@Searchable(index = true)
	private String prjOaPm;
	@Searchable(index = false)
	private String budget;
	@Searchable(index = true)
	private Date requestedStartDate;
	@NotBlank
	@Searchable(index = false)
	private String quoteNo;
	@Searchable(index = true)
	private String secondPlaceOfDevelopment;
	@Searchable(index = true)
	private RequestTaskType taskType;
	@Searchable(index = false)
	private String closingDate;
	@Searchable(index = false)
	private String quotationDescription;
	@Searchable(index = true)
	private Long hours;
	@Searchable(index = true)
	private String additionalInformation;
	@Searchable(index = true)
	private String projectNameAsInEdrm;
	@NotNull(message = ValidationErrorConstants.NULL_VALUE)
	@Searchable(index = true)
	private RequestServicetype serviceType;
	@Searchable(index = true)
	private String intercoPartnerCode;
	@Searchable(index = true)
	private Long estimatedDurationInHours;
	@Searchable(index = true)
	private String sapCategory;
	@Searchable(index = true)
	private RequestProjecttype projectType;
	@Searchable(index = true)
	private String requesterOrgaloc;
	@Searchable(index = true)
	private String subCode;
	@NotBlank
	@Searchable(index = true)
	private String requestName;
	@Searchable(index = true)
	private String linkToQuotation;
	@NotNull(message = ValidationErrorConstants.NULL_VALUE)
	@Searchable(index = true)
	private RequestEMCLab emcLab;
	@Searchable(index = true)
	private Long totalBudget2;
	@Searchable(index = true)
	private RequestSchedulercurrency schedulerCurrency=RequestSchedulercurrency.PLEASE_SELECT;
	@Searchable(index = true)
	private String linkToSpecifications;
	@Searchable(index = true)
	private String tasks2;
	@Searchable(index = true)
	private Requestdummy dummy;
	@NotBlank
	@Searchable(index = true)
	private String requester;
	@Searchable(index = true)
	private String scheduler;
	@Searchable(index = true)
	private Long rateManpower;

	public void setBoardNumber(Long boardNumber) {
		this.boardNumber = boardNumber;
	}

	public Long getBoardNumber() {
		return boardNumber;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setOrgalocToBeInvoiced(String orgalocToBeInvoiced) {
		this.orgalocToBeInvoiced = orgalocToBeInvoiced;
	}

	public String getOrgalocToBeInvoiced() {
		return orgalocToBeInvoiced;
	}

	public void setCommentsTravelExtraCosts(String commentsTravelExtraCosts) {
		this.commentsTravelExtraCosts = commentsTravelExtraCosts;
	}

	public String getCommentsTravelExtraCosts() {
		return commentsTravelExtraCosts;
	}

	public void setTasks(String tasks) {
		this.tasks = tasks;
	}

	public String getTasks() {
		return tasks;
	}

	public void setBusinessController(String businessController) {
		this.businessController = businessController;
	}

	public String getBusinessController() {
		return businessController;
	}

	public void setTotalBudget(Long totalBudget) {
		this.totalBudget = totalBudget;
	}

	public Long getTotalBudget() {
		return totalBudget;
	}

	public void setBudgetTool(Long budgetTool) {
		this.budgetTool = budgetTool;
	}

	public Long getBudgetTool() {
		return budgetTool;
	}

	public void setPlace(String place) {
		this.place = place;
	}

	public String getPlace() {
		return place;
	}

	public void setOtherSubActivityStatus(String otherSubActivityStatus) {
		this.otherSubActivityStatus = otherSubActivityStatus;
	}

	public String getOtherSubActivityStatus() {
		return otherSubActivityStatus;
	}

	public void setTool(String tool) {
		this.tool = tool;
	}

	public String getTool() {
		return tool;
	}

	public void setBudgetManpower2(Long budgetManpower2) {
		this.budgetManpower2 = budgetManpower2;
	}

	public Long getBudgetManpower2() {
		return budgetManpower2;
	}

	public void setNameCode(String nameCode) {
		this.nameCode = nameCode;
	}

	public String getNameCode() {
		return nameCode;
	}

	public void setStatusOfTheRequest(RequestStatusoftherequest statusOfTheRequest) {
		this.statusOfTheRequest = statusOfTheRequest;
	}

	public RequestStatusoftherequest getStatusOfTheRequest() {
		return statusOfTheRequest;
	}

	public void setOsaNameToBeCreatedInStr(String osaNameToBeCreatedInStr) {
		this.osaNameToBeCreatedInStr = osaNameToBeCreatedInStr;
	}

	public String getOsaNameToBeCreatedInStr() {
		return osaNameToBeCreatedInStr;
	}

	public void setCommentsToolExtraCosts(String commentsToolExtraCosts) {
		this.commentsToolExtraCosts = commentsToolExtraCosts;
	}

	public String getCommentsToolExtraCosts() {
		return commentsToolExtraCosts;
	}

	public void setHoursTool(Long hoursTool) {
		this.hoursTool = hoursTool;
	}

	public Long getHoursTool() {
		return hoursTool;
	}

	public void setPrjOaEntity(String prjOaEntity) {
		this.prjOaEntity = prjOaEntity;
	}

	public String getPrjOaEntity() {
		return prjOaEntity;
	}

	public void setDummyTest(String dummyTest) {
		this.dummyTest = dummyTest;
	}

	public String getDummyTest() {
		return dummyTest;
	}

	public void setProjectManagerOrActivityLeader(String projectManagerOrActivityLeader) {
		this.projectManagerOrActivityLeader = projectManagerOrActivityLeader;
	}

	public String getProjectManagerOrActivityLeader() {
		return projectManagerOrActivityLeader;
	}

	public void setSchedulerName(String schedulerName) {
		this.schedulerName = schedulerName;
	}

	public String getSchedulerName() {
		return schedulerName;
	}

	public void setInternalPoNumber(String internalPoNumber) {
		this.internalPoNumber = internalPoNumber;
	}

	public String getInternalPoNumber() {
		return internalPoNumber;
	}

	public void setOtherBudget2(String otherBudget2) {
		this.otherBudget2 = otherBudget2;
	}

	public String getOtherBudget2() {
		return otherBudget2;
	}

	public void setNameOfTheRequest(String nameOfTheRequest) {
		this.nameOfTheRequest = nameOfTheRequest;
	}

	public String getNameOfTheRequest() {
		return nameOfTheRequest;
	}

	public void setStCodeLocation(String stCodeLocation) {
		this.stCodeLocation = stCodeLocation;
	}

	public String getStCodeLocation() {
		return stCodeLocation;
	}

	public void setPanelization(RequestPanelization panelization) {
		this.panelization = panelization;
	}

	public RequestPanelization getPanelization() {
		return panelization;
	}

	public void setPrjOaCode(String prjOaCode) {
		this.prjOaCode = prjOaCode;
	}

	public String getPrjOaCode() {
		return prjOaCode;
	}

	public void setSchedulerAdditionalInformation(String schedulerAdditionalInformation) {
		this.schedulerAdditionalInformation = schedulerAdditionalInformation;
	}

	public String getSchedulerAdditionalInformation() {
		return schedulerAdditionalInformation;
	}

	public void setTravelExtraCosts(String travelExtraCosts) {
		this.travelExtraCosts = travelExtraCosts;
	}

	public String getTravelExtraCosts() {
		return travelExtraCosts;
	}

	public void setBudgetManpower(Long budgetManpower) {
		this.budgetManpower = budgetManpower;
	}

	public Long getBudgetManpower() {
		return budgetManpower;
	}

	public void setDummy2(String dummy2) {
		this.dummy2 = dummy2;
	}

	public String getDummy2() {
		return dummy2;
	}

	public void setCurrency(RequestCurrency currency) {
		this.currency = currency;
	}

	public RequestCurrency getCurrency() {
		return currency;
	}

	public void setAdditionnalCost2(String additionnalCost2) {
		this.additionnalCost2 = additionnalCost2;
	}

	public String getAdditionnalCost2() {
		return additionnalCost2;
	}

	public void setBudgetTool2(Long budgetTool2) {
		this.budgetTool2 = budgetTool2;
	}

	public Long getBudgetTool2() {
		return budgetTool2;
	}

	public void setPurchasingEntityCode(String purchasingEntityCode) {
		this.purchasingEntityCode = purchasingEntityCode;
	}

	public String getPurchasingEntityCode() {
		return purchasingEntityCode;
	}

	public void setSapTypeOfCostForExternal(String sapTypeOfCostForExternal) {
		this.sapTypeOfCostForExternal = sapTypeOfCostForExternal;
	}

	public String getSapTypeOfCostForExternal() {
		return sapTypeOfCostForExternal;
	}

	public void setSapRdCost(String sapRdCost) {
		this.sapRdCost = sapRdCost;
	}

	public String getSapRdCost() {
		return sapRdCost;
	}

	public void setSelletEntityCode(String selletEntityCode) {
		this.selletEntityCode = selletEntityCode;
	}

	public String getSelletEntityCode() {
		return selletEntityCode;
	}

	public void setWatcher(String watcher) {
		this.watcher = watcher;
	}

	public String getWatcher() {
		return watcher;
	}

	public void setLeader(String leader) {
		this.leader = leader;
	}

	public String getLeader() {
		return leader;
	}

	public void setRate(Long rate) {
		this.rate = rate;
	}

	public Long getRate() {
		return rate;
	}

	public void setSchedulerProposedStartDate(Date schedulerProposedStartDate) {
		this.schedulerProposedStartDate = schedulerProposedStartDate;
	}

	public Date getSchedulerProposedStartDate() {
		return schedulerProposedStartDate;
	}

	public void setMetier(String metier) {
		this.metier = metier;
	}

	public String getMetier() {
		return metier;
	}

	public void setNamecode(RequestNameCode namecode) {
		this.namecode = namecode;
	}

	public RequestNameCode getNamecode() {
		return namecode;
	}

	public void setSchedulerProposedEndDate(Date schedulerProposedEndDate) {
		this.schedulerProposedEndDate = schedulerProposedEndDate;
	}

	public Date getSchedulerProposedEndDate() {
		return schedulerProposedEndDate;
	}

	public void setOtherActivityCode(String otherActivityCode) {
		this.otherActivityCode = otherActivityCode;
	}

	public String getOtherActivityCode() {
		return otherActivityCode;
	}

	public void setSubName(String subName) {
		this.subName = subName;
	}

	public String getSubName() {
		return subName;
	}

	public void setSapTypeOfCostForInternal(String sapTypeOfCostForInternal) {
		this.sapTypeOfCostForInternal = sapTypeOfCostForInternal;
	}

	public String getSapTypeOfCostForInternal() {
		return sapTypeOfCostForInternal;
	}

	public void setLeadPlaceOfDevelopment(String leadPlaceOfDevelopment) {
		this.leadPlaceOfDevelopment = leadPlaceOfDevelopment;
	}

	public String getLeadPlaceOfDevelopment() {
		return leadPlaceOfDevelopment;
	}

	public void setBoardName(String boardName) {
		this.boardName = boardName;
	}

	public String getBoardName() {
		return boardName;
	}

	public void setGlobalBudget(String globalBudget) {
		this.globalBudget = globalBudget;
	}

	public String getGlobalBudget() {
		return globalBudget;
	}

	public void setAdditionnalCost(String additionnalCost) {
		this.additionnalCost = additionnalCost;
	}

	public String getAdditionnalCost() {
		return additionnalCost;
	}

	public void setAreLeftRightDesign(String areLeftRightDesign) {
		this.areLeftRightDesign = areLeftRightDesign;
	}

	public String getAreLeftRightDesign() {
		return areLeftRightDesign;
	}

	public void setRequestCode(Long requestCode) {
		this.requestCode = requestCode;
	}

	public Long getRequestCode() {
		return requestCode;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getLocation() {
		return location;
	}

	public void setPrOrActivityName(String prOrActivityName) {
		this.prOrActivityName = prOrActivityName;
	}

	public String getPrOrActivityName() {
		return prOrActivityName;
	}

	public void setRateManpower2(Long rateManpower2) {
		this.rateManpower2 = rateManpower2;
	}

	public Long getRateManpower2() {
		return rateManpower2;
	}

	public void setOsaStatus(String osaStatus) {
		this.osaStatus = osaStatus;
	}

	public String getOsaStatus() {
		return osaStatus;
	}

	public void setProjectOrActivity(RequestProjectorActivity projectOrActivity) {
		this.projectOrActivity = projectOrActivity;
	}

	public RequestProjectorActivity getProjectOrActivity() {
		return projectOrActivity;
	}

	public void setFunctionalNetwork(RequestFunctionalNetwork functionalNetwork) {
		this.functionalNetwork = functionalNetwork;
	}

	public RequestFunctionalNetwork getFunctionalNetwork() {
		return functionalNetwork;
	}

	public void setToolExtraCosts(String toolExtraCosts) {
		this.toolExtraCosts = toolExtraCosts;
	}

	public String getToolExtraCosts() {
		return toolExtraCosts;
	}

	public void setTechnicalOffredBy(String technicalOffredBy) {
		this.technicalOffredBy = technicalOffredBy;
	}

	public String getTechnicalOffredBy() {
		return technicalOffredBy;
	}

	public void setHoursManpower(Long hoursManpower) {
		this.hoursManpower = hoursManpower;
	}

	public Long getHoursManpower() {
		return hoursManpower;
	}

	public void setStCodeLocation2(String stCodeLocation2) {
		this.stCodeLocation2 = stCodeLocation2;
	}

	public String getStCodeLocation2() {
		return stCodeLocation2;
	}

	public void setBgStr(String bgStr) {
		this.bgStr = bgStr;
	}

	public String getBgStr() {
		return bgStr;
	}

	public void setOtherBudget(String otherBudget) {
		this.otherBudget = otherBudget;
	}

	public String getOtherBudget() {
		return otherBudget;
	}

	public void setRequestedEndDate(Date requestedEndDate) {
		this.requestedEndDate = requestedEndDate;
	}

	public Date getRequestedEndDate() {
		return requestedEndDate;
	}

	public void setHoursTool2(Long hoursTool2) {
		this.hoursTool2 = hoursTool2;
	}

	public Long getHoursTool2() {
		return hoursTool2;
	}

	public void setHoursManpower2(Long hoursManpower2) {
		this.hoursManpower2 = hoursManpower2;
	}

	public Long getHoursManpower2() {
		return hoursManpower2;
	}

	public void setExtraCost(String extraCost) {
		this.extraCost = extraCost;
	}

	public String getExtraCost() {
		return extraCost;
	}

	public void setPrjOaPm(String prjOaPm) {
		this.prjOaPm = prjOaPm;
	}

	public String getPrjOaPm() {
		return prjOaPm;
	}

	public void setBudget(String budget) {
		this.budget = budget;
	}

	public String getBudget() {
		return budget;
	}

	public void setRequestedStartDate(Date requestedStartDate) {
		this.requestedStartDate = requestedStartDate;
	}

	public Date getRequestedStartDate() {
		return requestedStartDate;
	}

	public void setQuoteNo(String quoteNo) {
		this.quoteNo = quoteNo;
	}

	public String getQuoteNo() {
		return quoteNo;
	}

	public void setSecondPlaceOfDevelopment(String secondPlaceOfDevelopment) {
		this.secondPlaceOfDevelopment = secondPlaceOfDevelopment;
	}

	public String getSecondPlaceOfDevelopment() {
		return secondPlaceOfDevelopment;
	}

	public void setTaskType(RequestTaskType taskType) {
		this.taskType = taskType;
	}

	public RequestTaskType getTaskType() {
		return taskType;
	}

	public void setClosingDate(String closingDate) {
		this.closingDate = closingDate;
	}

	public String getClosingDate() {
		return closingDate;
	}

	public void setQuotationDescription(String quotationDescription) {
		this.quotationDescription = quotationDescription;
	}

	public String getQuotationDescription() {
		return quotationDescription;
	}

	public void setHours(Long hours) {
		this.hours = hours;
	}

	public Long getHours() {
		return hours;
	}

	public void setAdditionalInformation(String additionalInformation) {
		this.additionalInformation = additionalInformation;
	}

	public String getAdditionalInformation() {
		return additionalInformation;
	}

	public void setProjectNameAsInEdrm(String projectNameAsInEdrm) {
		this.projectNameAsInEdrm = projectNameAsInEdrm;
	}

	public String getProjectNameAsInEdrm() {
		return projectNameAsInEdrm;
	}

	public void setServiceType(RequestServicetype serviceType) {
		this.serviceType = serviceType;
	}

	public RequestServicetype getServiceType() {
		return serviceType;
	}

	public void setIntercoPartnerCode(String intercoPartnerCode) {
		this.intercoPartnerCode = intercoPartnerCode;
	}

	public String getIntercoPartnerCode() {
		return intercoPartnerCode;
	}

	public void setEstimatedDurationInHours(Long estimatedDurationInHours) {
		this.estimatedDurationInHours = estimatedDurationInHours;
	}

	public Long getEstimatedDurationInHours() {
		return estimatedDurationInHours;
	}

	public void setSapCategory(String sapCategory) {
		this.sapCategory = sapCategory;
	}

	public String getSapCategory() {
		return sapCategory;
	}

	public void setProjectType(RequestProjecttype projectType) {
		this.projectType = projectType;
	}

	public RequestProjecttype getProjectType() {
		return projectType;
	}

	public void setRequesterOrgaloc(String requesterOrgaloc) {
		this.requesterOrgaloc = requesterOrgaloc;
	}

	public String getRequesterOrgaloc() {
		return requesterOrgaloc;
	}

	public void setSubCode(String subCode) {
		this.subCode = subCode;
	}

	public String getSubCode() {
		return subCode;
	}

	public void setRequestName(String requestName) {
		this.requestName = requestName;
	}

	public String getRequestName() {
		return requestName;
	}

	public void setLinkToQuotation(String linkToQuotation) {
		this.linkToQuotation = linkToQuotation;
	}

	public String getLinkToQuotation() {
		return linkToQuotation;
	}

	public void setEmcLab(RequestEMCLab emcLab) {
		this.emcLab = emcLab;
	}

	public RequestEMCLab getEmcLab() {
		return emcLab;
	}

	public void setTotalBudget2(Long totalBudget2) {
		this.totalBudget2 = totalBudget2;
	}

	public Long getTotalBudget2() {
		return totalBudget2;
	}

	public void setSchedulerCurrency(RequestSchedulercurrency schedulerCurrency) {
		this.schedulerCurrency = schedulerCurrency;
	}

	public RequestSchedulercurrency getSchedulerCurrency() {
		return schedulerCurrency;
	}

	public void setLinkToSpecifications(String linkToSpecifications) {
		this.linkToSpecifications = linkToSpecifications;
	}

	public String getLinkToSpecifications() {
		return linkToSpecifications;
	}

	public void setTasks2(String tasks2) {
		this.tasks2 = tasks2;
	}

	public String getTasks2() {
		return tasks2;
	}

	public void setDummy(Requestdummy dummy) {
		this.dummy = dummy;
	}

	public Requestdummy getDummy() {
		return dummy;
	}

	public void setRequester(String requester) {
		this.requester = requester;
	}

	public String getRequester() {
		return requester;
	}

	public void setScheduler(String scheduler) {
		this.scheduler = scheduler;
	}

	public String getScheduler() {
		return scheduler;
	}

	public void setRateManpower(Long rateManpower) {
		this.rateManpower = rateManpower;
	}

	public Long getRateManpower() {
		return rateManpower;
	}

	@Exclude
	public Map<String, WorkflowBasicInfo> getWorkflowInfo() {
		return super.getWorkflowInfo();
	}



}