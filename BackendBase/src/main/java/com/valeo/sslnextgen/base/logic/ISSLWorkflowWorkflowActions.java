package com.valeo.sslnextgen.base.logic;

import java.util.Map;
import com.eva.base.workflow.util.WorkflowMetaInfo;
import com.valeo.sslnextgen.base.model.RequestBase;

public interface ISSLWorkflowWorkflowActions<T extends RequestBase>{
	String SSL_WORKFLOW = "sslworkflow";
	
    String CANCEL = "cancel";
        String DEMOTE_TO_LEADER = "demoteToLeader";
        String APPROVE_TO_LEADER = "approveToLeader";
        String SUBMIT = "submit";
        String SUBMIT_TO_APPROVER = "submitToApprover";
        String DEMOTE_TO_REQUESTER = "demoteToRequester";
        String DEMOTE_TO_SCHEDULER = "demoteToScheduler";
        String CLOSE = "close";
        String VALIDATE = "validate";
        String ASSIGN = "assign";
    
    
    T cancel(Object id, Map<String, Object> additionalInfo);
	void onbeforeCancel(T model, WorkflowMetaInfo metaInfo);
	void onCancel(T model, WorkflowMetaInfo metaInfo);
	void onAfterCancel(T model, WorkflowMetaInfo metaInfo);
        T demoteToLeader(Object id, Map<String, Object> additionalInfo);
	void onbeforeDemoteToLeader(T model, WorkflowMetaInfo metaInfo);
	void onDemoteToLeader(T model, WorkflowMetaInfo metaInfo);
	void onAfterDemoteToLeader(T model, WorkflowMetaInfo metaInfo);
        T approveToLeader(Object id, Map<String, Object> additionalInfo);
	void onbeforeApproveToLeader(T model, WorkflowMetaInfo metaInfo);
	void onApproveToLeader(T model, WorkflowMetaInfo metaInfo);
	void onAfterApproveToLeader(T model, WorkflowMetaInfo metaInfo);
        T submit(Object id, Map<String, Object> additionalInfo);
	void onbeforeSubmit(T model, WorkflowMetaInfo metaInfo);
	void onSubmit(T model, WorkflowMetaInfo metaInfo);
	void onAfterSubmit(T model, WorkflowMetaInfo metaInfo);
        T submitToApprover(Object id, Map<String, Object> additionalInfo);
	void onbeforeSubmitToApprover(T model, WorkflowMetaInfo metaInfo);
	void onSubmitToApprover(T model, WorkflowMetaInfo metaInfo);
	void onAfterSubmitToApprover(T model, WorkflowMetaInfo metaInfo);
        T demoteToRequester(Object id, Map<String, Object> additionalInfo);
	void onbeforeDemoteToRequester(T model, WorkflowMetaInfo metaInfo);
	void onDemoteToRequester(T model, WorkflowMetaInfo metaInfo);
	void onAfterDemoteToRequester(T model, WorkflowMetaInfo metaInfo);
        T demoteToScheduler(Object id, Map<String, Object> additionalInfo);
	void onbeforeDemoteToScheduler(T model, WorkflowMetaInfo metaInfo);
	void onDemoteToScheduler(T model, WorkflowMetaInfo metaInfo);
	void onAfterDemoteToScheduler(T model, WorkflowMetaInfo metaInfo);
        T close(Object id, Map<String, Object> additionalInfo);
	void onbeforeClose(T model, WorkflowMetaInfo metaInfo);
	void onClose(T model, WorkflowMetaInfo metaInfo);
	void onAfterClose(T model, WorkflowMetaInfo metaInfo);
        T validate(Object id, Map<String, Object> additionalInfo);
	void onbeforeValidate(T model, WorkflowMetaInfo metaInfo);
	void onValidate(T model, WorkflowMetaInfo metaInfo);
	void onAfterValidate(T model, WorkflowMetaInfo metaInfo);
        T assign(Object id, Map<String, Object> additionalInfo);
	void onbeforeAssign(T model, WorkflowMetaInfo metaInfo);
	void onAssign(T model, WorkflowMetaInfo metaInfo);
	void onAfterAssign(T model, WorkflowMetaInfo metaInfo);
    
}