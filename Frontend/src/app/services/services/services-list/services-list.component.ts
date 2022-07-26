import { BaseService } from '@baseapp/base.service';
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
import { ServicesService } from '@baseapp/services/services/services.service';
import { ServicesListBaseComponent } from '@baseapp/services/services/services-list/services-list.base.component';
import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-services-list',
  templateUrl: '../../../../../base/app/services/services/services-list/services-list.component.html',
  styleUrls: ['./services-list.scss']
})
export class ServicesListComponent extends ServicesListBaseComponent implements OnInit {
 
  constructor(public override servicesService: ServicesService, public override appUtilBaseService: AppUtilBaseService, public override translateService: TranslateService, public override messageService: MessageService, public override confirmationService: ConfirmationService, public override dialogService: DialogService, public override domSanitizer: DomSanitizer, public override bsModalService: BsModalService, public override activatedRoute: ActivatedRoute, public override renderer2: Renderer2, public override router: Router, public override baseService: BaseService) {
    super(servicesService, appUtilBaseService, translateService, messageService, confirmationService, dialogService, domSanitizer, bsModalService, activatedRoute, renderer2, router, baseService);
  }
	
  ngAfterViewInit(): void {
    this.onAfterViewInit()
  }

  ngOnInit(): void {
    super.onInit();
  }
 




}