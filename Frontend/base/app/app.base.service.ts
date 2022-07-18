import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseApiConstants } from './api-constants.base';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AppBaseService {
    
    constructor(
        public baseService:BaseService
    ) { }

      getWorkFlowConfig(...args: any):Observable<any>{
        const serviceOpts = BaseApiConstants.workFlowConfig;
        const params= args[0];
        
        const subject = new Observable(observer => {
          this.baseService.get(serviceOpts,params).subscribe((response: any) => {
            observer.next(response);
          },
          (err:any) => {
            observer.error(err);
          });
        });
    
        return subject;
    }

    // getworkflow(): Observable<any> {
    //     const subject: Observable<any> = new Observable(observer => {
    //       const data = require('base/assets/userworkflow.json');
    //       observer.next(data as any);
    //     });
    //     return subject;
    //   }
}


