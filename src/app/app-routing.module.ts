import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      // component: HomeComponent,
      redirectTo: 'nodejs',
      pathMatch: 'full'
    },
    {
      path: 'rxjs',
      loadChildren: './rxjs/rxjs.module#RxjsModule'
    },
    {
      path: 'nodejs',
      loadChildren: './nodejs/nodejs.module#NodejsModule'
    }
  ], {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
