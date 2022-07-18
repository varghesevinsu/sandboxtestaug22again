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
import { HistoryService } from '@baseapp/history/history/history.service';
import { Component, OnInit } from '@angular/core';
import { HistoryDetailBaseComponent } from '@baseapp/history/history/history-detail/history-detail.base.component';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-history-detail',
  templateUrl: '../../../../../base/app/history/history/history-detail/history-detail.component.html',
  styleUrls: ['./history-detail.scss']
})
export class HistoryDetailComponent extends HistoryDetailBaseComponent implements OnInit {
 
  constructor(public override historyService: HistoryService, public override appUtilBaseService: AppUtilBaseService, public override translateService: TranslateService, public override messageService: MessageService, public override confirmationService: ConfirmationService, public override domSanitizer: DomSanitizer, public override bsModalService: BsModalService, public override activatedRoute: ActivatedRoute, public override appBaseService: AppBaseService, public override router: Router, public override appGlobalService: AppGlobalService, public override location: Location) {
    super(historyService, appUtilBaseService, translateService, messageService, confirmationService, domSanitizer, bsModalService, activatedRoute, appBaseService, router, appGlobalService, location);
  }
	
  ngAfterViewInit(): void {
    this.onAfterViewInit()
  }

  ngOnInit(): void {
    super.onInit();
  }
 

}