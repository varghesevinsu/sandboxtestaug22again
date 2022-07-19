import { RequestService } from '../request.service';
import { RequestBase} from '../request.base.model';
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

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
	providers:[MessageService, ConfirmationService]
}
)
export class RequestListBaseComponent{
	
	
	
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

  gridData: RequestBase[] = [];
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
	isChildPage:boolean = false;

	
	leftActionBarConfig : any = {
  "children" : [ {
    "outline" : "true",
    "children" : [ {
      "visibility" : "show",
      "buttonStyle" : "curved",
      "currentNode" : "createRecordBtn",
      "label" : "NEW",
      "type" : "button",
      "pageName" : {
        "name" : "Request Detail",
        "sid" : "ce9c1e5e-ea53-4a53-bc98-dab6e578d248",
        "url" : "/request/requestdetail"
      },
      "outline" : "true",
      "buttonType" : "icon_on_left",
      "valueChange" : true,
      "showOn" : "both",
      "buttonEnabled" : "yes",
      "action" : "navigate_to_page"
    } ],
    "valueChange" : true,
    "buttonStyle" : "curved",
    "currentNode" : "_3",
    "label" : "BUTTON_GROUP",
    "type" : "buttonGroup"
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
  }, {
    "outline" : true,
    "label" : "BUTTON_GROUP",
    "type" : "buttonGroup",
    "children" : [ {
      "outline" : true,
      "buttonType" : "icon_on_left",
      "visibility" : "show",
      "showOn" : "both",
      "buttonStyle" : "curved",
      "buttonEnabled" : "yes",
      "action" : "export",
      "label" : "EXPORT",
      "type" : "button"
    }, {
      "outline" : true,
      "buttonType" : "icon_on_left",
      "visibility" : "show",
      "showOn" : "both",
      "buttonStyle" : "curved",
      "buttonEnabled" : "yes",
      "action" : "exportall",
      "label" : "EXPORT_ALL",
      "type" : "button"
    } ],
    "buttonStyle" : "curved"
  } ]
}
	rightActionBarConfig : any = { }
	tableSearchConfig : any = {
  "children" : [ {
    "allowedValues" : { },
    "fieldName" : "requesterOrgaloc",
    "data" : "  Requester Orgaloc ",
    "field" : "requesterOrgaloc",
    "name" : "requesterOrgaloc",
    "uiType" : "text",
    "label" : "  Requester Orgaloc ",
    "type" : "datamodelField",
    "fieldType" : "string"
  }, {
    "allowedValues" : { },
    "fieldName" : "requestName",
    "data" : " Request Name",
    "field" : "requestName",
    "name" : "requestName",
    "uiType" : "text",
    "label" : " Request Name",
    "type" : "datamodelField",
    "fieldType" : "string"
  }, {
    "allowedValues" : { },
    "fieldName" : "createdDate",
    "data" : "Created Date",
    "field" : "createdDate",
    "name" : "createdDate",
    "uiType" : "datetime",
    "label" : "Created Date",
    "type" : "searchField",
    "fieldType" : "Date"
  }, {
    "allowedValues" : { },
    "fieldName" : "requestCode",
    "data" : "Request Code",
    "field" : "requestCode",
    "name" : "requestCode",
    "uiType" : "number",
    "label" : "Request Code",
    "type" : "searchField",
    "fieldType" : "number"
  }, {
    "multipleValues" : false,
    "allowedValues" : {
      "values" : [ {
        "label" : "EMC",
        "value" : "EMC"
      }, {
        "label" : "ECAD",
        "value" : "ECAD"
      }, {
        "label" : "SERVICE3",
        "value" : "SERVICE3"
      }, {
        "label" : "SERVICE4",
        "value" : "SERVICE4"
      } ],
      "conditions" : {
        "conditionType" : "Auto",
        "conditions" : [ ]
      }
    },
    "fieldName" : "serviceType",
    "data" : " Service type",
    "field" : "serviceType",
    "name" : "serviceType",
    "uiType" : "select",
    "label" : " Service type",
    "type" : "searchField",
    "fieldType" : "string"
  }, {
    "multipleValues" : false,
    "allowedValues" : {
      "values" : [ {
        "label" : "DRAFT",
        "value" : "DRAFT"
      }, {
        "label" : "SCHEDULER_ANALYSIS",
        "value" : "SCHEDULER_ANALYSIS"
      }, {
        "label" : "LEADER_VERIFICATION",
        "value" : "LEADER_VERIFICATION"
      }, {
        "label" : "APPROVER_VALIDATION",
        "value" : "APPROVER_VALIDATION"
      }, {
        "label" : "COMPLETED",
        "value" : "COMPLETED"
      }, {
        "label" : "CANCELLED",
        "value" : "CANCELLED"
      }, {
        "label" : "CLOSED",
        "value" : "CLOSED"
      } ],
      "conditions" : {
        "conditionType" : "Auto",
        "conditions" : [ {
          "id" : "Draft",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "  Status of the request",
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
              "field" : "  Status of the request",
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
          "id" : "Approver Validation",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "  Status of the request",
              "operator" : "==",
              "value" : "Approver Validation"
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
          "id" : "Completed",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "  Status of the request",
              "operator" : "==",
              "value" : "Completed"
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
          "id" : "Leader Verification",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "  Status of the request",
              "operator" : "==",
              "value" : "Leader Verification"
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
          "id" : "Closed",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "  Status of the request",
              "operator" : "==",
              "value" : "Closed"
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
    "data" : "  Status of the request",
    "field" : "statusOfTheRequest",
    "name" : "statusOfTheRequest",
    "uiType" : "select",
    "label" : "  Status of the request",
    "type" : "searchField",
    "fieldType" : "string"
  } ],
  "columns" : "2",
  "valueChange" : true,
  "currentNode" : "tableSearch",
  "type" : "tableSearch",
  "showAdvancedSearch" : "true"
}
	quickFilterConfig : any = {
  "children" : [ {
    "multipleValues" : false,
    "fieldName" : "statusOfTheRequest",
    "data" : "  Status of the request",
    "currentNode" : "24d16c26-c13b-4740-968f-fdfec98b3e8f",
    "showOnMobile" : "true",
    "type" : "filterField",
    "outline" : true,
    "buttonType" : "icon_on_left",
    "defaultVal" : "Draft",
    "valueChange" : true,
    "showOn" : "both",
    "buttonEnabled" : "yes",
    "allowedValues" : {
      "values" : [ {
        "label" : "DRAFT",
        "value" : "DRAFT"
      }, {
        "label" : "SCHEDULER_ANALYSIS",
        "value" : "SCHEDULER_ANALYSIS"
      }, {
        "label" : "LEADER_VERIFICATION",
        "value" : "LEADER_VERIFICATION"
      }, {
        "label" : "APPROVER_VALIDATION",
        "value" : "APPROVER_VALIDATION"
      }, {
        "label" : "COMPLETED",
        "value" : "COMPLETED"
      }, {
        "label" : "CANCELLED",
        "value" : "CANCELLED"
      }, {
        "label" : "CLOSED",
        "value" : "CLOSED"
      } ],
      "conditions" : {
        "conditionType" : "Auto",
        "conditions" : [ {
          "id" : "Draft",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "  Status of the request",
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
              "field" : "  Status of the request",
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
          "id" : "Approver Validation",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "  Status of the request",
              "operator" : "==",
              "value" : "Approver Validation"
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
          "id" : "Completed",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "  Status of the request",
              "operator" : "==",
              "value" : "Completed"
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
          "id" : "Leader Verification",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "  Status of the request",
              "operator" : "==",
              "value" : "Leader Verification"
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
          "id" : "Closed",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "  Status of the request",
              "operator" : "==",
              "value" : "Closed"
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
    "visibility" : "show",
    "buttonStyle" : "curved",
    "label" : "  Status of the request",
    "field" : "statusOfTheRequest",
    "name" : "statusOfTheRequest",
    "width" : "120px",
    "uiType" : "select",
    "fieldType" : "string"
  } ]
}
	tableConfig : any = {
  "rightFreezeFromColumn" : "0",
  "currentNode" : "table",
  "type" : "grid",
  "showDetailPageAs" : "navigate_to_new_page",
  "showLabel" : true,
  "alignColumns" : {
    "css" : ".container{ display:grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(1, 1fr); grid-gap: 0px;} #e75a6658-cb28-4e0c-a96c-c6bd279b55ac{ grid-row:1/2; grid-column:2/3;}#9a945dff-a8e3-44c0-bfeb-e0a7f3a60aff{ grid-row:1/2; grid-column:1/2;}#fb2566d3-97d8-4497-a178-0866cd3f5593{ grid-row:1/2; grid-column:3/4;}",
    "raw" : [ {
      "cols" : 1,
      "rows" : 1,
      "y" : 0,
      "x" : 1,
      "minItemRows" : 1,
      "minItemCols" : 1,
      "id" : "e75a6658-cb28-4e0c-a96c-c6bd279b55ac",
      "label" : " Request Name"
    }, {
      "cols" : 1,
      "rows" : 1,
      "y" : 0,
      "x" : 0,
      "minItemRows" : 1,
      "minItemCols" : 1,
      "id" : "9a945dff-a8e3-44c0-bfeb-e0a7f3a60aff",
      "label" : "Request Code"
    }, {
      "cols" : 1,
      "rows" : 1,
      "y" : 0,
      "x" : 2,
      "minItemRows" : 1,
      "minItemCols" : 1,
      "id" : "fb2566d3-97d8-4497-a178-0866cd3f5593",
      "label" : " Requester"
    } ]
  },
  "children" : [ {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : " Request Name",
    "data" : " Request Name",
    "currentNode" : " Request Name",
    "showOnMobile" : "true",
    "label" : " Request Name",
    "type" : "datamodelField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "requestName",
    "valueChange" : true,
    "name" : "requestName",
    "editConditionally" : {
      "qbName" : "Requester_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ "selected", "Requester ", "Admin" ]
    },
    "sysGen" : false,
    "width" : "120px",
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "requestName"
  }, {
    "allowEditing" : "no",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "Request Code",
    "data" : "Request Code",
    "currentNode" : "9a945dff-a8e3-44c0-bfeb-e0a7f3a60aff",
    "showOnMobile" : "true",
    "label" : "Request Code",
    "type" : "gridColumn",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "requestCode",
    "valueChange" : true,
    "name" : "requestCode",
    "sysGen" : false,
    "width" : "120px",
    "uiType" : "number",
    "fieldType" : "number",
    "allowViewing" : "yes",
    "fieldId" : "requestCode"
  }, {
    "allowEditing" : "no",
    "multipleValues" : false,
    "allowedValues" : {
      "values" : [ {
        "label" : "DRAFT",
        "value" : "DRAFT"
      }, {
        "label" : "SCHEDULER_ANALYSIS",
        "value" : "SCHEDULER_ANALYSIS"
      }, {
        "label" : "LEADER_VERIFICATION",
        "value" : "LEADER_VERIFICATION"
      }, {
        "label" : "APPROVER_VALIDATION",
        "value" : "APPROVER_VALIDATION"
      }, {
        "label" : "COMPLETED",
        "value" : "COMPLETED"
      }, {
        "label" : "CANCELLED",
        "value" : "CANCELLED"
      }, {
        "label" : "CLOSED",
        "value" : "CLOSED"
      } ],
      "conditions" : {
        "conditionType" : "Auto",
        "conditions" : [ {
          "id" : "Draft",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "  Status of the request",
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
              "field" : "  Status of the request",
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
          "id" : "Approver Validation",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "  Status of the request",
              "operator" : "==",
              "value" : "Approver Validation"
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
          "id" : "Completed",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "  Status of the request",
              "operator" : "==",
              "value" : "Completed"
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
          "id" : "Leader Verification",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "  Status of the request",
              "operator" : "==",
              "value" : "Leader Verification"
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
          "id" : "Closed",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "  Status of the request",
              "operator" : "==",
              "value" : "Closed"
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
    "fieldName" : "  Status of the request",
    "data" : "  Status of the request",
    "multipleValuesMax" : 10,
    "label" : "  Status of the request",
    "type" : "gridColumn",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "defaultVal" : "Draft",
    "field" : "statusOfTheRequest",
    "multipleValuesMin" : 0,
    "name" : "statusOfTheRequest",
    "sysGen" : false,
    "uiType" : "select",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "statusOfTheRequest"
  }, {
    "allowedValues" : { },
    "defaultField" : true,
    "fieldName" : "Created Date",
    "data" : "Created Date",
    "label" : "Created Date",
    "type" : "gridColumn",
    "field" : "createdDate",
    "name" : "createdDate",
    "sysGen" : true,
    "uiType" : "datetime",
    "fieldType" : "Date",
    "fieldId" : "createdDate"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : " Requester",
    "data" : " Requester",
    "showOnMobile" : "true",
    "label" : " Requester",
    "type" : "datamodelField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "requester",
    "name" : "requester",
    "editConditionally" : {
      "qbName" : "Requester_rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ "selected", "Admin", "Requester " ]
    },
    "sysGen" : false,
    "width" : "120px",
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "requester"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "Quote No",
    "data" : "Quote No",
    "label" : "Quote No",
    "type" : "gridColumn",
    "mandatory" : "no",
    "field" : "quoteNo",
    "name" : "quoteNo",
    "editConditionally" : {
      "qbName" : "Scheduler_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ "selected", "Scheduler ", "Admin" ]
    },
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "quoteNo"
  }, {
    "allowEditing" : "yes",
    "multipleValues" : false,
    "allowedValues" : {
      "values" : [ {
        "label" : "EMC",
        "value" : "EMC"
      }, {
        "label" : "ECAD",
        "value" : "ECAD"
      }, {
        "label" : "SERVICE3",
        "value" : "SERVICE3"
      }, {
        "label" : "SERVICE4",
        "value" : "SERVICE4"
      } ],
      "conditions" : {
        "conditionType" : "Auto",
        "conditions" : [ ]
      }
    },
    "defaultField" : false,
    "fieldName" : " Service type",
    "data" : " Service type",
    "multipleValuesMax" : 10,
    "label" : " Service type",
    "type" : "gridColumn",
    "mandatory" : "yes",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "serviceType",
    "multipleValuesMin" : 0,
    "name" : "serviceType",
    "editConditionally" : {
      "qbName" : "Requester_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ ]
    },
    "sysGen" : false,
    "uiType" : "select",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "serviceType"
  } ],
  "toggleColumns" : false,
  "valueChange" : true,
  "sorting" : "single_column",
  "resizeMode" : "expand_mode",
  "rowSpacing" : "small",
  "rowHeight" : "small",
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
    "name" : "Request Detail",
    "sid" : "ce9c1e5e-ea53-4a53-bc98-dab6e578d248",
    "url" : "/request/requestdetail"
  },
  "detailPageNavigation" : "click_of_the_row"
}
	pageViewTitle: string = 'REQUEST_LIST';
	
		tableSearchControls : FormGroup = new FormGroup({
	createdDate: new FormControl('',[]),
	requesterOrgaloc: new FormControl('',[]),
	serviceType: new FormControl('',[]),
	requestName: new FormControl('',[]),
	statusOfTheRequest: new FormControl('',[]),
	requestCode: new FormControl('',[]),
});

		quickFilterControls : FormGroup = new FormGroup({
	statusOfTheRequest: new FormControl('',[]),
});


	constructor(public requestService : RequestService, public appUtilBaseService: AppUtilBaseService, public translateService: TranslateService, public messageService: MessageService, public confirmationService: ConfirmationService, public domSanitizer:DomSanitizer, public bsModalService: BsModalService, public activatedRoute: ActivatedRoute, public renderer2: Renderer2, public router: Router, ...args: any) {
    
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
	loadGridData() {
  let gridSubscription: any;
  if (environment.prototype) {
  	gridSubscription = this.requestService.getProtoTypingData().subscribe((data: any) => {
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
	  	let property: Exclude<keyof RequestListBaseComponent, ''> = value;
	  	const method:any = "getChildTableData";
	  	let action: Exclude<keyof RequestListBaseComponent, ''> = method;
	  	if(this.isChildPage && this[property] && typeof this[action] === "function"){
	  		params.pid = this[property];
	  		this[action](params);
	  	}
	  	else{
		  	this.requestService.getDatatableData(params).subscribe((data: any) => {
				let updateRecords: RequestBase[] = [...this.gridData, ...data?.results];
				const ids = updateRecords.map(o => o.sid)
				this.gridData = updateRecords.filter(({ sid }, index) => !ids.includes(sid, index + 1))
				this.total = data?.filtered ? data?.filtered : 0;
			});
		}
	}
}
	onNew() {
	const value: any = "parentId";
	let property: Exclude<keyof RequestListBaseComponent, ''> = value;
	if (this.isChildPage && this[property]) {
		const methodName: any = "onNewChild";
		let action: Exclude<keyof RequestListBaseComponent, ''> = methodName;
		if (typeof this[action] == "function") {
			this[action]();
		}
	}
	else {
		this.router.navigate(['../requestdetail'], { relativeTo: this.activatedRoute});
	}
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
	actionBarAction(btn: any) {
    const methodName: any = (`on` + btn.action.charAt(0).toUpperCase() + btn.action.slice(1));
    let action: Exclude<keyof RequestListBaseComponent, ' '> = methodName;
    if (btn.action === 'navigate_to_page' && btn.pageName?.url) {
      this.router.navigateByUrl(btn.pageName.url);
    }
    else if (typeof this[action] === "function") {
      this[action]();
    }
  }
	onRefresh(){
this.gridData = [];
this.params.start =0;
this.loadGridData();
}
	toggleAdvancedSearch() {
  this.showAdvancedSearch = !this.showAdvancedSearch;
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
          this.requestService.delete(requestedParams).subscribe((res: any) => {
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
	onUpdate(id: any) {
	if (this.tableConfig.detailPage?.url) {
      const value: any = "parentId";
       let property: Exclude<keyof RequestListBaseComponent, ''> = value;
       const methodName: any = "onUpdateChild";
       let action: Exclude<keyof RequestListBaseComponent, ''> = methodName;
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
