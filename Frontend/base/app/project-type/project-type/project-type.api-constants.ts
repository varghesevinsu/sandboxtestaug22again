import { ProjectTypeBase} from '@baseapp/project-type/project-type/project-type.base.model';

export class ProjectTypeApiConstants {
    public static readonly delete: any = {
        url: '/rest/projecttypes/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly getProjectTypeByPId: any = {
        url: '/rest/projecttypes/bypid/{pid}',
        method: 'GET',
        showloading: true
    };
    public static readonly getByProjectType: any = {
        url: 'byprojecttype/{projecttype}',
        method: 'GET',
        showloading: true
    };
    public static readonly update: any = {
        url: '/rest/projecttypes/',
        method: 'PUT',
        showloading: true
    };
    public static readonly getDatatableData: any = {
        url: '/rest/projecttypes/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly autoSuggestService: any = {
        url: '/rest/projecttypes/autosuggest',
        method: 'GET',
        showloading: false
    };
    public static readonly getDatatableDataByPId: any = {
        url: '/rest/projecttypes/datatable/{pid}',
        method: 'POST',
        showloading: true
    };
    public static readonly create: any = {
        url: '/rest/projecttypes/',
        method: 'POST',
        showloading: true
    };
    public static readonly getById: any = {
        url: '/rest/projecttypes/{sid}',
        method: 'GET',
        showloading: true
    };
}