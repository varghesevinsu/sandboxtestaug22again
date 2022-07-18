import { DelegationBase} from '@baseapp/delegation/delegation/delegation.base.model';

export class DelegationApiConstants {
    public static readonly delete: any = {
        url: '/rest/delegations/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly getById: any = {
        url: '/rest/delegations/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly update: any = {
        url: '/rest/delegations/',
        method: 'PUT',
        showloading: true
    };
    public static readonly autoSuggestService: any = {
        url: '/rest/delegations/autosuggest',
        method: 'GET',
        showloading: false
    };
    public static readonly create: any = {
        url: '/rest/delegations/',
        method: 'POST',
        showloading: true
    };
    public static readonly getDatatableData: any = {
        url: '/rest/delegations/datatable',
        method: 'POST',
        showloading: true
    };
}