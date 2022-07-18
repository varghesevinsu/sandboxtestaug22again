import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserGuideRoutingModule } from './user-guide-routing.module';
import { UserGuideBaseModule } from '@baseapp/user-guide/user-guide.base.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UserGuideBaseModule,
    UserGuideRoutingModule
    
  ],
  exports: [
      UserGuideBaseModule,
  ]

})
export class UserGuideModule  { }