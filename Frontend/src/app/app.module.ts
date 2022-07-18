import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppBaseModule} from '@baseapp/app.base.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationResolver } from './auth/authentication.resolver';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppBaseModule,
    AppRoutingModule
  ],
  providers: [AuthenticationResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
