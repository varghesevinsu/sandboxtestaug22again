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
import { Component, OnInit } from '@angular/core';
import { PlaceOfDevListBaseComponent } from '@baseapp/place-of-dev/place-of-dev/place-of-dev-list/place-of-dev-list.base.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PlaceOfDevService } from '@baseapp/place-of-dev/place-of-dev/place-of-dev.service';

@Component({
  selector: 'app-place-of-dev-list',
  templateUrl: '../../../../../base/app/place-of-dev/place-of-dev/place-of-dev-list/place-of-dev-list.component.html',
  styleUrls: ['./place-of-dev-list.scss']
})
export class PlaceOfDevListComponent extends PlaceOfDevListBaseComponent implements OnInit {
 
  constructor(public override placeOfDevService: PlaceOfDevService, public override appUtilBaseService: AppUtilBaseService, public override translateService: TranslateService, public override messageService: MessageService, public override confirmationService: ConfirmationService, public override domSanitizer: DomSanitizer, public override bsModalService: BsModalService, public override activatedRoute: ActivatedRoute, public override renderer2: Renderer2, public override router: Router) {
    super(placeOfDevService, appUtilBaseService, translateService, messageService, confirmationService, domSanitizer, bsModalService, activatedRoute, renderer2, router);
  }
	
  ngAfterViewInit(): void {
    this.onAfterViewInit()
  }

  ngOnInit(): void {
    super.onInit();
  }
 



}