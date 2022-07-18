import { PlaceOfDevBase} from '@baseapp/place-of-dev/place-of-dev/place-of-dev.base.model';

export class PlaceOfDevApiConstants {
    public static readonly getBySiteCode: any = {
        url: 'bysitecode/{sitecode}',
        method: 'GET',
        showloading: true
    };
    public static readonly create: any = {
        url: '/rest/placeofdevs/',
        method: 'POST',
        showloading: true
    };
    public static readonly getById: any = {
        url: '/rest/placeofdevs/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly delete: any = {
        url: '/rest/placeofdevs/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly autoSuggestService: any = {
        url: '/rest/placeofdevs/autosuggest',
        method: 'GET',
        showloading: false
    };
    public static readonly update: any = {
        url: '/rest/placeofdevs/',
        method: 'PUT',
        showloading: true
    };
    public static readonly getDatatableData: any = {
        url: '/rest/placeofdevs/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly getDatatableDataByPId: any = {
        url: '/rest/placeofdevs/datatable/{pid}',
        method: 'POST',
        showloading: true
    };
    public static readonly getPlaceOfDevByPId: any = {
        url: '/rest/placeofdevs/bypid/{pid}',
        method: 'GET',
        showloading: true
    };
}