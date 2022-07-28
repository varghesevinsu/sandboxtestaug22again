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
import { ServicesDetailBaseComponent } from '@baseapp/services/services/services-detail/services-detail.base.component';
import { ServicesService } from '@baseapp/services/services/services.service';
import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-services-detail',
  templateUrl: '../../../../../base/app/services/services/services-detail/services-detail.component.html',
  styleUrls: ['./services-detail.scss']
})
export class ServicesDetailComponent extends ServicesDetailBaseComponent implements OnInit {
 
  constructor(public override servicesService: ServicesService, public override appUtilBaseService: AppUtilBaseService, public override translateService: TranslateService, public override messageService: MessageService, public override confirmationService: ConfirmationService, public override dialogService: DialogService, public override domSanitizer: DomSanitizer, public override bsModalService: BsModalService, public override activatedRoute: ActivatedRoute, public override appBaseService: AppBaseService, public override router: Router, public override appGlobalService: AppGlobalService, public override baseService: BaseService, public override location: Location) {
    super(servicesService, appUtilBaseService, translateService, messageService, confirmationService, dialogService, domSanitizer, bsModalService, activatedRoute, appBaseService, router, appGlobalService, baseService, location);
  }
	
  ngAfterViewInit(): void {
    this.onAfterViewInit()
  }

  ngOnInit(): void {
    super.onInit();
  }
 
  override autoSuggestSearchrespLeader(event?: any, col?: any,url?:any){
    const urlpath = `/rest/applicationusers/autosuggest/leader`
    super.autoSuggestSearchrespLeader(event,col,urlpath);
  }


  override autoSuggestSearchrespScheduler(event?: any, col?: any,url?:any) {
    const urlpath = `/rest/applicationusers/autosuggest/scheduler`
    super.autoSuggestSearchrespScheduler(event,col,urlpath);

  }






}