import { UserGuideBase} from '@baseapp/user-guide/user-guide/user-guide.base.model';

export class UserGuideApiConstants {
    public static readonly autoSuggestService: any = {
        url: '/rest/userguides/autosuggest',
        method: 'GET',
        showloading: false
    };
    public static readonly getByLink: any = {
        url: 'bylink/{link}',
        method: 'GET',
        showloading: true
    };
    public static readonly update: any = {
        url: '/rest/userguides/',
        method: 'PUT',
        showloading: true
    };
    public static readonly getDatatableData: any = {
        url: '/rest/userguides/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly getDatatableDataByPId: any = {
        url: '/rest/userguides/datatable/{pid}',
        method: 'POST',
        showloading: true
    };
    public static readonly delete: any = {
        url: '/rest/userguides/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly create: any = {
        url: '/rest/userguides/',
        method: 'POST',
        showloading: true
    };
    public static readonly getById: any = {
        url: '/rest/userguides/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly getUserGuideByPId: any = {
        url: '/rest/userguides/bypid/{pid}',
        method: 'GET',
        showloading: true
    };
}