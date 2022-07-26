import { BaseApiConstants } from "@baseapp/api-constants.base";

export class ApiConstants extends BaseApiConstants{

    public static readonly getManPowerByAll: any = {
        url: 'byAll/{service}/{site}/{currency}',
        method: 'GET',
        showloading: true
    };

}