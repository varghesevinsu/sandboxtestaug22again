import { ServicesBase} from '@baseapp/services/services/services.base.model';

export class ServicesApiConstants {
    public static readonly autoSuggestService: any = {
        url: '/rest/services/autosuggest',
        method: 'GET',
        showloading: false
    };
    public static readonly getDatatableData: any = {
        url: '/rest/services/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly getByService: any = {
        url: 'byservice/{service}',
        method: 'GET',
        showloading: true
    };
    public static readonly update: any = {
        url: '/rest/services/',
        method: 'PUT',
        showloading: true
    };
    public static readonly getServicesByPId: any = {
        url: '/rest/services/bypid/{pid}',
        method: 'GET',
        showloading: true
    };
    public static readonly getDatatableDataByPId: any = {
        url: '/rest/services/datatable/{pid}',
        method: 'POST',
        showloading: true
    };
    public static readonly delete: any = {
        url: '/rest/services/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly create: any = {
        url: '/rest/services/',
        method: 'POST',
        showloading: true
    };
    public static readonly getById: any = {
        url: '/rest/services/{sid}',
        method: 'GET',
        showloading: true
    };
}