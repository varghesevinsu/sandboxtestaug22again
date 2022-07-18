import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseService } from '@baseapp/base.service';
import { UserGuideBase} from './user-guide.base.model';
import { UserGuideApiConstants } from './user-guide.api-constants';


@Injectable({
  providedIn: 'root'
})
export class UserGuideService {

  constructor(
      public baseService:BaseService
  ) { }
  
	  getProtoTypingData(): Observable<any> {
	      const subject:Observable<UserGuideBase> = new Observable(observer => {
	        const data =  require('base/assets/sample-data/user-guide.json');
	        observer.next(data as UserGuideBase);
	      });
	      return subject;
	  }
	 
	 getProtoTypingDataById(...args:any): Observable<any> {
		 const params= args[0];
		 const subject:Observable<UserGuideBase> = new Observable(observer => {
			 const response = require('base/assets/sample-data/user-guide.json');
			 const data = response.find((x: { sid: string; }) => x.sid === params.sid);
			 observer.next(data as UserGuideBase);
		 });
		 return subject;
	}

    autoSuggestService(...args: any):Observable<any>{
        const serviceOpts = UserGuideApiConstants.autoSuggestService;
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
    getByLink(...args: any):Observable<any>{
        const serviceOpts = UserGuideApiConstants.getByLink;
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
        const serviceOpts = UserGuideApiConstants.update;
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
    getDatatableData(...args: any):Observable<any>{
        const serviceOpts = UserGuideApiConstants.getDatatableData;
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
    getDatatableDataByPId(...args: any):Observable<any>{
        const serviceOpts = UserGuideApiConstants.getDatatableDataByPId;
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
    delete(...args: any):Observable<any>{
        const serviceOpts = UserGuideApiConstants.delete;
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
    create(...args: any):Observable<any>{
        const serviceOpts = UserGuideApiConstants.create;
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
    getById(...args: any):Observable<any>{
        const serviceOpts = UserGuideApiConstants.getById;
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
    getUserGuideByPId(...args: any):Observable<any>{
        const serviceOpts = UserGuideApiConstants.getUserGuideByPId;
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
}
