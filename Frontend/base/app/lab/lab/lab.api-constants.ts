import { LabBase} from '@baseapp/lab/lab/lab.base.model';

export class LabApiConstants {
    public static readonly delete: any = {
        url: '/rest/labs/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly getById: any = {
        url: '/rest/labs/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly getByLabName: any = {
        url: 'bylabname/{labname}',
        method: 'GET',
        showloading: true
    };
    public static readonly getDatatableDataByPId: any = {
        url: '/rest/labs/datatable/{pid}',
        method: 'POST',
        showloading: true
    };
    public static readonly getLabByPId: any = {
        url: '/rest/labs/bypid/{pid}',
        method: 'GET',
        showloading: true
    };
    public static readonly create: any = {
        url: '/rest/labs/',
        method: 'POST',
        showloading: true
    };
    public static readonly update: any = {
        url: '/rest/labs/',
        method: 'PUT',
        showloading: true
    };
    public static readonly autoSuggestService: any = {
        url: '/rest/labs/autosuggest',
        method: 'GET',
        showloading: false
    };
    public static readonly getDatatableData: any = {
        url: '/rest/labs/datatable',
        method: 'POST',
        showloading: true
    };
}