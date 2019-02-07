import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NodejsComponent } from './nodejs/nodejs.component';

const routes: Routes = [{
  path: '',
  component: NodejsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NodejsRoutingModule { }
