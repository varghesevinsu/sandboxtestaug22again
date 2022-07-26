import { BaseApiConstants } from "@baseapp/api-constants.base";

export class ApiConstants extends BaseApiConstants{

    public static readonly getManPowerByAll: any = {
        url: '/rest/manpowers/byAll/{service}/{site}/{currency}',
        method: 'GET',
        showloading: true
    };

}