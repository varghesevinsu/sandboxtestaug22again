import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseService } from '@baseapp/base.service';
import { ToolDesignTypeBase} from './tool-design-type.base.model';
import { ToolDesignTypeApiConstants } from './tool-design-type.api-constants';


@Injectable({
  providedIn: 'root'
})
export class ToolDesignTypeService {

  constructor(
      public baseService:BaseService
  ) { }
  
	  getProtoTypingData(): Observable<any> {
	      const subject:Observable<ToolDesignTypeBase> = new Observable(observer => {
	        const data =  require('base/assets/sample-data/tool-design-type.json');
	        observer.next(data as ToolDesignTypeBase);
	      });
	      return subject;
	  }
	 
	 getProtoTypingDataById(...args:any): Observable<any> {
		 const params= args[0];
		 const subject:Observable<ToolDesignTypeBase> = new Observable(observer => {
			 const response = require('base/assets/sample-data/tool-design-type.json');
			 const data = response.find((x: { sid: string; }) => x.sid === params.sid);
			 observer.next(data as ToolDesignTypeBase);
		 });
		 return subject;
	}

    getById(...args: any):Observable<any>{
        const serviceOpts = ToolDesignTypeApiConstants.getById;
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
        const serviceOpts = ToolDesignTypeApiConstants.update;
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
    getToolDesignTypeByPId(...args: any):Observable<any>{
        const serviceOpts = ToolDesignTypeApiConstants.getToolDesignTypeByPId;
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
    getDatatableData(...args: any):Observable<any>{
        const serviceOpts = ToolDesignTypeApiConstants.getDatatableData;
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
    autoSuggestService(...args: any):Observable<any>{
        const serviceOpts = ToolDesignTypeApiConstants.autoSuggestService;
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
    delete(...args: any):Observable<any>{
        const serviceOpts = ToolDesignTypeApiConstants.delete;
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
        const serviceOpts = ToolDesignTypeApiConstants.create;
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
        const serviceOpts = ToolDesignTypeApiConstants.getDatatableDataByPId;
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
    getByToolDesignType(...args: any):Observable<any>{
        const serviceOpts = ToolDesignTypeApiConstants.getByToolDesignType;
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
