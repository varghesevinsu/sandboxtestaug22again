import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseService } from '@baseapp/base.service';
import { DelegationBase} from './delegation.base.model';
import { DelegationApiConstants } from './delegation.api-constants';


@Injectable({
  providedIn: 'root'
})
export class DelegationService {

  constructor(
      public baseService:BaseService
  ) { }
  
	  getProtoTypingData(): Observable<any> {
	      const subject:Observable<DelegationBase> = new Observable(observer => {
	        const data =  require('base/assets/sample-data/delegation.json');
	        observer.next(data as DelegationBase);
	      });
	      return subject;
	  }
	 
	 getProtoTypingDataById(...args:any): Observable<any> {
		 const params= args[0];
		 const subject:Observable<DelegationBase> = new Observable(observer => {
			 const response = require('base/assets/sample-data/delegation.json');
			 const data = response.find((x: { sid: string; }) => x.sid === params.sid);
			 observer.next(data as DelegationBase);
		 });
		 return subject;
	}

    delete(...args: any):Observable<any>{
        const serviceOpts = DelegationApiConstants.delete;
        const params= args[0];
        
        const subject = new Observable(observer => {
          this.baseService.delete(serviceOpts,params).subscribe((response: any) => {
            observer.next(response);
          },
          (err:any) => {
            observer.error(err);
          });
        });
    
        return subject;
    }
    getById(...args: any):Observable<any>{
        const serviceOpts = DelegationApiConstants.getById;
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
    update(...args: any):Observable<any>{
        const serviceOpts = DelegationApiConstants.update;
        const params= args[0];
        
        const subject = new Observable(observer => {
          this.baseService.put(serviceOpts,params).subscribe((response: any) => {
            observer.next(response);
          },
          (err:any) => {
            observer.error(err);
          });
        });
    
        return subject;
    }
    autoSuggestService(...args: any):Observable<any>{
        const serviceOpts = DelegationApiConstants.autoSuggestService;
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
    create(...args: any):Observable<any>{
        const serviceOpts = DelegationApiConstants.create;
        const params= args[0];
        
        const subject = new Observable(observer => {
          this.baseService.post(serviceOpts,params).subscribe((response: any) => {
            observer.next(response);
          },
          (err:any) => {
            observer.error(err);
          });
        });
    
        return subject;
    }
    getDatatableData(...args: any):Observable<any>{
        const serviceOpts = DelegationApiConstants.getDatatableData;
        const params= args[0];
        
        const subject = new Observable(observer => {
          this.baseService.post(serviceOpts,params).subscribe((response: any) => {
            observer.next(response);
          },
          (err:any) => {
            observer.error(err);
          });
        });
    
        return subject;
    }
}
