
package com.valeo.sslnextgen.integrations.rest.str.model;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "return_code",
    "return_desc",
    "p_code",
    "p_name",
    "p_type",
    "bc_approver",
    "p_manager",
    "dev_center",
    "project_cost_conslidated_entity",
    "project_cost_conslidated_entity_name",
    "invoiced_customer",
    "invoiced_customer_name",
    "purchasing_ptm",
    "process_ptm",
    "rnd_ptm",
    "quality_ptm",
    "supply_chain_ptm",
    "manufacturing_site",
    "customer_sop_date"
})
public class Projec implements Serializable
{

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("return_code")
    private int returnCode;
    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("return_desc")
    private String returnDesc;
    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("p_code")
    private String pCode;
    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("p_name")
    private String pName;
    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("p_type")
    private String pType;
    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("bc_approver")
    private String bcApprover;
    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("p_manager")
    private String pManager;
    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("dev_center")
    private String devCenter;
    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("project_cost_conslidated_entity")
    private String projectCostConslidatedEntity;
    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("project_cost_conslidated_entity_name")
    private String projectCostConslidatedEntityName;
    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("invoiced_customer")
    private String invoicedCustomer;
    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("invoiced_customer_name")
    private String invoicedCustomerName;
    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("purchasing_ptm")
    private String purchasingPtm;
    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("process_ptm")
    private String processPtm;
    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("rnd_ptm")
    private String rndPtm;
    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("quality_ptm")
    private String qualityPtm;
    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("supply_chain_ptm")
    private String supplyChainPtm;
    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("manufacturing_site")
    private String manufacturingSite;
    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("customer_sop_date")
    private String customerSopDate;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();
    private final static long serialVersionUID = -2322960425512249528L;

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("return_code")
    public int getReturnCode() {
        return returnCode;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("return_code")
    public void setReturnCode(int returnCode) {
        this.returnCode = returnCode;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("return_desc")
    public String getReturnDesc() {
        return returnDesc;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("return_desc")
    public void setReturnDesc(String returnDesc) {
        this.returnDesc = returnDesc;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("p_code")
    public String getpCode() {
        return pCode;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("p_code")
    public void setpCode(String pCode) {
        this.pCode = pCode;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("p_name")
    public String getpName() {
        return pName;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("p_name")
    public void setpName(String pName) {
        this.pName = pName;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("p_type")
    public String getpType() {
        return pType;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("p_type")
    public void setpType(String pType) {
        this.pType = pType;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("bc_approver")
    public String getBcApprover() {
        return bcApprover;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("bc_approver")
    public void setBcApprover(String bcApprover) {
        this.bcApprover = bcApprover;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("p_manager")
    public String getpManager() {
        return pManager;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("p_manager")
    public void setpManager(String pManager) {
        this.pManager = pManager;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("dev_center")
    public String getDevCenter() {
        return devCenter;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("dev_center")
    public void setDevCenter(String devCenter) {
        this.devCenter = devCenter;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("project_cost_conslidated_entity")
    public String getProjectCostConslidatedEntity() {
        return projectCostConslidatedEntity;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("project_cost_conslidated_entity")
    public void setProjectCostConslidatedEntity(String projectCostConslidatedEntity) {
        this.projectCostConslidatedEntity = projectCostConslidatedEntity;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("project_cost_conslidated_entity_name")
    public String getProjectCostConslidatedEntityName() {
        return projectCostConslidatedEntityName;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("project_cost_conslidated_entity_name")
    public void setProjectCostConslidatedEntityName(String projectCostConslidatedEntityName) {
        this.projectCostConslidatedEntityName = projectCostConslidatedEntityName;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("invoiced_customer")
    public String getInvoicedCustomer() {
        return invoicedCustomer;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("invoiced_customer")
    public void setInvoicedCustomer(String invoicedCustomer) {
        this.invoicedCustomer = invoicedCustomer;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("invoiced_customer_name")
    public String getInvoicedCustomerName() {
        return invoicedCustomerName;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("invoiced_customer_name")
    public void setInvoicedCustomerName(String invoicedCustomerName) {
        this.invoicedCustomerName = invoicedCustomerName;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("purchasing_ptm")
    public String getPurchasingPtm() {
        return purchasingPtm;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("purchasing_ptm")
    public void setPurchasingPtm(String purchasingPtm) {
        this.purchasingPtm = purchasingPtm;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("process_ptm")
    public String getProcessPtm() {
        return processPtm;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("process_ptm")
    public void setProcessPtm(String processPtm) {
        this.processPtm = processPtm;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("rnd_ptm")
    public String getRndPtm() {
        return rndPtm;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("rnd_ptm")
    public void setRndPtm(String rndPtm) {
        this.rndPtm = rndPtm;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("quality_ptm")
    public String getQualityPtm() {
        return qualityPtm;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("quality_ptm")
    public void setQualityPtm(String qualityPtm) {
        this.qualityPtm = qualityPtm;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("supply_chain_ptm")
    public String getSupplyChainPtm() {
        return supplyChainPtm;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("supply_chain_ptm")
    public void setSupplyChainPtm(String supplyChainPtm) {
        this.supplyChainPtm = supplyChainPtm;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("manufacturing_site")
    public String getManufacturingSite() {
        return manufacturingSite;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("manufacturing_site")
    public void setManufacturingSite(String manufacturingSite) {
        this.manufacturingSite = manufacturingSite;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("customer_sop_date")
    public String getCustomerSopDate() {
        return customerSopDate;
    }

    /**
     * 
     * (Required)
     * 
     */
    @JsonProperty("customer_sop_date")
    public void setCustomerSopDate(String customerSopDate) {
        this.customerSopDate = customerSopDate;
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(Projec.class.getName()).append('@').append(Integer.toHexString(System.identityHashCode(this))).append('[');
        sb.append("returnCode");
        sb.append('=');
        sb.append(this.returnCode);
        sb.append(',');
        sb.append("returnDesc");
        sb.append('=');
        sb.append(((this.returnDesc == null)?"<null>":this.returnDesc));
        sb.append(',');
        sb.append("pCode");
        sb.append('=');
        sb.append(((this.pCode == null)?"<null>":this.pCode));
        sb.append(',');
        sb.append("pName");
        sb.append('=');
        sb.append(((this.pName == null)?"<null>":this.pName));
        sb.append(',');
        sb.append("pType");
        sb.append('=');
        sb.append(((this.pType == null)?"<null>":this.pType));
        sb.append(',');
        sb.append("bcApprover");
        sb.append('=');
        sb.append(((this.bcApprover == null)?"<null>":this.bcApprover));
        sb.append(',');
        sb.append("pManager");
        sb.append('=');
        sb.append(((this.pManager == null)?"<null>":this.pManager));
        sb.append(',');
        sb.append("devCenter");
        sb.append('=');
        sb.append(((this.devCenter == null)?"<null>":this.devCenter));
        sb.append(',');
        sb.append("projectCostConslidatedEntity");
        sb.append('=');
        sb.append(((this.projectCostConslidatedEntity == null)?"<null>":this.projectCostConslidatedEntity));
        sb.append(',');
        sb.append("projectCostConslidatedEntityName");
        sb.append('=');
        sb.append(((this.projectCostConslidatedEntityName == null)?"<null>":this.projectCostConslidatedEntityName));
        sb.append(',');
        sb.append("invoicedCustomer");
        sb.append('=');
        sb.append(((this.invoicedCustomer == null)?"<null>":this.invoicedCustomer));
        sb.append(',');
        sb.append("invoicedCustomerName");
        sb.append('=');
        sb.append(((this.invoicedCustomerName == null)?"<null>":this.invoicedCustomerName));
        sb.append(',');
        sb.append("purchasingPtm");
        sb.append('=');
        sb.append(((this.purchasingPtm == null)?"<null>":this.purchasingPtm));
        sb.append(',');
        sb.append("processPtm");
        sb.append('=');
        sb.append(((this.processPtm == null)?"<null>":this.processPtm));
        sb.append(',');
        sb.append("rndPtm");
        sb.append('=');
        sb.append(((this.rndPtm == null)?"<null>":this.rndPtm));
        sb.append(',');
        sb.append("qualityPtm");
        sb.append('=');
        sb.append(((this.qualityPtm == null)?"<null>":this.qualityPtm));
        sb.append(',');
        sb.append("supplyChainPtm");
        sb.append('=');
        sb.append(((this.supplyChainPtm == null)?"<null>":this.supplyChainPtm));
        sb.append(',');
        sb.append("manufacturingSite");
        sb.append('=');
        sb.append(((this.manufacturingSite == null)?"<null>":this.manufacturingSite));
        sb.append(',');
        sb.append("customerSopDate");
        sb.append('=');
        sb.append(((this.customerSopDate == null)?"<null>":this.customerSopDate));
        sb.append(',');
        sb.append("additionalProperties");
        sb.append('=');
        sb.append(((this.additionalProperties == null)?"<null>":this.additionalProperties));
        sb.append(',');
        if (sb.charAt((sb.length()- 1)) == ',') {
            sb.setCharAt((sb.length()- 1), ']');
        } else {
            sb.append(']');
        }
        return sb.toString();
    }

    @Override
    public int hashCode() {
        int result = 1;
        result = ((result* 31)+((this.supplyChainPtm == null)? 0 :this.supplyChainPtm.hashCode()));
        result = ((result* 31)+((this.devCenter == null)? 0 :this.devCenter.hashCode()));
        result = ((result* 31)+((this.rndPtm == null)? 0 :this.rndPtm.hashCode()));
        result = ((result* 31)+((this.customerSopDate == null)? 0 :this.customerSopDate.hashCode()));
        result = ((result* 31)+((this.qualityPtm == null)? 0 :this.qualityPtm.hashCode()));
        result = ((result* 31)+((this.projectCostConslidatedEntityName == null)? 0 :this.projectCostConslidatedEntityName.hashCode()));
        result = ((result* 31)+((this.invoicedCustomerName == null)? 0 :this.invoicedCustomerName.hashCode()));
        result = ((result* 31)+((this.returnDesc == null)? 0 :this.returnDesc.hashCode()));
        result = ((result* 31)+((this.invoicedCustomer == null)? 0 :this.invoicedCustomer.hashCode()));
        result = ((result* 31)+ this.returnCode);
        result = ((result* 31)+((this.bcApprover == null)? 0 :this.bcApprover.hashCode()));
        result = ((result* 31)+((this.purchasingPtm == null)? 0 :this.purchasingPtm.hashCode()));
        result = ((result* 31)+((this.processPtm == null)? 0 :this.processPtm.hashCode()));
        result = ((result* 31)+((this.pName == null)? 0 :this.pName.hashCode()));
        result = ((result* 31)+((this.pCode == null)? 0 :this.pCode.hashCode()));
        result = ((result* 31)+((this.pType == null)? 0 :this.pType.hashCode()));
        result = ((result* 31)+((this.pManager == null)? 0 :this.pManager.hashCode()));
        result = ((result* 31)+((this.manufacturingSite == null)? 0 :this.manufacturingSite.hashCode()));
        result = ((result* 31)+((this.additionalProperties == null)? 0 :this.additionalProperties.hashCode()));
        result = ((result* 31)+((this.projectCostConslidatedEntity == null)? 0 :this.projectCostConslidatedEntity.hashCode()));
        return result;
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof Projec) == false) {
            return false;
        }
        Projec rhs = ((Projec) other);
        return (((((((((((((((((((((this.supplyChainPtm == rhs.supplyChainPtm)||((this.supplyChainPtm!= null)&&this.supplyChainPtm.equals(rhs.supplyChainPtm)))&&((this.devCenter == rhs.devCenter)||((this.devCenter!= null)&&this.devCenter.equals(rhs.devCenter))))&&((this.rndPtm == rhs.rndPtm)||((this.rndPtm!= null)&&this.rndPtm.equals(rhs.rndPtm))))&&((this.customerSopDate == rhs.customerSopDate)||((this.customerSopDate!= null)&&this.customerSopDate.equals(rhs.customerSopDate))))&&((this.qualityPtm == rhs.qualityPtm)||((this.qualityPtm!= null)&&this.qualityPtm.equals(rhs.qualityPtm))))&&((this.projectCostConslidatedEntityName == rhs.projectCostConslidatedEntityName)||((this.projectCostConslidatedEntityName!= null)&&this.projectCostConslidatedEntityName.equals(rhs.projectCostConslidatedEntityName))))&&((this.invoicedCustomerName == rhs.invoicedCustomerName)||((this.invoicedCustomerName!= null)&&this.invoicedCustomerName.equals(rhs.invoicedCustomerName))))&&((this.returnDesc == rhs.returnDesc)||((this.returnDesc!= null)&&this.returnDesc.equals(rhs.returnDesc))))&&((this.invoicedCustomer == rhs.invoicedCustomer)||((this.invoicedCustomer!= null)&&this.invoicedCustomer.equals(rhs.invoicedCustomer))))&&(this.returnCode == rhs.returnCode))&&((this.bcApprover == rhs.bcApprover)||((this.bcApprover!= null)&&this.bcApprover.equals(rhs.bcApprover))))&&((this.purchasingPtm == rhs.purchasingPtm)||((this.purchasingPtm!= null)&&this.purchasingPtm.equals(rhs.purchasingPtm))))&&((this.processPtm == rhs.processPtm)||((this.processPtm!= null)&&this.processPtm.equals(rhs.processPtm))))&&((this.pName == rhs.pName)||((this.pName!= null)&&this.pName.equals(rhs.pName))))&&((this.pCode == rhs.pCode)||((this.pCode!= null)&&this.pCode.equals(rhs.pCode))))&&((this.pType == rhs.pType)||((this.pType!= null)&&this.pType.equals(rhs.pType))))&&((this.pManager == rhs.pManager)||((this.pManager!= null)&&this.pManager.equals(rhs.pManager))))&&((this.manufacturingSite == rhs.manufacturingSite)||((this.manufacturingSite!= null)&&this.manufacturingSite.equals(rhs.manufacturingSite))))&&((this.additionalProperties == rhs.additionalProperties)||((this.additionalProperties!= null)&&this.additionalProperties.equals(rhs.additionalProperties))))&&((this.projectCostConslidatedEntity == rhs.projectCostConslidatedEntity)||((this.projectCostConslidatedEntity!= null)&&this.projectCostConslidatedEntity.equals(rhs.projectCostConslidatedEntity))));
    }

}
