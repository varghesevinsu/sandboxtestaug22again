import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '@baseapp/app-routing.base.module'; 

routes.unshift({
  path: '',
  redirectTo: 'requests/requestlist',
  pathMatch: 'full'
})

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
