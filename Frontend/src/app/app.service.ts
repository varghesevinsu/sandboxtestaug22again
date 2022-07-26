import { AppBaseService } from "@baseapp/app.base.service";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ApiConstants } from "./api.constants";
@Injectable({
    providedIn: 'root'
})
export class AppService extends AppBaseService {
    getManPowerByAll(...args: any):Observable<any>{
        const serviceOpts = ApiConstants.getManPowerByAll;
        const params= args[0];
        return this.baseService.get(serviceOpts,params);
    }
}