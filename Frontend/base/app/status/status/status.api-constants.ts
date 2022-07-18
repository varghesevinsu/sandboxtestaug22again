import { StatusBase} from '@baseapp/status/status/status.base.model';

export class StatusApiConstants {
    public static readonly getDatatableDataByPId: any = {
        url: '/rest/statuses/datatable/{pid}',
        method: 'POST',
        showloading: true
    };
    public static readonly create: any = {
        url: '/rest/statuses/',
        method: 'POST',
        showloading: true
    };
    public static readonly getByStatusOfTheRequest: any = {
        url: 'bystatusoftherequest/{statusoftherequest}',
        method: 'GET',
        showloading: true
    };
    public static readonly getById: any = {
        url: '/rest/statuses/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly getStatusByPId: any = {
        url: '/rest/statuses/bypid/{pid}',
        method: 'GET',
        showloading: true
    };
    public static readonly update: any = {
        url: '/rest/statuses/',
        method: 'PUT',
        showloading: true
    };
    public static readonly delete: any = {
        url: '/rest/statuses/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly getDatatableData: any = {
        url: '/rest/statuses/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly autoSuggestService: any = {
        url: '/rest/statuses/autosuggest',
        method: 'GET',
        showloading: false
    };
}