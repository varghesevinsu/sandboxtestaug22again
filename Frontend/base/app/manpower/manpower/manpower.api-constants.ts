import { ManpowerBase} from '@baseapp/manpower/manpower/manpower.base.model';

export class ManpowerApiConstants {
    public static readonly delete: any = {
        url: '/rest/manpowers/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly getManPowerByPId: any = {
        url: '/rest/manpowers/bypid/{pid}',
        method: 'GET',
        showloading: true
    };
    public static readonly getByService: any = {
        url: 'byservice/{service}',
        method: 'GET',
        showloading: true
    };
    public static readonly getDatatableData: any = {
        url: '/rest/manpowers/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly autoSuggestService: any = {
        url: '/rest/manpowers/autosuggest',
        method: 'GET',
        showloading: false
    };
    public static readonly update: any = {
        url: '/rest/manpowers/',
        method: 'PUT',
        showloading: true
    };
    public static readonly getDatatableDataByPId: any = {
        url: '/rest/manpowers/datatable/{pid}',
        method: 'POST',
        showloading: true
    };
    public static readonly getById: any = {
        url: '/rest/manpowers/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly create: any = {
        url: '/rest/manpowers/',
        method: 'POST',
        showloading: true
    };
}