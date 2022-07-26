import { StatusService } from '../status.service';
import { StatusBase} from '../status.base.model';
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { allowedValuesValidator } from "@baseapp/widgets/validators/allowedValuesValidator";
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Filter } from '@baseapp/vs-models/filter.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ChangeLogsComponent } from '@baseapp/widgets/change-logs/change-logs.component'
import { fromEvent } from 'rxjs';
import { environment } from '@env/environment';
import { AppUtilBaseService } from '@baseapp/app-util.base.service';
import {  Renderer2} from '@angular/core';
import { map } from 'rxjs';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import {  ElementRef } from '@angular/core';
import {  ViewChild} from '@angular/core';
import { BaseAppConstants } from '@baseapp/app-constants.base';

@Directive(
{
	providers:[MessageService, ConfirmationService, DialogService]
}
)
export class StatusListBaseComponent{
	
	
	
showAdvancedSearch: boolean = false;
tableSearchFieldConfig:any = {};
@ViewChild('toggleButton')
  toggleButton!: ElementRef;
  @ViewChild('menu')
  menu!: ElementRef;

	quickFilter: any;
hiddenFields:any = {};
quickFilterFieldConfig:any={}
	selectedValues!: [];
  filter: Filter = {
    globalSearch: '',
    advancedSearch: {},
    sortField: null,
    sortOrder: null,
    quickFilter: {}
  };
params: any;
isMobile: boolean = BaseAppConstants.isMobile;

  gridData: StatusBase[] = [];
  totalRecords: number = 0;
  subscriptions: Subscription[] = [];
  formattableElements:any = ['date','datetime','number','currency','string'];
 multiSortMeta:any =[];
 selectedColumns:any =[];
 readonly GRID_ELEMENTS: any = {
    AUTOCOMPLETE: 'autocomplete',
    DATE: 'date',
    DATETIME: 'datetime',
    DROPDOWN: 'dropdown',
    NUMBER: 'number',
    STRING: 'string',
    ICON: 'icon',
    IMAGE: 'image',
    BOOLEAN: 'Boolean',
    TAG: 'tag',
    CURRENCY: 'currency',
    LINK: 'link'
  };

subHeader: any;
  autoSuggest: any;
  query: any;

rightFreezeColums:any;
total:number =0;
inValidFields:any = {};
selectedItems:any ={};
scrollTop:number =0;
isRowSelected: boolean = false;
	bsModalRef?: BsModalRef;
	isChildPage:boolean = true;
	@Input('parentId') parentId:any;
	@Output() onAction: EventEmitter<any> = new EventEmitter();

	
	leftActionBarConfig : any = {
  "children" : [ {
    "outline" : "true",
    "label" : "BUTTON_GROUP",
    "type" : "buttonGroup",
    "children" : [ {
      "visibility" : "show",
      "buttonStyle" : "curved",
      "currentNode" : "createRecordBtn",
      "label" : "NEW",
      "type" : "button",
      "pageName" : {
        "name" : "Status Detail",
        "sid" : "7250fdcf-9299-4c5f-9bd7-0257eb5e401f",
        "url" : "/status/statusdetail"
      },
      "outline" : "true",
      "buttonType" : "icon_on_left",
      "valueChange" : true,
      "showOn" : "both",
      "buttonEnabled" : "yes",
      "action" : "navigate_to_page"
    }, {
      "outline" : "true",
      "buttonType" : "icon_on_left",
      "visibility" : "show",
      "showOn" : "both",
      "buttonStyle" : "curved",
      "action" : "delete",
      "buttonEnabled" : "yes",
      "label" : "DELETE",
      "type" : "button"
    } ],
    "buttonStyle" : "curved"
  }, {
    "outline" : "true",
    "buttonType" : "icon_on_left",
    "visibility" : "show",
    "showOn" : "both",
    "buttonStyle" : "curved",
    "icon" : {
      "type" : "icon",
      "icon" : {
        "label" : "fas fa-sync",
        "value" : "fas fa-sync"
      },
      "iconColor" : "#000000",
      "iconSize" : "13px"
    },
    "action" : "refresh",
    "buttonEnabled" : "yes",
    "label" : "REFRESH",
    "type" : "button"
  } ]
}
	rightActionBarConfig : any = { }
	tableSearchConfig : any = {
  "children" : [ {
    "allowedValues" : {
      "values" : [ {
        "label" : "DRAFT",
        "value" : "DRAFT"
      }, {
        "label" : "SCHEDULER_ANALYSIS",
        "value" : "SCHEDULER_ANALYSIS"
      }, {
        "label" : "LEADER_VERIFICATION",
        "value" : "LEADER_VERIFICATION_"
      }, {
        "label" : "APPROVER_VALIDATION",
        "value" : "APPROVER_VALIDATION"
      }, {
        "label" : "COMPLETED",
        "value" : "COMPLETED"
      }, {
        "label" : "CANCELLED",
        "value" : "CANCELLED_"
      } ],
      "conditions" : {
        "conditionType" : "Auto",
        "conditions" : [ {
          "id" : "Draft",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "Status of the request",
              "operator" : "==",
              "value" : "Draft"
            } ]
          },
          "style" : {
            "background-color" : "#E544FF33",
            "color" : "#E544FF",
            "cell-background-color" : "#fff",
            "text-align" : "center",
            "showText" : true,
            "icon" : "",
            "iconColor" : "#333"
          }
        }, {
          "id" : "Scheduler Analysis",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "Status of the request",
              "operator" : "==",
              "value" : "Scheduler Analysis"
            } ]
          },
          "style" : {
            "background-color" : "#8220FF33",
            "color" : "#8220FF",
            "cell-background-color" : "#fff",
            "text-align" : "center",
            "showText" : true,
            "icon" : "",
            "iconColor" : "#333"
          }
        }, {
          "id" : "Leader Verification ",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "Status of the request",
              "operator" : "==",
              "value" : "Leader Verification "
            } ]
          },
          "style" : {
            "background-color" : "#1A73E833",
            "color" : "#1A73E8",
            "cell-background-color" : "#fff",
            "text-align" : "center",
            "showText" : true,
            "icon" : "",
            "iconColor" : "#333"
          }
        }, {
          "id" : "Approver Validation",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "Status of the request",
              "operator" : "==",
              "value" : "Approver Validation"
            } ]
          },
          "style" : {
            "background-color" : "#16D3FD33",
            "color" : "#16D3FD",
            "cell-background-color" : "#fff",
            "text-align" : "center",
            "showText" : true,
            "icon" : "",
            "iconColor" : "#333"
          }
        }, {
          "id" : "Completed",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "Status of the request",
              "operator" : "==",
              "value" : "Completed"
            } ]
          },
          "style" : {
            "background-color" : "#00D7A333",
            "color" : "#00D7A3",
            "cell-background-color" : "#fff",
            "text-align" : "center",
            "showText" : true,
            "icon" : "",
            "iconColor" : "#333"
          }
        }, {
          "id" : "Cancelled ",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "Status of the request",
              "operator" : "==",
              "value" : "Cancelled "
            } ]
          },
          "style" : {
            "background-color" : "#9CD3AB33",
            "color" : "#9CD3AB",
            "cell-background-color" : "#fff",
            "text-align" : "center",
            "showText" : true,
            "icon" : "",
            "iconColor" : "#333"
          }
        } ]
      }
    },
    "fieldName" : "statusOfTheRequest",
    "defaultVal" : "Draft",
    "data" : "Status of the request",
    "field" : "statusOfTheRequest",
    "name" : "statusOfTheRequest",
    "uiType" : "select",
    "label" : "Status of the request",
    "type" : "datamodelField",
    "fieldType" : "string"
  } ],
  "columns" : "2",
  "type" : "tableSearch",
  "showAdvancedSearch" : "true"
}
	quickFilterConfig : any = { }
	tableConfig : any = {
  "rightFreezeFromColumn" : "0",
  "currentNode" : "table",
  "type" : "grid",
  "showDetailPageAs" : "navigate_to_new_page",
  "showLabel" : "true",
  "children" : [ {
    "allowEditing" : "yes",
    "allowedValues" : {
      "values" : [ {
        "label" : "DRAFT",
        "value" : "DRAFT"
      }, {
        "label" : "SCHEDULER_ANALYSIS",
        "value" : "SCHEDULER_ANALYSIS"
      }, {
        "label" : "LEADER_VERIFICATION",
        "value" : "LEADER_VERIFICATION_"
      }, {
        "label" : "APPROVER_VALIDATION",
        "value" : "APPROVER_VALIDATION"
      }, {
        "label" : "COMPLETED",
        "value" : "COMPLETED"
      }, {
        "label" : "CANCELLED",
        "value" : "CANCELLED_"
      } ],
      "conditions" : {
        "conditionType" : "Auto",
        "conditions" : [ {
          "id" : "Draft",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "Status of the request",
              "operator" : "==",
              "value" : "Draft"
            } ]
          },
          "style" : {
            "background-color" : "#E544FF33",
            "color" : "#E544FF",
            "cell-background-color" : "#fff",
            "text-align" : "center",
            "showText" : true,
            "icon" : "",
            "iconColor" : "#333"
          }
        }, {
          "id" : "Scheduler Analysis",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "Status of the request",
              "operator" : "==",
              "value" : "Scheduler Analysis"
            } ]
          },
          "style" : {
            "background-color" : "#8220FF33",
            "color" : "#8220FF",
            "cell-background-color" : "#fff",
            "text-align" : "center",
            "showText" : true,
            "icon" : "",
            "iconColor" : "#333"
          }
        }, {
          "id" : "Leader Verification ",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "Status of the request",
              "operator" : "==",
              "value" : "Leader Verification "
            } ]
          },
          "style" : {
            "background-color" : "#1A73E833",
            "color" : "#1A73E8",
            "cell-background-color" : "#fff",
            "text-align" : "center",
            "showText" : true,
            "icon" : "",
            "iconColor" : "#333"
          }
        }, {
          "id" : "Approver Validation",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "Status of the request",
              "operator" : "==",
              "value" : "Approver Validation"
            } ]
          },
          "style" : {
            "background-color" : "#16D3FD33",
            "color" : "#16D3FD",
            "cell-background-color" : "#fff",
            "text-align" : "center",
            "showText" : true,
            "icon" : "",
            "iconColor" : "#333"
          }
        }, {
          "id" : "Completed",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "Status of the request",
              "operator" : "==",
              "value" : "Completed"
            } ]
          },
          "style" : {
            "background-color" : "#00D7A333",
            "color" : "#00D7A3",
            "cell-background-color" : "#fff",
            "text-align" : "center",
            "showText" : true,
            "icon" : "",
            "iconColor" : "#333"
          }
        }, {
          "id" : "Cancelled ",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "Status of the request",
              "operator" : "==",
              "value" : "Cancelled "
            } ]
          },
          "style" : {
            "background-color" : "#9CD3AB33",
            "color" : "#9CD3AB",
            "cell-background-color" : "#fff",
            "text-align" : "center",
            "showText" : true,
            "icon" : "",
            "iconColor" : "#333"
          }
        } ]
      }
    },
    "defaultField" : false,
    "fieldName" : "Status of the request",
    "data" : "Status of the request",
    "multipleValuesMax" : 10,
    "showOnMobile" : "true",
    "label" : "Status of the request",
    "type" : "datamodelField",
    "mandatory" : "yes",
    "searchable" : "full_word",
    "transientField" : false,
    "defaultVal" : "Draft",
    "field" : "statusOfTheRequest",
    "multipleValuesMin" : 0,
    "name" : "statusOfTheRequest",
    "sysGen" : false,
    "width" : "120px",
    "uiType" : "select",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "statusOfTheRequest"
  } ],
  "toggleColumns" : false,
  "valueChange" : true,
  "sorting" : "single_column",
  "resizeMode" : "expand_mode",
  "rowSpacing" : "medium",
  "rowHeight" : "medium",
  "recordSelection" : "multiple_records",
  "striped" : false,
  "inlineEditing" : false,
  "infiniteScroll" : "true",
  "viewAs" : "list",
  "hoverStyle" : "box",
  "tableStyle" : "style_1",
  "leftFreezeUptoColumn" : "0",
  "pageLimit" : "30",
  "rememberLastTableSettings" : false,
  "columnResize" : false,
  "showGridlines" : false,
  "detailPage" : {
    "name" : "Status Detail",
    "sid" : "7250fdcf-9299-4c5f-9bd7-0257eb5e401f",
    "url" : "/status/statusdetail"
  },
  "detailPageNavigation" : "click_of_the_row"
}
	pageViewTitle: string = 'STATUS_LIST';
	
		tableSearchControls : FormGroup = new FormGroup({
	statusOfTheRequest: new FormControl('',[]),
});

		quickFilterControls : FormGroup = new FormGroup({
});


	constructor(public statusService : StatusService, public appUtilBaseService: AppUtilBaseService, public translateService: TranslateService, public messageService: MessageService, public confirmationService: ConfirmationService, public dialogService: DialogService, public domSanitizer:DomSanitizer, public bsModalService: BsModalService, public activatedRoute: ActivatedRoute, public renderer2: Renderer2, public router: Router, ...args: any) {
    
 	 }

	
	onDelete() {
  if (this.selectedValues.length > 0) {
    let values: any = [];
	this.selectedValues.forEach((field: any) => {
		values.push(field.sid)
	});
	const requestedParams = {ids:values.toString()}
      this.confirmationService.confirm({
        message: 'Are you sure that you want to delete the selected records?',
        header: 'Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.statusService.delete(requestedParams).subscribe((res: any) => {
            this.showToastMessage({severity:'success', summary:'', detail:'Records deleted Succesfully'});
            this.onRefresh();

          });
        },
        reject: () => {
          //rejected
        },
      });
    }

  }
	clearFilterValues() {
  this.tableSearchControls.reset();
  this.filter.advancedSearch = {};
  this.onRefresh();
}
	conditionalFormatting(config: any, data: any) {
   if(config?.hasOwnProperty([data])){
    const query = config[data].query
    const initialCondition = true;
    const finalCondition = query.condition === 'and' ? '&&' : '||';
    const conditions: any[] = [];
    query.rules?.forEach((rule: any) => {
      conditions.push(this.appUtilBaseService.evaluate(data, rule.value, rule.operator));
    })
    let finalResult = conditions?.reduce((previousValue: any, currentValue: any) =>
      this.appUtilBaseService.evaluate(previousValue, currentValue, finalCondition), initialCondition);
    return finalResult;
   }
   else{
     return false;
   }
}
	clearAllFilters() {
  this.filter.globalSearch = '';
  this.clearFilterValues();
}
	setHeight() {
  setTimeout(() => {
    const el = (<HTMLInputElement>document.getElementById("table-container")).getBoundingClientRect();
    const top = el.top + 'px';
    (<HTMLInputElement>document.getElementById('table-container')).style.setProperty('height', 'calc(100vh - ' + top + ')');
  }, 100);
 
}
	loadGridData() {
  let gridSubscription: any;
  if (environment.prototype) {
  	gridSubscription = this.statusService.getProtoTypingData().subscribe((data: any) => {
  		this.gridData = [...this.gridData, ...data];
  	});
  } else {
	  	const searchData: any = {};
	  	const params = this.params;
	  	for (const key in this.filter.advancedSearch) {
	  		if (this.filter.advancedSearch.hasOwnProperty(key) && this.filter.advancedSearch[key]?.toString().length) {
				if (this.selectedItems.hasOwnProperty(key)) {
		            searchData[key] = this.tableSearchFieldConfig[key].multiple ? this.selectedItems[key] : this.selectedItems[key][0];
		        }
          else {
            searchData[key] = this.filter.advancedSearch[key];
          }
          }
	  	}
	  	if (this.filter.quickFilter) {
	  		for (const key in this.filter.quickFilter) {
	  			if (this.filter.quickFilter.hasOwnProperty(key) && this.filter.quickFilter[key]?.toString().length) {
            if (this.selectedItems.hasOwnProperty(key)) {
              searchData[key] = this.tableSearchFieldConfig[key].multiple ? this.selectedItems[key] : this.selectedItems[key][0];
            }
            else {
              searchData[key] = this.filter.quickFilter[key];
            }
	  			}
	  		}
	  	}
	  	if (this.filter.globalSearch)
	  		searchData['_global'] = this.filter.globalSearch;
	  		
	  	if(this.filter.sortField && this.filter.sortOrder){
          params.order = [{
            column: this.filter.sortField,
            dir: this.filter.sortOrder
          }]
        }
        else{
          params.order = null;
        }
	  	
	  	params.search = searchData;
	  	const value:any = "parentId";
	  	let property: Exclude<keyof StatusListBaseComponent, ''> = value;
	  	const method:any = "getChildTableData";
	  	let action: Exclude<keyof StatusListBaseComponent, ''> = method;
	  	if(this.isChildPage && this[property] && typeof this[action] === "function"){
	  		params.pid = this[property];
	  		this[action](params);
	  	}
	  	else{
		  	this.statusService.getDatatableData(params).subscribe((data: any) => {
				let updateRecords: StatusBase[] = [...this.gridData, ...data?.results];
				const ids = updateRecords.map(o => o.sid)
				this.gridData = updateRecords.filter(({ sid }, index) => !ids.includes(sid, index + 1))
				this.total = data?.filtered ? data?.filtered : 0;
			});
		}
	}
}
	// closeAdvancedSearchPopup() {
  //   this.renderer2.listen('window', 'click', (e: Event) => {
  //     let clickedInside = this.menu?.nativeElement.contains(e.target);
  //     if(e.target !== this.toggleButton?.nativeElement&& !clickedInside &&this.showAdvancedSearch){
  //       this.showAdvancedSearch = false;
  //     }
  //   );
  // }
	getSelectedObject(field:string,options:any){
      const selectedObj = (options.filter((item: { label: any}) => item.label.includes(field)));
      return selectedObj[0];
  }
	getSubHeader() {
this.subHeader = this.tableConfig.groupOnColumn?.name?.split('.');
}
	onUpdate(id: any) {
	if (this.tableConfig.detailPage?.url) {
      const value: any = "parentId";
       let property: Exclude<keyof StatusListBaseComponent, ''> = value;
       const methodName: any = "onUpdateChild";
       let action: Exclude<keyof StatusListBaseComponent, ''> = methodName;
       if (this.isChildPage && this[property]) {
	       if (typeof this[action] === "function") {
	        	this[action](id);
	         }
       }
       else {
       	this.router.navigateByUrl(this.tableConfig.detailPage.url + '?id=' + id)
       }
    }
}
	onFormatMultipleValues(col: any, data: any): any {
    const arr: any = []
    const displayField = col.displayField ? col.displayField : '';
  if (col.uiType == 'autosuggest' && Array.isArray(data)) {
      data?.forEach((k: any) => {
        arr.push(k.value[displayField]);
      })
    }
    else if (Array.isArray(data)) {
      data.forEach(function (e: any) {
        if (displayField)
          arr.push(e[displayField])
        else
          arr.push(data);
      })
    }
    else if (typeof data === 'object') {
      if (displayField) {
        arr.push(data[displayField]);
      }
    }
    else {
      arr.push(data);
    }
    return (arr.toString());
  }
	attachInfiniteScroll() {
const tracker = (<HTMLInputElement>document.getElementsByClassName('p-datatable-wrapper')[0])
let windowYOffsetObservable = fromEvent(tracker, 'scroll').pipe(map(() => {
  return Math.round(tracker.scrollTop);
}));

const scrollSubscription = windowYOffsetObservable.subscribe((scrollPos: number) => {
  if(this.scrollTop != scrollPos){
        this.scrollTop = scrollPos;
    if ((tracker.offsetHeight + scrollPos >= tracker.scrollHeight)) {
      this.params.start = this.total;
     this.loadGridData();
   }
  }
});
this.subscriptions.push(scrollSubscription);
}
	filterSearch() {
    this.quickFilterControls.valueChanges.subscribe((value) => {
      let dateRangeNotChoosen: boolean = false;
      for (let control of this.quickFilterConfig.children) {
        if (control.fieldType === 'Date') {
          if (value[control.field][0] && !value[control.field][1]) {
            dateRangeNotChoosen = true;
            break;
          }
        }
      }
      if (!dateRangeNotChoosen) {
        this.filter.quickFilter = value;
       this.onRefresh();
      }
    });
  }
	initSearchForm(){
  this.tableSearchFieldConfig= this.appUtilBaseService.getControlsFromFormConfig(this.tableSearchConfig)
}
	showToastMessage(config: object) {
this.messageService.add(config);
}
	onKeydown(event: any) {
  if (event.which === 13 || event.keyCode === 13) {
    // this.filter.globalSearch = this.globalSearch
   this.onRefresh();
  }
}
	onRowSelect(event:any){
    if(this.selectedValues.length > 0){
      this.isRowSelected = true;
    }
    else if(this.selectedValues.length <= 0){
      this.isRowSelected = false;
    }
  }
	sort(e: any, field: string) {
this.filter.sortField = field;
this.filter.sortOrder = (e.currentTarget.childNodes[1].childNodes[0].classList.contains('pi-sort-amount-up-alt')) ? 'desc' : 'asc';
this.onRefresh();
}
	onRefresh(){
this.gridData = [];
this.params.start =0;
this.loadGridData();
}
	toggleAdvancedSearch() {
  this.showAdvancedSearch = !this.showAdvancedSearch;
}
	getChildTableData(params:any){
	this.statusService.getDatatableDataByPId(params).subscribe((data: any) => {
		let updateRecords: StatusBase[] = [...this.gridData, ...data?.results];
		const ids = updateRecords.map(o => o.sid)
		this.gridData = updateRecords.filter(({ sid }, index) => !ids.includes(sid, index + 1))
		this.total = data?.filtered ? data?.filtered : 0;
	});
}
onUpdateChild(id: any) {
	this.router.navigateByUrl(this.tableConfig.detailPage.url + '?pid=' + this.parentId + '&id=' + id);
}
 onNewChild() {
 	this.router.navigateByUrl('/status/statusdetail' + '?pid=' + this.parentId)
 }
	initFilterForm(){
    this.quickFilterFieldConfig= this.appUtilBaseService.getControlsFromFormConfig(this.quickFilterConfig);
    this.filterSearch();
}
	onFormatColumns(col: any, datum: any) {
    const type = col.uiType;
    let data = datum[col.name];
    let formattedValue: any;
    switch (type) {
      case 'date':
        formattedValue = this.appUtilBaseService.formatDate(data, col.format ? col.format : null);
        break;

      case 'datetime':
        formattedValue = this.appUtilBaseService.formatDateTime(data, col.format ? col.format : null)
        break;

      case 'currency':
        const ccode = col.currencyCode ? col.currencyCode : null;
        const cDigits = col.currencyDigits ? col.currencyDigits : null;
        formattedValue = this.appUtilBaseService.formatCurrency(data, ccode, cDigits);

        break;

      case 'number':
        formattedValue = this.appUtilBaseService.formatNumber(data, col.format ? col.format : null);
        break;
        
      case 'autosuggest':
        formattedValue = (environment.prototype)? data : (data?.value)? (data?.value[col.displayField]):data;
        break;

      default:
        formattedValue = data;
    }
    return (formattedValue);
  }
	advancedSearch() {
  this.filter.advancedSearch = this.tableSearchControls.value;
 this.onRefresh();
  this.toggleAdvancedSearch();
}
	actionBarAction(btn: any) {
    const methodName: any = (`on` + btn.action.charAt(0).toUpperCase() + btn.action.slice(1));
    let action: Exclude<keyof StatusListBaseComponent, ' '> = methodName;
    if (btn.action === 'navigate_to_page' && btn.pageName?.url) {
      this.router.navigateByUrl(btn.pageName.url);
    }
    else if (typeof this[action] === "function") {
      this[action]();
    }
  }
	onNew() {
	const value: any = "parentId";
	let property: Exclude<keyof StatusListBaseComponent, ''> = value;
	if (this.isChildPage && this[property]) {
		const methodName: any = "onNewChild";
		let action: Exclude<keyof StatusListBaseComponent, ''> = methodName;
		if (typeof this[action] == "function") {
			this[action]();
		}
	}
	else {
		this.router.navigate(['../statusdetail'], { relativeTo: this.activatedRoute});
	}
}

    onInit() {
		
		this.initSearchForm();

		this.initFilterForm();
		 this.tableConfig.children = this.appUtilBaseService.formatTableConfig(this.tableConfig.children);
this.params = this.appUtilBaseService.getTableRequestParams(this.tableConfig);
 this.loadGridData();
this.selectedColumns = this.tableConfig.children;
 this.getSubHeader();
this.rightFreezeColums = (this.tableConfig.children.length - this.tableConfig.rightFreezeFromColumn);

    }
	
     onDestroy() {
		
		    this.subscriptions.forEach((subs: { unsubscribe: () => void; }) => subs.unsubscribe());
  
    }
     onAfterViewInit() {
		
		
 this.setHeight();
  this.attachInfiniteScroll();

    }

}
