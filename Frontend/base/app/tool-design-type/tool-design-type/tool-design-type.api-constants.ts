import { ToolDesignTypeBase} from '@baseapp/tool-design-type/tool-design-type/tool-design-type.base.model';

export class ToolDesignTypeApiConstants {
    public static readonly getById: any = {
        url: '/rest/tooldesigntypes/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly update: any = {
        url: '/rest/tooldesigntypes/',
        method: 'PUT',
        showloading: true
    };
    public static readonly getToolDesignTypeByPId: any = {
        url: '/rest/tooldesigntypes/bypid/{pid}',
        method: 'GET',
        showloading: true
    };
    public static readonly getDatatableData: any = {
        url: '/rest/tooldesigntypes/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly autoSuggestService: any = {
        url: '/rest/tooldesigntypes/autosuggest',
        method: 'GET',
        showloading: false
    };
    public static readonly delete: any = {
        url: '/rest/tooldesigntypes/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly create: any = {
        url: '/rest/tooldesigntypes/',
        method: 'POST',
        showloading: true
    };
    public static readonly getDatatableDataByPId: any = {
        url: '/rest/tooldesigntypes/datatable/{pid}',
        method: 'POST',
        showloading: true
    };
    public static readonly getByToolDesignType: any = {
        url: 'bytooldesigntype/{tooldesigntype}',
        method: 'GET',
        showloading: true
    };
}