import { HistoryBase} from '@baseapp/history/history/history.base.model';

export class HistoryApiConstants {
    public static readonly getHistoryByPId: any = {
        url: '/rest/histories/bypid/{pid}',
        method: 'GET',
        showloading: true
    };
    public static readonly getById: any = {
        url: '/rest/histories/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly getDatatableDataByPId: any = {
        url: '/rest/histories/datatable/{pid}',
        method: 'POST',
        showloading: true
    };
    public static readonly create: any = {
        url: '/rest/histories/',
        method: 'POST',
        showloading: true
    };
    public static readonly getByRequestCode: any = {
        url: 'byrequestcode/{requestcode}',
        method: 'GET',
        showloading: true
    };
    public static readonly update: any = {
        url: '/rest/histories/',
        method: 'PUT',
        showloading: true
    };
    public static readonly delete: any = {
        url: '/rest/histories/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly getDatatableData: any = {
        url: '/rest/histories/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly autoSuggestService: any = {
        url: '/rest/histories/autosuggest',
        method: 'GET',
        showloading: false
    };
}