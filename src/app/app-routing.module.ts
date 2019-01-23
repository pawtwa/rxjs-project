import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PromisesComponent } from './basic/promises.component';
import { BasicIntroComponent } from './basic/basic-intro.component';
import { SwitchMapComponent } from './operators/switch-map.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'rxjs',
  pathMatch: 'full'
}, {
  path: 'rxjs',
  component: RxjsComponent,
  children: [{
    path: '',
    component: BasicIntroComponent
  }, {
    path: 'promises',
    component: PromisesComponent
  }, {
    path: 'operators',
    children: [{
      path: 'switch-map',
      component: SwitchMapComponent
    }]
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
