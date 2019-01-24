import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTES } from './routes';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      redirectTo: 'rxjs',
      pathMatch: 'full'
    }, {
      path: 'rxjs',
      component: RxjsComponent,
      children: ROUTES
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
