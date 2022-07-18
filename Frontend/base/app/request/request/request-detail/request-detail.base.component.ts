import { RequestService } from '../request.service';
import { RequestBase} from '../request.base.model';
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

import { Validators } from '@angular/forms';
import {ViewChild } from '@angular/core';
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
	providers:[MessageService, ConfirmationService]
}
)
export class RequestDetailBaseComponent{
	
	
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
workflowType = "sslworkflow";
workFlowEnabled = true;
workFlowInitialState = "DRAFT";
workFlowField = "statusOfTheRequest";
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
	@ViewChild('HistoryListComponent') HistoryListComponent: any;
	bsModalRef?: BsModalRef;
	isChildPage:boolean = false;

	
	leftActionBarConfig : any = {
  "children" : [ {
    "visibility" : "show",
    "buttonStyle" : "curved",
    "icon" : {
      "type" : "icon",
      "icon" : {
        "label" : "fas fa-arrow-left",
        "value" : "fas fa-arrow-left"
      }
    },
    "currentNode" : "_34",
    "label" : "BACK",
    "type" : "button",
    "outline" : "true",
    "buttonType" : "icon_on_left",
    "valueChange" : true,
    "showOn" : "both",
    "buttonEnabled" : "yes",
    "action" : "back"
  }, {
    "outline" : "true",
    "children" : [ {
      "visibility" : "show",
      "buttonStyle" : "curved",
      "currentNode" : "_36",
      "label" : "SAVE",
      "visiblity" : "show",
      "type" : "button",
      "outline" : "true",
      "buttonType" : "icon_on_left",
      "valueChange" : true,
      "showOn" : "both",
      "buttonEnabled" : "yes",
      "action" : "save",
      "conditionForButtonEnable" : ""
    } ],
    "valueChange" : true,
    "buttonStyle" : "curved",
    "displayCount" : 2,
    "currentNode" : "_35",
    "label" : "BUTTON_GROUP",
    "type" : "buttonGroup"
  } ]
}
	workflowActionBarConfig : any = {
  "children" : [ {
    "outline" : true,
    "children" : [ {
      "outline" : true,
      "buttonType" : "icon_on_left",
      "visibility" : "show",
      "service" : {
        "name" : "sslWorkflowSubmit",
        "tableId" : "c31ac3f2-1ff3-4533-9aba-53f71383ab00",
        "sid" : "814ee1ac-82f2-482c-8f3a-f4ccd2507599",
        "tableName" : "Request"
      },
      "showOn" : "both",
      "buttonStyle" : "curved",
      "buttonEnabled" : "yes",
      "action" : "call_a_backend_webservice",
      "label" : "SUBMIT",
      "type" : "button",
      "wfAction" : "submit"
    }, {
      "outline" : true,
      "buttonType" : "icon_on_left",
      "visibility" : "show",
      "service" : {
        "name" : "sslWorkflowCancel",
        "tableId" : "c31ac3f2-1ff3-4533-9aba-53f71383ab00",
        "sid" : "ebd893b9-f99c-4e47-91f5-a4e1c74f4ee6",
        "tableName" : "Request"
      },
      "showOn" : "both",
      "buttonStyle" : "curved",
      "buttonEnabled" : "yes",
      "action" : "call_a_backend_webservice",
      "label" : "CANCEL",
      "type" : "button",
      "wfAction" : "cancel"
    }, {
      "outline" : true,
      "buttonType" : "icon_on_left",
      "visibility" : "show",
      "service" : {
        "name" : "sslWorkflowDemoteToRequester",
        "tableId" : "c31ac3f2-1ff3-4533-9aba-53f71383ab00",
        "sid" : "b8faadaa-d332-40a2-877e-f0342094c449",
        "tableName" : "Request"
      },
      "showOn" : "both",
      "buttonStyle" : "curved",
      "buttonEnabled" : "yes",
      "action" : "call_a_backend_webservice",
      "label" : "DEMOTE_TO_REQUESTER",
      "type" : "button",
      "wfAction" : "demoteToRequester"
    }, {
      "outline" : true,
      "buttonType" : "icon_on_left",
      "visibility" : "show",
      "service" : {
        "name" : "sslWorkflowApproveToLeader",
        "tableId" : "c31ac3f2-1ff3-4533-9aba-53f71383ab00",
        "sid" : "e1849ce3-0166-47b6-a736-65f450594f14",
        "tableName" : "Request"
      },
      "showOn" : "both",
      "buttonStyle" : "curved",
      "buttonEnabled" : "yes",
      "action" : "call_a_backend_webservice",
      "label" : "APPROVE_TO_LEADER",
      "type" : "button",
      "wfAction" : "approveToLeader"
    }, {
      "outline" : true,
      "buttonType" : "icon_on_left",
      "visibility" : "show",
      "service" : {
        "name" : "sslWorkflowAssign",
        "tableId" : "c31ac3f2-1ff3-4533-9aba-53f71383ab00",
        "sid" : "970658d4-0888-4c03-a505-32dcf14e4bd6",
        "tableName" : "Request"
      },
      "showOn" : "both",
      "buttonStyle" : "curved",
      "buttonEnabled" : "yes",
      "action" : "call_a_backend_webservice",
      "label" : "ASSIGN",
      "type" : "button",
      "wfAction" : "assign"
    }, {
      "outline" : true,
      "buttonType" : "icon_on_left",
      "visibility" : "show",
      "service" : {
        "name" : "sslWorkflowDemoteToScheduler",
        "tableId" : "c31ac3f2-1ff3-4533-9aba-53f71383ab00",
        "sid" : "65db3082-b7e4-450f-8066-051b618ef12c",
        "tableName" : "Request"
      },
      "showOn" : "both",
      "buttonStyle" : "curved",
      "buttonEnabled" : "yes",
      "action" : "call_a_backend_webservice",
      "label" : "DEMOTE_TO_SCHEDULER",
      "type" : "button",
      "wfAction" : "demoteToScheduler"
    }, {
      "outline" : true,
      "buttonType" : "icon_on_left",
      "visibility" : "show",
      "service" : {
        "name" : "sslWorkflowSubmitToApprover",
        "tableId" : "c31ac3f2-1ff3-4533-9aba-53f71383ab00",
        "sid" : "75094d3e-17cc-4320-8e1c-563670ec634e",
        "tableName" : "Request"
      },
      "showOn" : "both",
      "buttonStyle" : "curved",
      "buttonEnabled" : "yes",
      "action" : "call_a_backend_webservice",
      "label" : "SUBMIT_TO_APPROVER",
      "type" : "button",
      "wfAction" : "submitToApprover"
    }, {
      "outline" : true,
      "buttonType" : "icon_on_left",
      "visibility" : "show",
      "service" : {
        "name" : "sslWorkflowValidate",
        "tableId" : "c31ac3f2-1ff3-4533-9aba-53f71383ab00",
        "sid" : "3dc931e3-00d9-4141-a2c8-7eb08204c126",
        "tableName" : "Request"
      },
      "showOn" : "both",
      "buttonStyle" : "curved",
      "buttonEnabled" : "yes",
      "action" : "call_a_backend_webservice",
      "label" : "VALIDATE",
      "type" : "button",
      "wfAction" : "validate"
    }, {
      "outline" : true,
      "buttonType" : "icon_on_left",
      "visibility" : "show",
      "service" : {
        "name" : "sslWorkflowDemoteToLeader",
        "tableId" : "c31ac3f2-1ff3-4533-9aba-53f71383ab00",
        "sid" : "d0627bc6-ac31-4b84-ab48-3b04a8688454",
        "tableName" : "Request"
      },
      "showOn" : "both",
      "buttonStyle" : "curved",
      "buttonEnabled" : "yes",
      "action" : "call_a_backend_webservice",
      "label" : "DEMOTE_TO_LEADER",
      "type" : "button",
      "wfAction" : "demoteToLeader"
    } ],
    "valueChange" : true,
    "buttonStyle" : "curved",
    "displayCount" : 2,
    "currentNode" : "70f097d1-41e5-4a1c-ac09-e8e969ba856b",
    "label" : "BUTTON_GROUP",
    "type" : "buttonGroup"
  } ],
  "label" : "Workflow Action Bar",
  "type" : "workflowActionBar"
}
	detailCaptionBarConfig : any = {
  "children" : [ {
    "allowEditing" : "no",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "Request Code",
    "data" : "Request Code",
    "label" : "Request Code",
    "type" : "captionItem",
    "mandatory" : "yes",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "requestCode",
    "name" : "requestCode",
    "sysGen" : false,
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
    "currentNode" : "24d16c26-c13b-4740-968f-fdfec98b3e8f",
    "label" : "  Status of the request",
    "type" : "captionItem",
    "mandatory" : "yes",
    "searchable" : "full_word",
    "transientField" : false,
    "defaultVal" : "Draft",
    "field" : "statusOfTheRequest",
    "multipleValuesMin" : 0,
    "valueChange" : true,
    "showOn" : "both",
    "name" : "statusOfTheRequest",
    "sysGen" : false,
    "uiType" : "select",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "statusOfTheRequest"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : " Request Name",
    "data" : " Request Name",
    "currentNode" : "e75a6658-cb28-4e0c-a96c-c6bd279b55ac",
    "label" : " Request Name",
    "type" : "captionItem",
    "mandatory" : "yes",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "requestName",
    "valueChange" : true,
    "showOn" : "both",
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
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "requestName"
  }, {
    "allowEditing" : "no",
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
    "type" : "captionItem",
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
  }, {
    "allowEditing" : "no",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "  PRJ OA PM",
    "data" : "  PRJ OA PM",
    "label" : "  PRJ OA PM",
    "type" : "captionItem",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "prjOaPm",
    "name" : "prjOaPm",
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "prjOaPm"
  }, {
    "allowEditing" : "no",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "  PRJ OA Entity",
    "data" : "  PRJ OA Entity",
    "label" : "  PRJ OA Entity",
    "type" : "captionItem",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "prjOaEntity",
    "name" : "prjOaEntity",
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "prjOaEntity"
  }, {
    "allowEditing" : "no",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "PRJ OA Code",
    "data" : " PRJ OA Code",
    "label" : " PRJ OA Code",
    "type" : "captionItem",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "prjOaCode",
    "name" : "prjOaCode",
    "editConditionally" : {
      "qbName" : "Requester_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ "selected", "Requester ", "Admin" ]
    },
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "prjOaCode"
  } ]
}
	detailFormConfig : any = {
  "children" : [ {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : " Requester",
    "data" : " Requester",
    "currentNode" : "fb2566d3-97d8-4497-a178-0866cd3f5593",
    "label" : " Requester",
    "type" : "formField",
    "mandatory" : "yes",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "requester",
    "valueChange" : true,
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
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "requester"
  }, {
    "allowEditing" : "no",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "  Requester Orgaloc ",
    "data" : "  Requester Orgaloc ",
    "currentNode" : "e5ae4249-0bf1-408f-89ff-3a23ca6119af",
    "label" : "  Requester Orgaloc ",
    "type" : "formField",
    "mandatory" : "yes",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "requesterOrgaloc",
    "valueChange" : true,
    "name" : "requesterOrgaloc",
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "requesterOrgaloc"
  }, {
    "allowEditing" : "conditional",
    "multipleValues" : false,
    "fieldName" : " Functional Network ",
    "data" : " Functional Network ",
    "currentNode" : "a103440f-4d09-4581-8f4e-b39fb855f638",
    "infoBubble" : "",
    "type" : "formField",
    "mandatory" : "no",
    "viewConditionally" : "",
    "valueChange" : true,
    "editConditionally" : {
      "qbName" : "Requester_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ "selected", "Requester ", "Admin" ]
    },
    "sysGen" : false,
    "placeHolder" : "",
    "fieldId" : "functionalNetwork",
    "allowedValues" : {
      "values" : [ {
        "label" : "FROM_ED_1",
        "value" : "FROM_ED_1"
      }, {
        "label" : "FROM_ED2",
        "value" : "FROM_ED2"
      }, {
        "label" : "FROM_ED3",
        "value" : "FROM_ED3"
      } ],
      "conditions" : {
        "conditionType" : "Auto",
        "conditions" : [ {
          "id" : "From ED 1",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : " Functional Network ",
              "operator" : "==",
              "value" : "From ED 1"
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
          "id" : "From ED2",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : " Functional Network ",
              "operator" : "==",
              "value" : "From ED2"
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
          "id" : "From ED3",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : " Functional Network ",
              "operator" : "==",
              "value" : "From ED3"
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
        } ]
      }
    },
    "defaultField" : false,
    "helpText" : "",
    "multipleValuesMax" : 10,
    "label" : " Functional Network ",
    "searchable" : "full_word",
    "transientField" : false,
    "conditionalMandatory" : "",
    "field" : "functionalNetwork",
    "multipleValuesMin" : 0,
    "name" : "functionalNetwork",
    "uiType" : "select",
    "fieldType" : "string",
    "allowViewing" : "yes"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : {
      "values" : [ {
        "label" : "PROJECT",
        "value" : "PROJECT"
      }, {
        "label" : "ACTIVITY",
        "value" : "ACTIVITY"
      } ],
      "conditions" : {
        "conditionType" : "Auto",
        "conditions" : [ {
          "id" : "Project",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : " Project or Activity",
              "operator" : "==",
              "value" : "Project"
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
          "id" : "Activity",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : " Project or Activity",
              "operator" : "==",
              "value" : "Activity"
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
        } ]
      }
    },
    "defaultField" : false,
    "fieldName" : " Project or Activity",
    "data" : " Project or Activity",
    "currentNode" : "9ea4567d-9e20-4a4e-b49d-8552ebc84bbf",
    "label" : " Project or Activity",
    "type" : "formField",
    "mandatory" : "yes",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "projectOrActivity",
    "valueChange" : true,
    "name" : "projectOrActivity",
    "editConditionally" : {
      "qbName" : "Requester_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ "selected", "Requester ", "Admin" ]
    },
    "sysGen" : false,
    "uiType" : "select",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "projectOrActivity"
  }, {
    "allowEditing" : "no",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "PRJ OA Code",
    "data" : " PRJ OA Code",
    "currentNode" : "4313db95-d37f-4e6e-96e7-b387d52ed565",
    "label" : " PRJ OA Code",
    "type" : "formField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "prjOaCode",
    "valueChange" : true,
    "name" : "prjOaCode",
    "editConditionally" : {
      "qbName" : "Requester_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ "selected", "Requester ", "Admin" ]
    },
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "prjOaCode"
  }, {
    "label" : "Validate",
    "buttonEnabled" : "yes",
    "visibility" : "show",
    "buttonType" : "icon_on_left",
    "buttonStyle" : "curved",
    "outline" : true,
    "currentNode" : "20c0715a-e25d-42d4-80d2-f271e4262b1d",
    "valueChange" : true,
    "type" : "customButton",
    "name" : "validate"
  }, {
    "allowEditing" : "yes",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "PR or Activity Name",
    "data" : "PR or Activity Name",
    "label" : "PR or Activity Name",
    "type" : "formField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "prOrActivityName",
    "name" : "prOrActivityName",
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "prOrActivityName"
  }, {
    "allowEditing" : "no",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : " Sub Name",
    "data" : " Sub Name",
    "label" : " Sub Name",
    "type" : "formField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "subName",
    "name" : "subName",
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "subName"
  }, {
    "allowEditing" : "no",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : " Orgaloc to be invoiced",
    "data" : " Orgaloc to be invoiced",
    "currentNode" : "07ab99d2-8dd8-4b1f-85ac-80316253bcbf",
    "label" : " Orgaloc to be invoiced",
    "type" : "formField",
    "mandatory" : "yes",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "orgalocToBeInvoiced",
    "valueChange" : true,
    "name" : "orgalocToBeInvoiced",
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "orgalocToBeInvoiced"
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
    "currentNode" : "24d16c26-c13b-4740-968f-fdfec98b3e8f",
    "label" : "  Status of the request",
    "type" : "formField",
    "mandatory" : "yes",
    "searchable" : "full_word",
    "transientField" : false,
    "defaultVal" : "Draft",
    "field" : "statusOfTheRequest",
    "multipleValuesMin" : 0,
    "valueChange" : true,
    "name" : "statusOfTheRequest",
    "sysGen" : false,
    "uiType" : "select",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "statusOfTheRequest"
  }, {
    "allowEditing" : "no",
    "multipleValues" : false,
    "fieldName" : " Service type",
    "data" : " Service type",
    "currentNode" : "cfa15170-0741-43ec-957c-3c263d6cf8e2",
    "type" : "formField",
    "mandatory" : "yes",
    "valueChange" : true,
    "editConditionally" : {
      "qbName" : "Requester_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ ]
    },
    "sysGen" : false,
    "fieldId" : "serviceType",
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
    "multipleValuesMax" : 10,
    "label" : " Service type",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "serviceType",
    "multipleValuesMin" : 0,
    "name" : "serviceType",
    "uiType" : "select",
    "fieldType" : "string",
    "allowViewing" : "yes"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : {
      "values" : [ {
        "label" : "VALUE1_FROM_LAB_TABLE",
        "value" : "VALUE1_FROM_LAB_TABLE"
      }, {
        "label" : "VALUE2_FROM_LAB_TABLE",
        "value" : "VALUE2_FROM_LAB_TABLE"
      } ],
      "conditions" : {
        "conditionType" : "Auto",
        "conditions" : [ {
          "id" : "Value1 from Lab table",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "EMC Lab",
              "operator" : "==",
              "value" : "Value1 from Lab table"
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
          "id" : "Value2 from Lab table",
          "query" : {
            "condition" : "and",
            "rules" : [ {
              "field" : "EMC Lab",
              "operator" : "==",
              "value" : "Value2 from Lab table"
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
        } ]
      }
    },
    "defaultField" : false,
    "fieldName" : "EMC Lab",
    "data" : "EMC Lab",
    "label" : "EMC Lab",
    "type" : "formField",
    "mandatory" : "yes",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "emcLab",
    "name" : "emcLab",
    "editConditionally" : {
      "qbName" : "Requester_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ {
          "lhsTableName" : "request",
          "rhsTableName" : "",
          "custom" : true,
          "label" : "serviceType",
          "value" : "ECAD",
          "operator" : "="
        } ]
      },
      "roles" : [ "selected", "Requester ", "Admin" ]
    },
    "sysGen" : false,
    "uiType" : "select",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "emcLab"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : " Request Name",
    "data" : " Request Name",
    "currentNode" : "e75a6658-cb28-4e0c-a96c-c6bd279b55ac",
    "label" : " Request Name",
    "type" : "formField",
    "mandatory" : "yes",
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
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "requestName"
  }, {
    "allowEditing" : "yes",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : " Requested start date ",
    "data" : " Requested start date ",
    "currentNode" : "b85ff7fc-929a-4ba9-9b95-961df4c43f11",
    "label" : " Requested start date ",
    "type" : "formField",
    "mandatory" : "conditional",
    "searchable" : "full_word",
    "transientField" : false,
    "conditionalMandatory" : {
      "qbName" : "Requester_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ "selected", "Requester ", "Admin" ]
    },
    "field" : "requestedStartDate",
    "valueChange" : true,
    "name" : "requestedStartDate",
    "sysGen" : false,
    "uiType" : "datetime",
    "fieldType" : "Date",
    "allowViewing" : "yes",
    "fieldId" : "requestedStartDate"
  }, {
    "allowEditing" : "yes",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "Requested end date",
    "data" : "Requested end date",
    "currentNode" : "ad700d64-1fa8-47cd-ae6b-1d15ddfe300c",
    "label" : "Requested end date",
    "type" : "formField",
    "mandatory" : "conditional",
    "searchable" : "full_word",
    "transientField" : false,
    "conditionalMandatory" : {
      "qbName" : "Requester_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ "selected", "Requester ", "Admin" ]
    },
    "field" : "requestedEndDate",
    "valueChange" : true,
    "name" : "requestedEndDate",
    "sysGen" : false,
    "uiType" : "datetime",
    "fieldType" : "Date",
    "allowViewing" : "yes",
    "fieldId" : "requestedEndDate"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : {
      "values" : [ {
        "label" : "VALUE1_FROM_DESIGNTOOL_TABLE",
        "value" : "VALUE1_FROM_DESIGNTOOL_TABLE"
      } ],
      "conditions" : {
        "conditionType" : "Auto",
        "conditions" : [ ]
      }
    },
    "defaultField" : false,
    "fieldName" : " Task Type",
    "data" : " Task Type",
    "currentNode" : "be8e0685-73a0-4783-85e1-ec9134fbc7ab",
    "label" : " Task Type",
    "type" : "formField",
    "mandatory" : "conditional",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "taskType",
    "valueChange" : true,
    "name" : "taskType",
    "editConditionally" : {
      "qbName" : "Requester_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ {
          "lhsTableName" : "request",
          "rhsTableName" : "",
          "custom" : true,
          "label" : "serviceType",
          "value" : "ECAD",
          "operator" : "="
        } ]
      },
      "roles" : [ "selected", "Requester ", "Admin" ]
    },
    "sysGen" : false,
    "uiType" : "select",
    "fieldType" : "string",
    "allowViewing" : "conditional",
    "fieldId" : "taskType"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : " Estimated duration in hours",
    "data" : " Estimated duration in hours",
    "currentNode" : "dbffd474-b2a3-44a4-b181-c31092822bf1",
    "label" : " Estimated duration in hours",
    "type" : "formField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "estimatedDurationInHours",
    "valueChange" : true,
    "name" : "estimatedDurationInHours",
    "editConditionally" : {
      "qbName" : "Requester_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ "selected", "Requester ", "Admin" ]
    },
    "sysGen" : false,
    "uiType" : "number",
    "fieldType" : "number",
    "allowViewing" : "yes",
    "fieldId" : "estimatedDurationInHours"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : " Project Name as in eDRM",
    "data" : " Project Name as in eDRM",
    "currentNode" : "ce6a8309-e395-4b5c-867b-4a368792a596",
    "label" : " Project Name as in eDRM",
    "type" : "formField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "projectNameAsInEdrm",
    "valueChange" : true,
    "name" : "projectNameAsInEdrm",
    "editConditionally" : {
      "qbName" : "Requester_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ {
          "lhsTableName" : "request",
          "rhsTableName" : "",
          "custom" : true,
          "label" : "serviceType",
          "value" : "ECAD",
          "operator" : "="
        } ]
      },
      "roles" : [ "selected", "Requester ", "Admin" ]
    },
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "projectNameAsInEdrm"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : {
      "values" : [ {
        "label" : "VALUE1_FROM_PR_TABLE",
        "value" : "VALUE1_FROM_PR_TABLE"
      }, {
        "label" : "VALUE2_FROM_PR_TABLE",
        "value" : "VALUE2_FROM_PR_TABLE_"
      } ],
      "conditions" : {
        "conditionType" : "Auto",
        "conditions" : [ ]
      }
    },
    "defaultField" : false,
    "fieldName" : " Project type",
    "data" : " Project type",
    "currentNode" : "e2a955b1-17cc-45f0-b2cb-ecc4d016f7ee",
    "label" : " Project type",
    "type" : "formField",
    "mandatory" : "conditional",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "projectType",
    "valueChange" : true,
    "name" : "projectType",
    "editConditionally" : {
      "qbName" : "Requester_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ "selected", "Admin", "Scheduler" ]
    },
    "sysGen" : false,
    "uiType" : "select",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "projectType"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : " Are left Right design",
    "data" : " Are left Right design",
    "currentNode" : "97924d06-05bb-4ebe-987f-3f6ab33adc9a",
    "label" : " Are left Right design",
    "type" : "formField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "areLeftRightDesign",
    "valueChange" : true,
    "name" : "areLeftRightDesign",
    "editConditionally" : {
      "qbName" : "Requester_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ {
          "lhsTableName" : "request",
          "rhsTableName" : "",
          "custom" : true,
          "label" : "serviceType",
          "value" : "ECAD",
          "operator" : "="
        } ]
      },
      "roles" : [ "selected", "Requester ", "Admin" ]
    },
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "areLeftRightDesign"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : " Board Name ",
    "data" : " Board Name ",
    "currentNode" : "91d2a417-e5cd-4516-b653-41bf952f9f01",
    "label" : " Board Name ",
    "type" : "formField",
    "mandatory" : "yes",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "boardName",
    "valueChange" : true,
    "name" : "boardName",
    "editConditionally" : {
      "qbName" : "Requester_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ {
          "lhsTableName" : "request",
          "rhsTableName" : "",
          "custom" : true,
          "label" : "serviceType",
          "value" : "ECAD",
          "operator" : "="
        } ]
      },
      "roles" : [ "selected", "Requester ", "Admin" ]
    },
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "boardName"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "Board Number",
    "data" : "Board Number",
    "currentNode" : "04089a8e-ed07-4a6f-aa5a-66e4c28ac1f6",
    "label" : "Board Number",
    "type" : "formField",
    "mandatory" : "yes",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "boardNumber",
    "valueChange" : true,
    "name" : "boardNumber",
    "editConditionally" : {
      "qbName" : "Requester_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ {
          "lhsTableName" : "request",
          "rhsTableName" : "",
          "custom" : true,
          "label" : "serviceType",
          "value" : "ECAD",
          "operator" : "="
        } ]
      },
      "roles" : [ "selected", "Requester ", "Admin" ]
    },
    "sysGen" : false,
    "uiType" : "number",
    "fieldType" : "number",
    "allowViewing" : "yes",
    "fieldId" : "boardNumber"
  }, {
    "allowEditing" : "conditional",
    "multipleValues" : false,
    "fieldName" : " Panelization",
    "data" : " Panelization",
    "currentNode" : "3e63ce12-4ced-4914-a345-0ef8b27626ca",
    "type" : "formField",
    "mandatory" : "no",
    "valueChange" : true,
    "editConditionally" : {
      "qbName" : "Requester_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ {
          "lhsTableName" : "request",
          "rhsTableName" : "",
          "custom" : true,
          "label" : "serviceType",
          "value" : "ECAD",
          "operator" : "="
        } ]
      },
      "roles" : [ "selected", "Requester ", "Admin" ]
    },
    "sysGen" : false,
    "fieldId" : "panelization",
    "allowedValues" : {
      "values" : [ {
        "label" : "YES",
        "value" : "YES"
      }, {
        "label" : "NO",
        "value" : "NO"
      } ],
      "conditions" : {
        "conditionType" : "Auto",
        "conditions" : [ ]
      }
    },
    "defaultField" : false,
    "multipleValuesMax" : 10,
    "label" : " Panelization",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "panelization",
    "multipleValuesMin" : 0,
    "name" : "panelization",
    "uiType" : "select",
    "fieldType" : "string",
    "allowViewing" : "yes"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : " Link to specifications",
    "data" : " Link to specifications",
    "currentNode" : "f48ad421-8522-45ed-968e-50864331f7b3",
    "label" : " Link to specifications",
    "type" : "formField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "linkToSpecifications",
    "valueChange" : true,
    "name" : "linkToSpecifications",
    "editConditionally" : {
      "qbName" : "Requester_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ "selected", "Requester ", "Admin" ]
    },
    "sysGen" : false,
    "uiType" : "link",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "linkToSpecifications"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : " Additional information",
    "data" : " Additional information",
    "label" : " Additional information",
    "type" : "formField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "additionalInformation",
    "name" : "additionalInformation",
    "editConditionally" : {
      "qbName" : "Requester_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ "selected", "Requester ", "Admin" ]
    },
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "additionalInformation"
  }, {
    "label" : "TEST",
    "type" : "htmlcontainer",
    "name" : "test"
  }, {
    "allowEditing" : "no",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "Scheduler",
    "data" : "Scheduler",
    "currentNode" : "32b7e9b1-82aa-468f-8b2b-c44658b43af3",
    "label" : "Scheduler",
    "type" : "formField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "scheduler",
    "valueChange" : true,
    "name" : "scheduler",
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "scheduler"
  }, {
    "allowEditing" : "conditional",
    "multipleValues" : false,
    "fieldName" : "Scheduler currency",
    "data" : "Scheduler currency",
    "currentNode" : "f2e81a82-cd7c-4fdb-9544-25446113a7c1",
    "type" : "formField",
    "mandatory" : "conditional",
    "defaultVal" : "Please select",
    "valueChange" : true,
    "editConditionally" : {
      "qbName" : "Scheduler_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ ]
    },
    "sysGen" : false,
    "fieldId" : "schedulerCurrency",
    "allowedValues" : {
      "values" : [ {
        "label" : "EURO",
        "value" : "EURO"
      }, {
        "label" : "USD",
        "value" : "USD"
      }, {
        "label" : "YUAN",
        "value" : "YUAN"
      }, {
        "label" : "PLEASE_SELECT",
        "value" : "PLEASE_SELECT"
      } ],
      "conditions" : {
        "conditionType" : "Auto",
        "conditions" : [ ]
      }
    },
    "defaultField" : false,
    "multipleValuesMax" : 10,
    "label" : "Scheduler currency",
    "searchable" : "full_word",
    "transientField" : false,
    "conditionalMandatory" : {
      "qbName" : "Scheduler_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ "selected", "Admin" ]
    },
    "field" : "schedulerCurrency",
    "multipleValuesMin" : 0,
    "name" : "schedulerCurrency",
    "uiType" : "select",
    "fieldType" : "string",
    "allowViewing" : "yes"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "Scheduler Proposed Start Date",
    "data" : "Scheduler Proposed Start Date",
    "label" : "Scheduler Proposed Start Date",
    "type" : "formField",
    "mandatory" : "yes",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "schedulerProposedStartDate",
    "name" : "schedulerProposedStartDate",
    "editConditionally" : {
      "qbName" : "Scheduler_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ "selected", "Scheduler ", "Admin", "Scheduler" ]
    },
    "sysGen" : false,
    "uiType" : "datetime",
    "fieldType" : "Date",
    "allowViewing" : "yes",
    "fieldId" : "schedulerProposedStartDate"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "Scheduler Proposed End Date",
    "data" : "Scheduler Proposed End Date",
    "label" : "Scheduler Proposed End Date",
    "type" : "formField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "schedulerProposedEndDate",
    "name" : "schedulerProposedEndDate",
    "editConditionally" : {
      "qbName" : "Scheduler_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ "selected", "Scheduler ", "Admin", "Scheduler" ]
    },
    "sysGen" : false,
    "uiType" : "datetime",
    "fieldType" : "Date",
    "allowViewing" : "yes",
    "fieldId" : "schedulerProposedEndDate"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "Quote No",
    "data" : "Quote No",
    "currentNode" : "b8f8e904-f2be-471e-b34e-ee3e475e8ac2",
    "label" : "Quote No",
    "type" : "formField",
    "mandatory" : "yes",
    "field" : "quoteNo",
    "valueChange" : true,
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
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : " Quotation Description",
    "data" : " Quotation Description",
    "label" : " Quotation Description",
    "type" : "formField",
    "mandatory" : "no",
    "field" : "quotationDescription",
    "name" : "quotationDescription",
    "editConditionally" : {
      "qbName" : "Scheduler_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ "selected", "Scheduler ", "Admin", "Scheduler" ]
    },
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "fieldId" : "quotationDescription"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "Scheduler Additional Information",
    "data" : "Scheduler Additional Information",
    "currentNode" : "43c2ba6a-a1e4-47b8-97d5-bffb150ed848",
    "label" : "Scheduler Additional Information",
    "type" : "formField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "schedulerAdditionalInformation",
    "valueChange" : true,
    "name" : "schedulerAdditionalInformation",
    "editConditionally" : {
      "qbName" : "Scheduler_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ ]
    },
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "schedulerAdditionalInformation"
  }, {
    "allowEditing" : "no",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "Scheduler Name",
    "data" : "Scheduler Name",
    "currentNode" : "2fb02ddd-d395-42a3-b95b-2dd9287c0583",
    "label" : "Scheduler Name",
    "type" : "formField",
    "mandatory" : "yes",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "schedulerName",
    "valueChange" : true,
    "name" : "schedulerName",
    "sysGen" : false,
    "uiType" : "select",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "schedulerName"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : " Link to Quotation",
    "data" : " Link to Quotation",
    "currentNode" : "eef6ef6b-23d9-479c-b1a6-7a56952a3879",
    "label" : " Link to Quotation",
    "type" : "formField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "linkToQuotation",
    "valueChange" : true,
    "name" : "linkToQuotation",
    "editConditionally" : {
      "qbName" : "Scheduler_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ "selected", "Scheduler ", "Admin" ]
    },
    "sysGen" : false,
    "uiType" : "link",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "linkToQuotation"
  }, {
    "allowEditing" : "no",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : " OSA Name to be created in STR",
    "data" : " OSA Name to be created in STR",
    "currentNode" : "27cf50a7-390f-41fb-9da9-953ec4c224b0",
    "label" : " OSA Name to be created in STR",
    "type" : "formField",
    "field" : "osaNameToBeCreatedInStr",
    "valueChange" : true,
    "name" : "osaNameToBeCreatedInStr",
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "fieldId" : "osaNameToBeCreatedInStr"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "Lead Place of Development",
    "data" : "Lead Place of Development",
    "currentNode" : "8daeb8b5-a138-41d7-b19f-09ee5420119a",
    "label" : "Lead Place of Development",
    "type" : "formField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "leadPlaceOfDevelopment",
    "valueChange" : true,
    "name" : "leadPlaceOfDevelopment",
    "editConditionally" : {
      "qbName" : "Scheduler_Rights_Fields",
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
    "fieldId" : "leadPlaceOfDevelopment"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "second Place of Development",
    "data" : "second Place of Development",
    "currentNode" : "bc6eac5a-2fc0-48f8-b898-67548ff26396",
    "label" : "second Place of Development",
    "type" : "formField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "secondPlaceOfDevelopment",
    "valueChange" : true,
    "name" : "secondPlaceOfDevelopment",
    "editConditionally" : {
      "qbName" : "Scheduler_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ "selected", "Admin", "Scheduler" ]
    },
    "sysGen" : false,
    "uiType" : "select",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "secondPlaceOfDevelopment"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : " Hours manpower",
    "data" : " Hours manpower",
    "currentNode" : "a5284a2d-1326-4768-a57f-e56ee1fb946f",
    "label" : " Hours manpower",
    "type" : "formField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "hoursManpower",
    "valueChange" : true,
    "name" : "hoursManpower",
    "editConditionally" : {
      "qbName" : "Scheduler_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ "selected", "Admin", "Scheduler" ]
    },
    "sysGen" : false,
    "uiType" : "number",
    "fieldType" : "number",
    "allowViewing" : "yes",
    "fieldId" : "hoursManpower"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : " Hours manpower2",
    "data" : " Hours manpower2",
    "currentNode" : "b4ab9b8e-efd4-4ceb-b51d-0ab19492bb02",
    "label" : " Hours manpower2",
    "type" : "formField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "hoursManpower2",
    "valueChange" : true,
    "name" : "hoursManpower2",
    "editConditionally" : {
      "qbName" : "Scheduler_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ ]
    },
    "sysGen" : false,
    "uiType" : "number",
    "fieldType" : "number",
    "allowViewing" : "yes",
    "fieldId" : "hoursManpower2"
  }, {
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : " Budget",
    "data" : " Budget",
    "currentNode" : "b837128e-6822-4dd5-88be-9cf6eccba3b9",
    "label" : " Budget",
    "type" : "formField",
    "field" : "budget",
    "valueChange" : true,
    "name" : "budget",
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "fieldId" : "budget"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : " Budget manpower2",
    "data" : " Budget manpower2",
    "currentNode" : "1d7cadf3-64dd-4932-a90b-4353aace1490",
    "label" : " Budget manpower2",
    "type" : "formField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "budgetManpower2",
    "valueChange" : true,
    "name" : "budgetManpower2",
    "editConditionally" : {
      "qbName" : "Scheduler_Rights_Fields",
      "query" : {
        "condition" : "and",
        "rules" : [ ]
      },
      "roles" : [ "selected", "Admin", "Scheduler" ]
    },
    "sysGen" : false,
    "uiType" : "number",
    "fieldType" : "number",
    "allowViewing" : "yes",
    "fieldId" : "budgetManpower2"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "Additionnal Cost",
    "data" : "Additionnal Cost",
    "currentNode" : "925fb3de-3abf-46a3-b282-bb52ea690431",
    "label" : "Additionnal Cost",
    "type" : "formField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "additionnalCost",
    "valueChange" : true,
    "name" : "additionnalCost",
    "editConditionally" : {
      "qbName" : "Scheduler_Rights_Fields",
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
    "fieldId" : "additionnalCost"
  }, {
    "allowEditing" : "conditional",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "Additionnal Cost2",
    "data" : "Additionnal Cost2",
    "label" : "Additionnal Cost2",
    "type" : "formField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "additionnalCost2",
    "name" : "additionnalCost2",
    "editConditionally" : {
      "qbName" : "Scheduler_Rights_Fields",
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
    "fieldId" : "additionnalCost2"
  }, {
    "allowEditing" : "no",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "Global Budget",
    "data" : "Global Budget",
    "label" : "Global Budget",
    "type" : "formField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "globalBudget",
    "name" : "globalBudget",
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "globalBudget"
  }, {
    "allowEditing" : "no",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "Business Controller",
    "data" : "Business Controller",
    "currentNode" : "0ebdb17f-626d-47f6-834d-2dcd61ca63f8",
    "label" : "Business Controller",
    "type" : "formField",
    "field" : "businessController",
    "valueChange" : true,
    "name" : "businessController",
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "fieldId" : "businessController"
  }, {
    "allowEditing" : "no",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : " Project Manager or Activity Leader ",
    "data" : " Project Manager or Activity Leader ",
    "currentNode" : "2e321fe4-bc08-4e73-9a1e-b7202f467320",
    "label" : " Project Manager or Activity Leader ",
    "type" : "formField",
    "field" : "projectManagerOrActivityLeader",
    "valueChange" : true,
    "name" : "projectManagerOrActivityLeader",
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "fieldId" : "projectManagerOrActivityLeader"
  }, {
    "allowEditing" : "no",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "Scheduler",
    "data" : "Scheduler",
    "currentNode" : "ff4d800e-dfca-4a4f-b784-8a5bb045566c",
    "label" : "Scheduler",
    "type" : "formField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "scheduler",
    "valueChange" : true,
    "name" : "scheduler",
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "scheduler"
  }, {
    "allowEditing" : "no",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "Leader",
    "data" : "Leader",
    "currentNode" : "6b0f901e-945a-49f4-83f3-b6a846ab3e2d",
    "label" : "Leader",
    "type" : "formField",
    "mandatory" : "no",
    "searchable" : "full_word",
    "transientField" : false,
    "field" : "leader",
    "valueChange" : true,
    "name" : "leader",
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "allowViewing" : "yes",
    "fieldId" : "leader"
  }, {
    "allowEditing" : "yes",
    "allowedValues" : { },
    "defaultField" : false,
    "fieldName" : "  Watcher",
    "data" : "  Watcher",
    "currentNode" : "67e7e78f-ee3c-476e-bd09-9420d311f20d",
    "label" : "  Watcher",
    "type" : "formField",
    "field" : "watcher",
    "valueChange" : true,
    "name" : "watcher",
    "sysGen" : false,
    "uiType" : "text",
    "fieldType" : "string",
    "fieldId" : "watcher"
  } ],
  "columns" : "1",
  "valueChange" : true,
  "currentNode" : "detailForm",
  "type" : "form"
}
	pageViewTitle: string = 'REQUEST_DETAIL';
	
		detailFormControls : FormGroup = new FormGroup({
	boardNumber: new FormControl('',[Validators.required]),
	schedulerProposedStartDate: new FormControl('',[Validators.required]),
	serviceType: new FormControl('',[Validators.required]),
	linkToSpecifications: new FormControl('',[]),
	projectManagerOrActivityLeader: new FormControl('',[]),
	budget: new FormControl('',[]),
	schedulerCurrency: new FormControl('',[]),
	schedulerName: new FormControl('',[Validators.required]),
	prOrActivityName: new FormControl('',[]),
	projectType: new FormControl('',[]),
	schedulerProposedEndDate: new FormControl('',[]),
	requestName: new FormControl('',[Validators.required]),
	projectOrActivity: new FormControl('',[Validators.required]),
	statusOfTheRequest: new FormControl('',[Validators.required]),
	nameCode: new FormControl('',[]),
	namecode: new FormControl('',[]),
	leader: new FormControl('',[]),
	secondPlaceOfDevelopment: new FormControl('',[]),
	estimatedDurationInHours: new FormControl('',[]),
	subName: new FormControl('',[]),
	orgalocToBeInvoiced: new FormControl('',[Validators.required]),
	globalBudget: new FormControl('',[]),
	leadPlaceOfDevelopment: new FormControl('',[]),
	requester: new FormControl('',[Validators.required]),
	linkToQuotation: new FormControl('',[]),
	additionnalCost2: new FormControl('',[]),
	areLeftRightDesign: new FormControl('',[]),
	taskType: new FormControl('',[]),
	quotationDescription: new FormControl('',[]),
	requesterOrgaloc: new FormControl('',[Validators.required]),
	additionalInformation: new FormControl('',[]),
	businessController: new FormControl('',[]),
	hoursManpower: new FormControl('',[]),
	watcher: new FormControl('',[]),
	emcLab: new FormControl('',[Validators.required]),
	requestedEndDate: new FormControl('',[]),
	projectNameAsInEdrm: new FormControl('',[]),
	osaNameToBeCreatedInStr: new FormControl('',[]),
	panelization: new FormControl('',[]),
	prjOaCode: new FormControl('',[]),
	quoteNo: new FormControl('',[Validators.required]),
	schedulerAdditionalInformation: new FormControl('',[]),
	functionalNetwork: new FormControl('',[]),
	requestedStartDate: new FormControl('',[]),
	hoursManpower2: new FormControl('',[]),
	boardName: new FormControl('',[Validators.required]),
	additionnalCost: new FormControl('',[]),
	budgetManpower2: new FormControl('',[]),
	scheduler: new FormControl('',[]),
});


	constructor(public requestService : RequestService, public appUtilBaseService: AppUtilBaseService, public translateService: TranslateService, public messageService: MessageService, public confirmationService: ConfirmationService, public domSanitizer:DomSanitizer, public bsModalService: BsModalService, public activatedRoute: ActivatedRoute, public appBaseService: AppBaseService, public router: Router, public appGlobalService: AppGlobalService, public location: Location, ...args: any) {
    
 	 }

	
	onwfValidate(){
	const params = {id:this.id}
	this.requestService.sslWorkflowValidate(params).subscribe((res:any)=>{
		this.showMessage({ severity: 'success', summary: '', detail: 'Record Updated Successfully' });
		if(Object.keys(this.mandatoryFields).length > 0){
			this.clearValidations(this.mandatoryFields);
		}
		this.onInit();
	},error=>{
		if(Object.keys(this.mandatoryFields).length > 0)
			this.clearValidations(this.mandatoryFields);
	})
}
	getId(){
      this.activatedRoute.queryParams.subscribe((params: any) => { 
        this.id = params['id'];
        this.pid = params['pid']
      }); 
    }
	onwfDemoteToRequester(){
	const params = {id:this.id}
	this.requestService.sslWorkflowDemoteToRequester(params).subscribe((res:any)=>{
		this.showMessage({ severity: 'success', summary: '', detail: 'Record Updated Successfully' });
		if(Object.keys(this.mandatoryFields).length > 0){
			this.clearValidations(this.mandatoryFields);
		}
		this.onInit();
	},error=>{
		if(Object.keys(this.mandatoryFields).length > 0)
			this.clearValidations(this.mandatoryFields);
	})
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
            this.requestService[method](requestedObj).subscribe((res:RequestBase) => {
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
	onwfDemoteToLeader(){
	const params = {id:this.id}
	this.requestService.sslWorkflowDemoteToLeader(params).subscribe((res:any)=>{
		this.showMessage({ severity: 'success', summary: '', detail: 'Record Updated Successfully' });
		if(Object.keys(this.mandatoryFields).length > 0){
			this.clearValidations(this.mandatoryFields);
		}
		this.onInit();
	},error=>{
		if(Object.keys(this.mandatoryFields).length > 0)
			this.clearValidations(this.mandatoryFields);
	})
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
	onwfSubmit(){
	const params = {id:this.id}
	this.requestService.sslWorkflowSubmit(params).subscribe((res:any)=>{
		this.showMessage({ severity: 'success', summary: '', detail: 'Record Updated Successfully' });
		if(Object.keys(this.mandatoryFields).length > 0){
			this.clearValidations(this.mandatoryFields);
		}
		this.onInit();
	},error=>{
		if(Object.keys(this.mandatoryFields).length > 0)
			this.clearValidations(this.mandatoryFields);
	})
}
	formatCaptionItems(config: any, data: any) {
    if (Object.keys(data).length > 0) {
      return (this.appUtilBaseService.formatRawDatatoRedableFormat(config, data[config.field]));
    }
    else {
      return '';
    }
  }
	actionBarAction(btn: any) {
    const methodName: any = (`on` + btn.action.charAt(0).toUpperCase() + btn.action.slice(1));
    let action: Exclude<keyof RequestDetailBaseComponent, ' '> = methodName;
    if (btn.action === 'navigate_to_page' && btn.pageName?.url) {
      this.router.navigateByUrl(btn.pageName.url);
    }
    else if (typeof this[action] === "function") {
      this[action]();
    }
  }
	canDeactivate(): Observable<boolean> | boolean {  
    return true      
    //return this.appUtilBaseService.canDeactivateCall(this.form, this.backupData);
}
	workflowActionBarAction(btn: any) {
    const methodName: any = (`onwf` + btn.wfAction.charAt(0).toUpperCase() + btn.wfAction.slice(1));
    let action: Exclude<keyof RequestDetailBaseComponent, ' '> = methodName;
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
      if (this.formSecurityConfig.confirm?.hasOwnProperty(btn.wfAction)) {
        this.confirmationService.confirm({
          message: this.formSecurityConfig.confirm?.hasOwnProperty(btn.wfAction).message,
          header: 'Confirmation',
          icon: 'pi pi-info-circle',
          accept: () => {
            if (typeof this[action] === "function") {
              this[action]();
            }
          },
          reject: () => {
            if (Object.keys(this.mandatoryFields).length > 0)
              this.clearValidations(this.mandatoryFields);
          },
        });
      }
   else if (typeof this[action] === "function") {
        if (this.isFormValueChanged) {
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
	getData(){
        if(environment.prototype){
        const params = {
          sid: this.id
        };
            this.requestService.getProtoTypingDataById(params).subscribe((res:any) =>{
                this.data = res;
                this.backupData = res;
                this.detailFormControls.patchValue(this.backupData);
            });
		}else if(this.id){
			const params = {
                sid: this.id
              };
            this.requestService.getById(params).subscribe((res:RequestBase[]) =>{
                this.data = res||{};
                this.backupData = res || {};
                if(this.backupData?.recDeleted)
                	delete this.backupData?.recDeleted;
                	 this.formatRawData();
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
	onwfAssign(){
	const params = {id:this.id}
	this.requestService.sslWorkflowAssign(params).subscribe((res:any)=>{
		this.showMessage({ severity: 'success', summary: '', detail: 'Record Updated Successfully' });
		if(Object.keys(this.mandatoryFields).length > 0){
			this.clearValidations(this.mandatoryFields);
		}
		this.onInit();
	},error=>{
		if(Object.keys(this.mandatoryFields).length > 0)
			this.clearValidations(this.mandatoryFields);
	})
}
	onwfApproveToLeader(){
	const params = {id:this.id}
	this.requestService.sslWorkflowApproveToLeader(params).subscribe((res:any)=>{
		this.showMessage({ severity: 'success', summary: '', detail: 'Record Updated Successfully' });
		if(Object.keys(this.mandatoryFields).length > 0){
			this.clearValidations(this.mandatoryFields);
		}
		this.onInit();
	},error=>{
		if(Object.keys(this.mandatoryFields).length > 0)
			this.clearValidations(this.mandatoryFields);
	})
}
	onBack(){
	this.messageService.clear();
	const UsableFields = Object.keys(this.detailFormControls.getRawValue());
    const fields = Object.keys(this.backupData || {});
    const technicalFields = fields.filter(function (obj) { return UsableFields.indexOf(obj) == -1; });
    if (this.appUtilBaseService.isEqualIgnoreCase(this.backupData, this.detailFormControls.getRawValue(), technicalFields, true) || (fields.length <= 0)) {
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
	onwfCancel(){
	const params = {id:this.id}
	this.requestService.sslWorkflowCancel(params).subscribe((res:any)=>{
		this.showMessage({ severity: 'success', summary: '', detail: 'Record Updated Successfully' });
		if(Object.keys(this.mandatoryFields).length > 0){
			this.clearValidations(this.mandatoryFields);
		}
		this.onInit();
	},error=>{
		if(Object.keys(this.mandatoryFields).length > 0)
			this.clearValidations(this.mandatoryFields);
	})
}
	onwfDemoteToScheduler(){
	const params = {id:this.id}
	this.requestService.sslWorkflowDemoteToScheduler(params).subscribe((res:any)=>{
		this.showMessage({ severity: 'success', summary: '', detail: 'Record Updated Successfully' });
		if(Object.keys(this.mandatoryFields).length > 0){
			this.clearValidations(this.mandatoryFields);
		}
		this.onInit();
	},error=>{
		if(Object.keys(this.mandatoryFields).length > 0)
			this.clearValidations(this.mandatoryFields);
	})
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
	onwfSubmitToApprover(){
	const params = {id:this.id}
	this.requestService.sslWorkflowSubmitToApprover(params).subscribe((res:any)=>{
		this.showMessage({ severity: 'success', summary: '', detail: 'Record Updated Successfully' });
		if(Object.keys(this.mandatoryFields).length > 0){
			this.clearValidations(this.mandatoryFields);
		}
		this.onInit();
	},error=>{
		if(Object.keys(this.mandatoryFields).length > 0)
			this.clearValidations(this.mandatoryFields);
	})
}
	onInnerListAction(btn:any){
        
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
        }
        else {
          if (ele?.field === this.workFlowField && !ele?.multipleValues) {
            this.detailFormControls.get(this.workFlowField)?.patchValue(this.workFlowInitialState);
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
