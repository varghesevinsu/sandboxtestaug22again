import {Routes } from '@angular/router';
import { AppLayoutComponent } from '@app/app-layout/app-layout.component';
import { AppLandingPageComponent } from '@app/app-landing-page/app-landing-page.component';
import { AuthenticationResolver } from '@app/auth/authentication.resolver';
import { LoginDetailComponent } from '@app/auth/login/login.component';

export const routes: Routes = [  
  {
    path: 'landing',
    component: AppLandingPageComponent
  },
  {
    path: '',
    component: AppLayoutComponent,
    resolve:{authResolver:AuthenticationResolver},
    children: [
          {
        path: 'applicationuser',
        loadChildren: () => import('@app/application-user/application-user.module').then(m => m.ApplicationUserModule)
      },
      {
        path: 'services',
        loadChildren: () => import('@app/services/services.module').then(m => m.ServicesModule)
      },
      {
        path: 'manpower',
        loadChildren: () => import('@app/manpower/manpower.module').then(m => m.ManpowerModule)
      },
      {
        path: 'tool',
        loadChildren: () => import('@app/tool/tool.module').then(m => m.ToolModule)
      },
      {
        path: 'lab',
        loadChildren: () => import('@app/lab/lab.module').then(m => m.LabModule)
      },
      {
        path: 'placeofdev',
        loadChildren: () => import('@app/place-of-dev/place-of-dev.module').then(m => m.PlaceOfDevModule)
      },
      {
        path: 'projecttype',
        loadChildren: () => import('@app/project-type/project-type.module').then(m => m.ProjectTypeModule)
      },
      {
        path: 'tooldesigntype',
        loadChildren: () => import('@app/tool-design-type/tool-design-type.module').then(m => m.ToolDesignTypeModule)
      },
      {
        path: 'userguide',
        loadChildren: () => import('@app/user-guide/user-guide.module').then(m => m.UserGuideModule)
      },
      {
        path: 'request',
        loadChildren: () => import('@app/request/request.module').then(m => m.RequestModule)
      },
      {
        path: 'history',
        loadChildren: () => import('@app/history/history.module').then(m => m.HistoryModule)
      },
      {
        path: 'status',
        loadChildren: () => import('@app/status/status.module').then(m => m.StatusModule)
      },
      {
        path: 'delegation',
        loadChildren: () => import('@app/delegation/delegation.module').then(m => m.DelegationModule)
      }
   	]
  }
];