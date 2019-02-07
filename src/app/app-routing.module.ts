import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsComponent } from './rxjs/rxjs.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'rxjs',
      loadChildren: './rxjs/rxjs.module#RxjsModule'
    },
    {
      path: 'nodejs',
      loadChildren: './nodejs/nodejs.module#NodejsModule'
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
