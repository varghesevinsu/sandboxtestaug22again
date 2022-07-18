import { ToolBase} from '@baseapp/tool/tool/tool.base.model';

export class ToolApiConstants {
    public static readonly getDatatableData: any = {
        url: '/rest/tools/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly getDatatableDataByPId: any = {
        url: '/rest/tools/datatable/{pid}',
        method: 'POST',
        showloading: true
    };
    public static readonly update: any = {
        url: '/rest/tools/',
        method: 'PUT',
        showloading: true
    };
    public static readonly create: any = {
        url: '/rest/tools/',
        method: 'POST',
        showloading: true
    };
    public static readonly autoSuggestService: any = {
        url: '/rest/tools/autosuggest',
        method: 'GET',
        showloading: false
    };
    public static readonly getToolByPId: any = {
        url: '/rest/tools/bypid/{pid}',
        method: 'GET',
        showloading: true
    };
    public static readonly delete: any = {
        url: '/rest/tools/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly getById: any = {
        url: '/rest/tools/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly getByTool: any = {
        url: 'bytool/{tool}',
        method: 'GET',
        showloading: true
    };
}