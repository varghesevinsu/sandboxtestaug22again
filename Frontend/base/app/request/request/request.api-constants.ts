import { RequestBase} from '@baseapp/request/request/request.base.model';

export class RequestApiConstants {
    public static readonly sslWorkflowDemoteToLeader: any = {
        url: '/rest/requests/sslworkflow/demotetoleader/{id}',
        method: 'PUT',
        showloading: true
    };
    public static readonly wfSslSubmit: any = {
        url: '/rest/requests/wfssl/submit/{id}',
        method: 'PUT',
        showloading: true
    };
    public static readonly getById: any = {
        url: '/rest/requests/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly sslWorkflowAssign: any = {
        url: '/rest/requests/sslworkflow/assign/{id}',
        method: 'PUT',
        showloading: true
    };
    public static readonly sslWorkflow: any = {
        url: '/rest/requests/sslworkflow//{id}',
        method: 'PUT',
        showloading: true
    };
    public static readonly sslWorkflowCancel: any = {
        url: '/rest/requests/sslworkflow/cancel/{id}',
        method: 'PUT',
        showloading: true
    };
    public static readonly sslWorkflowSubmit: any = {
        url: '/rest/requests/sslworkflow/submit/{id}',
        method: 'PUT',
        showloading: true
    };
    public static readonly sslWorkflowValidate: any = {
        url: '/rest/requests/sslworkflow/validate/{id}',
        method: 'PUT',
        showloading: true
    };
    public static readonly autoSuggestService: any = {
        url: '/rest/requests/autosuggest',
        method: 'GET',
        showloading: false
    };
    public static readonly sslWorkflowDemoteToScheduler: any = {
        url: '/rest/requests/sslworkflow/demotetoscheduler/{id}',
        method: 'PUT',
        showloading: true
    };
    public static readonly sslWorkflowSave: any = {
        url: '/rest/requests/sslworkflow/save/{id}',
        method: 'PUT',
        showloading: true
    };
    public static readonly update: any = {
        url: '/rest/requests/',
        method: 'PUT',
        showloading: true
    };
    public static readonly getDatatableData: any = {
        url: '/rest/requests/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly create: any = {
        url: '/rest/requests/',
        method: 'POST',
        showloading: true
    };
    public static readonly sslWorkflowApproveToLeader: any = {
        url: '/rest/requests/sslworkflow/approvetoleader/{id}',
        method: 'PUT',
        showloading: true
    };
    public static readonly delete: any = {
        url: '/rest/requests/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly sslWorkflowSubmitToApprover: any = {
        url: '/rest/requests/sslworkflow/submittoapprover/{id}',
        method: 'PUT',
        showloading: true
    };
}