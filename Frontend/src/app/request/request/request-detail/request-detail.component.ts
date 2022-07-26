import { BaseService } from '@baseapp/base.service';
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
import { AppService } from '@app/app.service';
import { RequestService } from '@baseapp/request/request/request.service';
import { Component, OnInit } from '@angular/core';
import { RequestDetailBaseComponent } from '@baseapp/request/request/request-detail/request-detail.base.component';
import { DialogService } from 'primeng/dynamicdialog';
import { Manpower } from '@app/manpower/manpower/manpower.model';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-request-detail',
  templateUrl: '../../../../../base/app/request/request/request-detail/request-detail.component.html',
  styleUrls: ['./request-detail.scss']
})
export class RequestDetailComponent extends RequestDetailBaseComponent implements OnInit {
 
  constructor(public override requestService: RequestService, public override appUtilBaseService: AppUtilBaseService, public override translateService: TranslateService, public override messageService: MessageService, public override confirmationService: ConfirmationService, public override dialogService: DialogService, public override domSanitizer: DomSanitizer, public override bsModalService: BsModalService, public override activatedRoute: ActivatedRoute, public override appBaseService: AppBaseService, public override router: Router, public override appGlobalService: AppGlobalService, public override baseService: BaseService, public override location: Location) {
    super(requestService, appUtilBaseService, translateService, messageService, confirmationService, dialogService, domSanitizer, bsModalService, activatedRoute, appBaseService, router, appGlobalService, baseService, location);
  }
	
  ngAfterViewInit(): void {
    this.onAfterViewInit()
  }

  ngOnInit(): void {
    super.onInit();
    this.handleChanges();
  }

  handleChanges()
  {
    let formControls = this.detailFormControls;

    let service = new AppService(this.baseService);

    let rate: number = 0;

    formControls.controls['leadPlaceOfDevelopment'].enable()

    formControls.controls['budget'].disable()

    formControls.controls['leadPlaceOfDevelopment'].valueChanges.subscribe((placeOfDev)=>{
       service.getManPowerByAll(formControls.controls['serviceType'].value,placeOfDev.siteCode, formControls.controls['currency'].value).subscribe(
        (manPower)=>{
            rate = manPower.rate
        }
       )
      formControls.controls['budget'].setValue(rate * formControls.controls['hoursManpower'].value + formControls.controls['additionalInformation'].value)
    })

    formControls.controls['hoursManpower'].valueChanges.subscribe(
      (event) => formControls.controls['budget'].setValue(rate * formControls.controls['hoursManpower'].value + formControls.controls['additionalInformation'].value)
    )

    formControls.controls['additionalInformation'].valueChanges.subscribe(
      (event) => formControls.controls['budget'].setValue(rate * formControls.controls['hoursManpower'].value + formControls.controls['additionalInformation'].value)
    )
  }

 
onValidateAction($event:any,$button:any){}






}