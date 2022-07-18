import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppLayoutBaseService } from '@baseapp/app-layout/app-layout.service.base';
import { PrototypeVariables } from './auth/prototype.variables';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '@env/environment';
import { LoaderService } from './loader.service';

export class AppBaseComponent {
  title = '';
  blocked = false;
  //appId : string = PrototypeVariables.APP_ID;
  //prototypeUrl = new URL(PrototypeVariables.DESIGN_STUDIO_URL).origin;
  //url: string = `${this.prototypeUrl}?appId=${this.appId}`;
  isPrototype = environment.prototype;
  //safeSrc: SafeResourceUrl | undefined;
  constructor(
    public translate: TranslateService, public bs: AppLayoutBaseService, public sanitizer: DomSanitizer, public loaderService: LoaderService,
  ) {
    this.translate.use('en')
  }

  onInit(): void {
    this.bs.setAppTitle();
    this.bs.setAppLogo();
    this.loaderService.spinnerChanges.subscribe(res=>{
      this.blocked = res;
    })

    //this.url = this.url.replace("http://", "https://");
    //this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    
  
  }
}
