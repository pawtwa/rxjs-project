import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NodejsRoutingModule } from './nodejs-routing.module';
import { NodejsComponent } from './nodejs/nodejs.component';

@NgModule({
  declarations: [NodejsComponent],
  imports: [
    CommonModule,
    NodejsRoutingModule
  ]
})
export class NodejsModule { }
