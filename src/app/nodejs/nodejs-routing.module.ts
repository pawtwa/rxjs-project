import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NodejsNavComponent } from './nodejs-nav/nodejs-nav.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const routes: Routes = [{
  path: '',
  component: NodejsNavComponent,
  children: [
    {path: 'login', component: LoginFormComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NodejsRoutingModule { }

