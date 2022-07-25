import { ServicesService } from '../services.service';
import { ServicesBase} from '../services.base.model';
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ApplicationUserApiConstants } from '@baseapp/application-user/application-user/application-user.api-constants';

import { BaseService } from '@baseapp/base.service';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ActionItem } from '@baseapp/widgets/action-bar/action-bar.component';
import { AppGlobalService } from '@baseapp/app-global.service';
import { debounceTime } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged} from 'rxjs';
import { Observable } from 'rxjs';
import { ChangeLogsComponent } from '@baseapp/widgets/change-logs/change-logs.component'
import { fromEvent } from 'rxjs';
import { AppUtilBaseService } from '@baseapp/app-util.base.service';
import { map } from 'rxjs';
import { ConfirmationPopupComponent } from '@baseapp/widgets/confirmation/confirmation-popup.component';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseAppConstants } from '@baseapp/app-constants.base';
import { allowedValuesValidator } from '@baseapp/widgets/validators/allowedValuesValidator';
import { DomSanitizer } from '@angular/platform-browser';
import { dateValidator } from '@baseapp/widgets/validators/dateValidator';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { AppBaseService } from '@baseapp/app.base.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Directive(
{
	providers:[MessageService, ConfirmationService, DialogService]
}
)
export class ServicesDetailBaseComponent{
	
	
	comments: string ='';
confirmationReference:any;
	id: any;
pid:any;
isMobile: boolean = BaseAppConstants.isMobile;
backupData:any = {};
hiddenFields:any = {};
data:any = {};
formErrors:any = {};
inValidFields:any = {};
formFieldConfig:any = {};
securityJson:any = {
}
formConfig = {};     
actionButtons:ActionItem[] = [];  
wizardItems:any = [];
currentUserData = this.appGlobalService.get('currentUser');
selectedItems:any ={};
workflowType = "";
workFlowEnabled = false;
workFlowInitialState = "";
workFlowField = "";
workflowActions:any ={
    disableActions:[],
    enableActions:[],
    hideActions:[]
  };
  isFormValueChanged: boolean = false;
  mandatoryFields:any ={};
  validatorsRetained:any ={};
  isSaveResponseReceived:boolean = false;
  formSecurityConfig:any = {};
  enableReadOnly = BaseAppConstants.enableReadOnly;
isRowSelected:boolean = true; 
	autoSuggestPageNo:number = 0;
filteredItems:any = [];
isAutoSuggestCallFired: boolean = false;
	bsModalRef?: BsModalRef;
	isChildPage:boolean = true;
	@Input('parentId') parentId:any;
	@Output() onAction: EventEmitter<any> = new EventEmitter();

	
	leftActionBarConfig : any = {
  "children" : [ {
    "outline" : "true",
    "buttonType" : "icon_on_left",
    "visibility" : "show",
    "showOn" : "both",
    "buttonStyle" : "curved",
    "icon" : {
      "type" : "icon",
      "icon" : {
        "label" : "fas fa-arrow-left",
        "value" : "fas fa-arrow-left"
      }
    },
    "action" : "back",
    "buttonEnabled" : "yes",
    "label" : "BACK",
    "type" : "button"
  }, {
    "outline" : "true",
    "label" : "BUTTON_GROUP",
    "type" : "buttonGroup",
    "children" : [ {
      "outline" : "true",
      "buttonType" : "icon_on_left",
      "visibility" : "show",
      "showOn" : "both",
      "buttonStyle" : "curved",
      "buttonEnabled" : "yes",
      "action" : "save",
      "conditionForButtonEnable" : "",
      "label" : "SAVE",
      "visiblity" : "show",
      "type" : "button"
    }, {
      "outline" : "true",
      "buttonType" : "icon_on_left",
      "visibility" : "show",
      "showOn" : "both",
      "buttonStyle" : "curved",
      "buttonEnabled" : "yes",
      "action" : "cancel",
      "conditionForButtonEnable" : "",
      "label" : "CANCEL",
      "visiblity" : "show",
      "type" : "button"
    }, {
      "outline" : "true",
      "buttonType" : "icon_on_left",
      "visibility" : "show",
      "showOn" : "both",
      "buttonStyle" : "curved",
      "buttonEnabled" : "yes",
      "action" : "changelog",
      "conditionForButtonEnable" : "",
      "label" : "CHANGELOG",
      "visiblity" : "show",
      "type" : "button"
    } ],
    "displayCount" : 2,
    "buttonStyle" : "curved"
  } ]
}
	workflowActionBarConfig : any = {
  "children" : [ {
    "outline" : true,
    "label" : "BUTTON_GROUP",
    "type" : "buttonGroup",
    "buttonStyle" : "curved",
    "displayCount" : 2
  } ],
  "label" : "Workflow Action Bar",
  "type" : "workflowActionBar"
}
	detailCaptionBarConfig : any = { }
	detailFormConfig : any = {
  "children" : [ {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "Metier",
    "data" : "Metier",
    "currentNode" : "b0f08f52-6a95-4fb8-ba12-757c04f1b936",
    "label" : "Metier",
    "type" : "formField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "metier",
    "valueChange" : true,
    "name" : "metier",
    "editConditionally" : {
      "qbName" : "Admin_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ "selected", "Admin" ]
    },
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "metier"
  }, {
    "allowEditing" : "yes",
    "multipleValues" : false,
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : " Service",
    "data" : " Service",
    "multipleValuesMax" : 10,
    "currentNode" : "0e8ad508-4a26-487f-a147-1ffe3646e4e0",
    "label" : " Service",
    "type" : "formField",
    "mandatory" : "yes",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "service",
    "multipleValuesMin" : 0,
    "valueChange" : true,
    "name" : "service",
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "service"
  }, {
    "allowEditing" : "yes",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "Enabled Lab",
    "data" : "Enabled Lab",
    "label" : "Enabled Lab",
    "type" : "formField",
    "mandatory" : "conditional",
    "searchable" : "full_word",
    "transientField" : false,
    "defaultVal" : "true",
    "conditionalMandatory" : {
      "qbName" : "Only Admin ",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ "selected", "Admin" ]
    },
    "field" : "enabledLab",
    "name" : "enabledLab",
    "sysGen" : false,
    "uiType" : "checkbox",
    "fieldType" : "Boolean",
    "allowViewing" : "yes",
    "fieldId" : "enabledLab"
  }, {
    "allowEditing" : "yes",
    "multipleValues" : false,
    "lookupTo" : "0725d0fa-e979-4bdf-88d6-f2648d42a48d",
    "fieldName" : "Resp Leader",
    "data" : "Resp Leader",
    "lookupUrl" : "applicationusers/autosuggest",
    "type" : "formField",
    "mandatory" : "no",
    "sysGen" : false,
    "fieldId" : "respLeader",
    "allowedValues" : { },
    "defaultField" : false,
    "multipleValuesMax" : 10,
    "lookupType" : "table",
    "label" : "Resp Leader",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "respLeader",
    "multipleValuesMin" : 0,
    "name" : "respLeader",
    "uiType" : "autosuggest",
    "displayField" : "email",
    "fieldType" : "any",
    "allowViewing" : "yes"
  }, {
    "allowEditing" : "yes",
    "multipleValues" : false,
    "lookupTo" : "0725d0fa-e979-4bdf-88d6-f2648d42a48d",
    "fieldName" : "Resp Scheduler",
    "data" : "Resp Scheduler",
    "lookupUrl" : "applicationusers/autosuggest",
    "type" : "formField",
    "mandatory" : "no",
    "sysGen" : false,
    "fieldId" : "respScheduler",
    "allowedValues" : { },
    "defaultField" : false,
    "multipleValuesMax" : 10,
    "lookupType" : "table",
    "label" : "Resp Scheduler",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "respScheduler",
    "multipleValuesMin" : 0,
    "name" : "respScheduler",
    "uiType" : "autosuggest",
    "displayField" : "email",
    "fieldType" : "any",
    "allowViewing" : "yes"
  }, {
    "allowEditing" : "yes",
    "allowedValues" : {
      "values" : [ {
        "label" : "EMC",
        "value" : "EMC"
      }, {
        "label" : "ECAD",
        "value" : "ECAD"
      }, {
        "label" : "N_A",
        "value" : "N/A"
      } ],
      "conditions" : {
        "conditionType" : "Auto",
        "conditions" : [ ]
      }
    },
    "defaultField" : false,
    "fieldName" : "Specific Fields",
    "data" : "Specific Fields",
    "label" : "Specific Fields",
    "type" : "formField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "defaultVal" : "N/A",
    "field" : "specificFields",
    "name" : "specificFields",
    "sysGen" : false,
    "uiType" : "select",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "specificFields"
  } ],
  "columns" : "1",
  "valueChange" : true,
  "currentNode" : "detailForm",
  "type" : "form"
}
	pageViewTitle: string = 'SERVICES_DETAIL';
	
		detailFormControls : FormGroup = new FormGroup({
	service: new FormControl('',[Validators.required]),
	enabledLab: new FormControl('',[]),
	respScheduler: new FormControl('',[]),
	respLeader: new FormControl('',[]),
	metier: new FormControl('',[]),
	specificFields: new FormControl('',[]),
});


	constructor(public servicesService : ServicesService, public appUtilBaseService: AppUtilBaseService, public translateService: TranslateService, public messageService: MessageService, public confirmationService: ConfirmationService, public dialogService: DialogService, public domSanitizer:DomSanitizer, public bsModalService: BsModalService, public activatedRoute: ActivatedRoute, public appBaseService: AppBaseService, public router: Router, public appGlobalService: AppGlobalService, public baseService: BaseService, public location: Location, ...args: any) {
    
 	 }

	
	getData(){
       if(environment.prototype && this.id){
        const params = {
          sid: this.id
        };
            this.servicesService.getProtoTypingDataById(params).subscribe((res:any) =>{
                this.data = res;
                this.backupData = res;
                this.detailFormControls.patchValue(this.backupData);
            });
		}else if(this.id){
			const params = {
                sid: this.id
              };
            this.servicesService.getById(params).subscribe((res:ServicesBase[]) =>{
                this.data = res||{};
                this.backupData = res || {};
                if(this.backupData?.recDeleted)
                	delete this.backupData?.recDeleted;
                	 this.formatRawData();
            });
        }
    }
	getId(){
      this.activatedRoute.queryParams.subscribe((params: any) => { 
        this.id = params['id'];
        this.pid = params['pid']
      }); 
    }
	attachInfiniteScrollForAutoCompleterespLeader(fieldName:string) {
    const tracker = (<HTMLInputElement>document.getElementsByClassName('p-autocomplete-panel')[0])
    let windowYOffsetObservable = fromEvent(tracker, 'scroll').pipe(map(() => {
      return Math.round(tracker.scrollTop);
    }));

    const autoSuggestScrollSubscription = windowYOffsetObservable.subscribe((scrollPos: number) => {
      if ((tracker.offsetHeight + scrollPos >= tracker.scrollHeight)) {
        this.isAutoSuggestCallFired = false;
          if(this.filteredItems.length  >= this.autoSuggestPageNo * BaseAppConstants.defaultPageSize){
            this.autoSuggestPageNo = this.autoSuggestPageNo + 1;
          }
         const methodName: any = `autoSuggestSearchrespLeader`
        let action: Exclude<keyof ServicesDetailBaseComponent, ' '> = methodName;
        this[action]();
      }
    });
    // this.subscriptions.push(autoSuggestScrollSubscription);
  }
	formValueChanges() {
    this.detailFormControls.valueChanges.pipe(
      debounceTime(600),
      distinctUntilChanged(),
    )
      .subscribe(() => {
        this.updateAllowedActions();
        this.isFormValueChanged = true;
      })
  }
	getSelectedObject(field:string,options:any){
      const selectedObj = (options.filter((item: { label: any}) => item.label.includes(field)));
      return selectedObj[0];
  }
	getWorkflowConfig() {
	const workFlowInfo = this.data.workflowInfo;
	const params = {
		workflowType: this.workflowType
	}
	if(workFlowInfo && this.workFlowEnabled){
		this.appBaseService.getWorkFlowConfig(params).subscribe((res: any) => {
			this.securityJson = res.config;
			this.configureFormOnWorkflow();
		})
	}
}
	actionBarAction(btn: any) {
    const methodName: any = (`on` + btn.action.charAt(0).toUpperCase() + btn.action.slice(1));
    let action: Exclude<keyof ServicesDetailBaseComponent, ' '> = methodName;
    if (btn.action === 'navigate_to_page' && btn.pageName?.url) {
      this.router.navigateByUrl(btn.pageName.url);
    }
    else if (typeof this[action] === "function") {
      this[action]();
    }
  }
	clearValidations(mandatoryFields: []) {
    mandatoryFields.forEach((controlName: string) => {
      if (!(this.validatorsRetained[controlName] && this.validatorsRetained[controlName]['requiredValidator'])) {
        this.detailFormControls.controls[controlName].removeValidators(Validators.required);
        this.detailFormControls.controls[controlName].updateValueAndValidity();
      }

    })
  }
	formatRawData() {
    this.detailFormConfig.children.map((ele: any) => {
      if (ele.fieldType == 'Date') {
        if (this.data && this.data[ele.name]) {
          const formattedDate = new Date(this.data[ele.name])
          this.data[ele.name] = formattedDate;
          this.backupData[ele.name] = formattedDate;
        }
      }
      if (ele.uiType === 'autosuggest' && ele.multipleValues) {
        let arr: any[] = [];
        if (this.data && this.data[ele.name] && Array.isArray(this.data[ele.name])) {
          this.data[ele.name]?.map((k: any) => {
            this.createAutoSuggestFields(ele);
            this.selectedItems[ele.name] = this.data[ele.name]
            arr.push(k.value);
          })
          if (arr.length > 0) {
            this.data[ele.name] = arr;
            this.backupData[ele.name] = arr;
          }
        }
      }
      else if (ele.uiType === 'autosuggest' && !ele.multipleValues) {
        if (this.data && this.data[ele.name] && Object.keys(this.data[ele.name]).length > 0) {
          this.createAutoSuggestFields(ele);
          this.selectedItems[ele.name].push(this.data[ele.name]);
          const value = this.data[ele.name]?.value;
          this.data[ele.name] = value;
          this.backupData[ele.name] = value;
        }
      }
    })
    this.detailFormControls.patchValue(this.backupData);
  }

  createAutoSuggestFields(ele: any) {
    if (!this.selectedItems?.hasOwnProperty(ele.name)) {
      this.selectedItems[ele.name] = [];
    }

  }
	deattachScroll() {
    this.filteredItems = [];
    this.autoSuggestPageNo = 0;
    this.isAutoSuggestCallFired = false;
  }
	formatCaptionItems(config: any, data: any) {
    if (Object.keys(data).length > 0) {
      return (this.appUtilBaseService.formatRawDatatoRedableFormat(config, data[config.field]));
    }
    else {
      return '';
    }
  }
	canDeactivate(): Observable<boolean> | boolean {  
    return true      
    //return this.appUtilBaseService.canDeactivateCall(this.form, this.backupData);
}
	attachInfiniteScrollForAutoCompleterespScheduler(fieldName:string) {
    const tracker = (<HTMLInputElement>document.getElementsByClassName('p-autocomplete-panel')[0])
    let windowYOffsetObservable = fromEvent(tracker, 'scroll').pipe(map(() => {
      return Math.round(tracker.scrollTop);
    }));

    const autoSuggestScrollSubscription = windowYOffsetObservable.subscribe((scrollPos: number) => {
      if ((tracker.offsetHeight + scrollPos >= tracker.scrollHeight)) {
        this.isAutoSuggestCallFired = false;
          if(this.filteredItems.length  >= this.autoSuggestPageNo * BaseAppConstants.defaultPageSize){
            this.autoSuggestPageNo = this.autoSuggestPageNo + 1;
          }
         const methodName: any = `autoSuggestSearchrespScheduler`
        let action: Exclude<keyof ServicesDetailBaseComponent, ' '> = methodName;
        this[action]();
      }
    });
    // this.subscriptions.push(autoSuggestScrollSubscription);
  }
	autoSuggestSearchrespScheduler(event?: any, col?: any,url?:any) {
if(!this.isAutoSuggestCallFired){
      this.isAutoSuggestCallFired = true;
    let apiObj = Object.assign({}, ApplicationUserApiConstants.autoSuggestService)
    apiObj.url = `${url ||apiObj.url}?query=${event.query}&pgNo=${this.autoSuggestPageNo}&pgLen=${BaseAppConstants.defaultPageSize}`;
     this.baseService.get(apiObj).subscribe((res: any) => {
      this.isAutoSuggestCallFired = false;
      let updateRecords =  [...this.filteredItems, ...res];
      const ids = updateRecords.map(o => o.sid)
      this.filteredItems = updateRecords.filter(({ sid }, index) => !ids.includes(sid, index + 1));
    })
}
 }
	onBack(){
	this.messageService.clear();
	const UsableFields = Object.keys(this.detailFormControls.getRawValue());
    const fields = Object.keys(this.backupData || {});
    const technicalFields = fields.filter(function (obj) { return UsableFields.indexOf(obj) == -1; });
     if (this.appUtilBaseService.isEqualIgnoreCase(this.backupData, this.detailFormControls.getRawValue(), technicalFields, true) || (fields.length <= 0 && ((Object.values(this.detailFormControls.getRawValue()))?.filter(Boolean))?.length <=0)) {		
     this.location.back();
	}else{
		this.confirmationService.confirm({
			message:'Do you want to discard all unsaved changes?',
			header:'Confirmation',
			icon:'pipi-info-circle',
			accept:()=>{
				this.backupData=JSON.parse(JSON.stringify(this.detailFormControls.getRawValue()));
				this.location.back();
			},
			reject:()=>{
			},
		});
	}
}
	waitForResponse() {
    setTimeout(() => {
      if (this.id && !environment.prototype) {
        if (!this.data?.workflowInfo) {
          this.waitForResponse();
        }
        else {
          this.getWorkflowConfig();
        }
      }
    }, 3000);
  }
	showMessage(config:any){
    this.messageService.clear();
    this.messageService.add(config);
}
	loadCaptionbarItems(){
    
}
	unSelect(event:any,field:string){
    this.selectedItems[field]?.forEach((item:any,index:number)=>{
        if(item.id === event.sid){
            this.selectedItems[field].splice(index,1);
        }
    })
    
  }
	loadActionbar(){
    
}
	updateAllowedActions() {
      for (const ele in this.formFieldConfig) {
        if (this.formFieldConfig[ele].allowViewing === 'no') {
          this.hiddenFields[this.formFieldConfig[ele].name] = true;
        }
        else if (this.formFieldConfig[ele].viewConditionally && this.formFieldConfig[ele].allowViewing === 'conditional') {
          this.restrictEditandView(this.formFieldConfig[ele].viewConditionally, 'view', this.formFieldConfig[ele].name)
        }
        if (this.formFieldConfig[ele].allowEditing === 'no') {
          this.detailFormControls.get(this.formFieldConfig[ele].name)?.disable({emitEvent: false});
        }
        else if (this.formFieldConfig[ele].editConditionally && this.formFieldConfig[ele].allowEditing === 'conditional') {
          this.restrictEditandView(this.formFieldConfig[ele].editConditionally, 'edit', this.formFieldConfig[ele].name)
        }
      }
  }
	restrictBasedonRoles(roles: any) {
    if (roles.includes('selected')) {
       if(this.currentUserData){
        const userDataKeys = Object.keys(this.currentUserData[0]);
        return roles.some((item: any) => userDataKeys.includes(item.toLowerCase()));
      }
      else{
        return false;
      }
    }
    else if (roles.includes('all'))
      return true;
    else
      return true;
  }
	onSelect(event: any, field: string, config: any) {
    let lookupFields: any[] = config?.lookupFields || [];
    let model = {
      id: event.sid,
      value: {}
    }
    if (lookupFields.length > 0) {
      model.value = lookupFields?.reduce((o: any, key: any) => ({ ...o, [key]: event[key] }), {});
    }
    else {
      model.value = event;
    }
    if (!this.selectedItems?.hasOwnProperty(field)) {
      this.selectedItems[field] = [];
    }
    if (config?.multiple === true) {
      this.selectedItems[field]?.push(model);
    }
    else {
      this.selectedItems[field][0] = model;
    }
  }
	restrictEditandView(ele:any,action:string,fieldName:string){
    const conResult = this.appUtilBaseService.evaluvateCondition(ele.query.rules, ele.query.condition,this.detailFormControls.getRawValue());
     if(action =='view'){
      if (!(this.restrictBasedonRoles(ele.roles) && conResult)) {
       this.hiddenFields[fieldName] = true;
      }
      else{
        this.hiddenFields[fieldName] = false;
      }
     }

     else if(action =='edit'){
      if (!(this.restrictBasedonRoles(ele.roles) && conResult)) {
         this.detailFormControls.get(fieldName)?.disable({emitEvent: false});
      }
      else{
        this.detailFormControls.get(fieldName)?.enable({emitEvent: false});
      }
     }
   }
	formatFormDataBeforeSave() {
    let data = this.detailFormControls.getRawValue();
    if (this.detailFormConfig?.children) {
      this.detailFormConfig.children.map((ele: any) => {
        if (ele.fieldType == 'Date' && data[ele.name]) {
          const formattedDate = new Date(data[ele.name]).getTime()
          data[ele.name] = formattedDate;
        }
    else if(ele.fieldType ==='Boolean' ){
          if(data[ele.name] === null || data[ele.name]=== undefined || data[ele.name]===''){
            data[ele.name] = false;
          }
        }
      })
    }
    if (Object.keys(this.selectedItems).length > 0) {
      const keys = Object.keys(this.selectedItems);
      keys?.forEach((k) => {
        if (data.hasOwnProperty(k)) {
          data[k] = this.selectedItems[k];
        }
      })
      this.detailFormConfig.children.map((ele: any) => {
        if (ele.uiType == 'autosuggest' && data[ele.name] && !ele.multipleValues) {
          data[ele.name] = (Array.isArray(data[ele.name]) && data[ele.name].length > 0) ? data[ele.name][0] : data[ele.name]
        }
      })
    }
    return data;
  }
	onSave(isToastNotNeeded?:boolean){
         let data = this.formatFormDataBeforeSave();
        const finalArr:string[] = [];
        this.formErrors = {};
        this.inValidFields = {};
        if(this.appUtilBaseService.isEqualIgnoreCase(data, this.backupData,[], true)){
            this.showMessage({severity:'info', summary:'', detail:'No changes available to save'});
            return;
        }
        if(!this.appUtilBaseService.isValidForm(this.detailFormControls, this.formErrors, finalArr, this.inValidFields)){
            if(finalArr.length){
                this.showMessage({severity:'error', summary:'Error', detail: this.appUtilBaseService.createNotificationList(finalArr), sticky : true});
            }
        }else{
            const method = this.id ? 'update' : 'create';
            data = {...this.backupData,...data}; //data.sid = this.id;
            if(this.pid){
              data.pid = this.pid;
            }
			const requestedObj = new Proxy(data, {
			get: (obj, prop) => obj[prop] === ""|| (Array.isArray(obj[prop]) && obj[prop].length == 0) ? null : obj[prop],
			});
            this.messageService.clear();
            this.servicesService[method](requestedObj).subscribe((res:ServicesBase) => {
            this.backupData = {...data};
            this.isSaveResponseReceived = true;
            this.isFormValueChanged = false;
	        this.id = res.sid;
	        if (method === 'create') {
	          this.router.navigate(
	            [],
	            {
	              queryParams: {id:this.id},
	              relativeTo: this.activatedRoute,
	              queryParamsHandling: 'merge',
	            }).then(()=>{this.onInit()});
	          this.getId();
	        }       
             if(!isToastNotNeeded){
            this.showMessage({severity:'success', summary:'', detail:'Record Saved Successfully'});
          }
          }, (err: any) => { this.isSaveResponseReceived = true; });
        } 
        
    }
	getDateTimeFields() {
    return ['modifiedDate','createdDate'];
  }

  getDateFields() {
    return [];
  }

  /**
  * Ignore fields from displaying in the changelog details
  */
  getIgnoreFields() {
    return ['sid', 'pid'];
  }

 onChangelog() {
    const initialState: ModalOptions = {
      initialState: {
        class: 'modal-xl',
        changelogConfig: {
          dateFields: this.getDateFields(),
          dateTimeFields: this.getDateTimeFields(),
          ignoreFields: this.getIgnoreFields(),
          filters: [{
            label: 'BASIC_DETAIL'
          }],
          entityId : this.data.sid,
          entityName : 'Services',
          fieldName : null,
          fromModifiedDate : null,
          useModifiedDate: true,
          translations: {}
        },
        keyboard: true
        
      }
    };
    this.bsModalRef = this.bsModalService.show(ChangeLogsComponent, Object.assign(initialState, { class: 'modal-xl modal-changelog' }));
    this.bsModalRef.content.closeBtnName = 'Close';
  }
	workflowActionBarAction(btn: any) {
    const methodName: any = (`onwf` + btn.wfAction.charAt(0).toUpperCase() + btn.wfAction.slice(1));
    let action: Exclude<keyof ServicesDetailBaseComponent, ' '> = methodName;
    const finalArr: string[] = [];
    this.formErrors = {};
    this.inValidFields = {};
    this.mandatoryFields = this.formSecurityConfig?.mandatoryfields?.hasOwnProperty(btn.wfAction) ? this.formSecurityConfig.mandatoryfields[btn.wfAction] : {}
    if (Object.keys(this.mandatoryFields).length > 0)
      this.addValidations(this.mandatoryFields);

    if (!this.appUtilBaseService.isValidForm(this.detailFormControls, this.formErrors, finalArr, this.inValidFields)) {
      if (finalArr.length) {
        this.showMessage({ severity: 'error', summary: 'Error', detail: this.appUtilBaseService.createNotificationList(finalArr), sticky: true });
        if (Object.keys(this.mandatoryFields).length > 0)
          this.clearValidations(this.mandatoryFields);
      }
    }
  else {
      if (typeof this[action] === "function") {
        this.confirmationReference= this.dialogService.open(ConfirmationPopupComponent, {
          header: 'Confirmation',
          width: '30%',
          contentStyle: { "max-height": "500px", "overflow": "auto" },
          styleClass: "confirm-popup-container",
          data: {
            confirmationMsg: `Do you want to ${btn.wfAction} the record ?`,
            isRequired: this.formSecurityConfig.comments?.hasOwnProperty(btn.wfAction) && this.formSecurityConfig.comments[btn.wfAction],
            action:btn.label
          }
        });

        this.confirmationReference.onClose.subscribe((result: any) => {
          if (Object.keys(this.mandatoryFields).length > 0)
            this.clearValidations(this.mandatoryFields);
          if (result?.accepted) {
            this.comments = result.comments;
            if (this.isFormValueChanged) {
              this.isSaveResponseReceived = false;
              const isToastNotNeeded = true;
              this.onSave(isToastNotNeeded);
              let checkResponse = setInterval(() => {
                if (this.isSaveResponseReceived) {
                  this[action]();
                  clearInterval(checkResponse);
                }
              }, 1000);
            }
            else {
              this[action]();
            }
          }
        });
      }
    }
  }
addValidations(mandatoryFields:[]){
    mandatoryFields.forEach((controlName:string)=>{
      if(this.detailFormControls.controls[controlName].hasValidator(Validators.required)){
        if(!(this.validatorsRetained.hasOwnProperty(controlName))){
          this.validatorsRetained[controlName]= {}
        }
        this.validatorsRetained[controlName]['requiredValidator'] = true;
      }
      else{
        this.detailFormControls.controls[controlName].addValidators([Validators.required]);
        this.detailFormControls.controls[controlName].updateValueAndValidity();
      }
     })
  }
	autoSuggestSearchrespLeader(event?: any, col?: any,url?:any) {
if(!this.isAutoSuggestCallFired){
      this.isAutoSuggestCallFired = true;
    let apiObj = Object.assign({}, ApplicationUserApiConstants.autoSuggestService)
    apiObj.url = `${url ||apiObj.url}?query=${event.query}&pgNo=${this.autoSuggestPageNo}&pgLen=${BaseAppConstants.defaultPageSize}`;
     this.baseService.get(apiObj).subscribe((res: any) => {
      this.isAutoSuggestCallFired = false;
      let updateRecords =  [...this.filteredItems, ...res];
      const ids = updateRecords.map(o => o.sid)
      this.filteredItems = updateRecords.filter(({ sid }, index) => !ids.includes(sid, index + 1));
    })
}
 }
	onCancel(){
       this.messageService.clear();
       if (this.appUtilBaseService.isEqualIgnoreCase(this.backupData, this.detailFormControls.getRawValue(), [], true)) {
            this.showMessage({severity:'info', summary:'', detail:'No changes available to cancel'});
        }else {
            this.confirmationService.confirm({
                message: 'Do you want to discard all unsaved changes?',
                header: 'Confirmation',
                icon: 'pi pi-info-circle',
                accept: () => {
                    this.detailFormControls.patchValue(this.backupData);
                },
                reject: () => {
                },
            });
        }
        
    }
	initForm(){
    this.formFieldConfig= this.appUtilBaseService.getControlsFromFormConfig(this.detailFormConfig)
    this.appUtilBaseService.configureValidators(this.detailFormControls, this.formFieldConfig);
this.wizardItems = this.appUtilBaseService.getWizardItemFromFormConfig(this.detailFormConfig, this);
}
	configureFormOnWorkflow() {
    const actions: any = this.workflowActionBarConfig?.children;
const workflowInformation ={
      actors:this.data?.workflowInfo && this.data?.workflowInfo[this.workflowType]?.userTypes||[],
      step:this.data?.workflowInfo && this.data?.workflowInfo[this.workflowType]?.step||''
    }
    this.formSecurityConfig = this.appUtilBaseService.getFormSecurityConfigFromSecurityJSON(this.securityJson, this.detailFormControls, actions, workflowInformation);

    this.hiddenFields = this.formSecurityConfig.hide;

    for (const control in this.detailFormControls.getRawValue()) {
      if (this.formSecurityConfig.disableonlyfields.indexOf(control) > -1 && !(this.formSecurityConfig.enableonlyfields.indexOf(control) > -1)) {
        this.detailFormControls.controls[control].disable({emitEvent: false});
      }
if (this.formSecurityConfig.enableonlyfields.indexOf(control) > -1) {
      this.detailFormControls.controls[control].enable({emitEvent: false});
    }
      if(this.formSecurityConfig.hide.indexOf(control)> -1){
        this.hiddenFields[control] = true;
      }
    }
    this.workflowActions = {
      disableActions: [...this.formSecurityConfig.disableonlyactions],
      enableActions: [...this.formSecurityConfig.enableonlyactions],
      hideActions: [...this.formSecurityConfig.hideactions]
    }
  }

    onInit() {
		
		this.waitForResponse();
if (this.workFlowInitialState && this.workFlowEnabled && this.workFlowField) {
      this.detailFormConfig?.children?.forEach((ele: any) => {
        if (ele?.field === this.workFlowField && ele?.multipleValues) {
          this.detailFormControls.get(this.workFlowField)?.patchValue([this.workFlowInitialState]);
          this.backupData[this.workFlowField] = [this.workFlowInitialState];
        }
        else {
          if (ele?.field === this.workFlowField && !ele?.multipleValues) {
            this.detailFormControls.get(this.workFlowField)?.patchValue(this.workFlowInitialState);
            this.backupData[this.workFlowField] = this.workFlowInitialState;
          }
        }
      })
     if (!environment.prototype && !this.id) {
        this.configureFormOnWorkflow();
      }
    }
		 this.detailFormControls.enable({ emitEvent: false });
 this.hiddenFields = {};
this.getId();   
this.initForm();
this.getData();
this.updateAllowedActions();
this.formValueChanges();

    }
	
     onDestroy() {
		
    }
     onAfterViewInit() {
		
    }

}
