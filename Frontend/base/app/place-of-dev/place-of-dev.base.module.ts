import { NgModule } from '@angular/core';
import { SharedBaseModule } from '@baseapp/shared/shared.base.module';
import { WidgetsBaseModule } from '@baseapp/widgets/widgets.base.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';
import { PlaceOfDevListComponent } from '@app/place-of-dev/place-of-dev/place-of-dev-list/place-of-dev-list.component';
import { PlaceOfDevDetailComponent } from '@app/place-of-dev/place-of-dev/place-of-dev-detail/place-of-dev-detail.component';

@NgModule({
  declarations: [
PlaceOfDevListComponent,
PlaceOfDevDetailComponent
],
imports: [
SharedBaseModule,
WidgetsBaseModule
],

exports: [
SharedBaseModule,
WidgetsBaseModule,
PlaceOfDevListComponent,
PlaceOfDevDetailComponent
],

providers: [
BsModalService,
CanDeactivateGuard
],
  
})
export class PlaceOfDevBaseModule { }