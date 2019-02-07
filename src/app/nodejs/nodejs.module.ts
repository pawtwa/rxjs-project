import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NodejsRoutingModule } from './nodejs-routing.module';
import { NodejsNavComponent } from './nodejs-nav/nodejs-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule } from '@angular/material';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NodejsNavComponent, LoginFormComponent],
  imports: [
    CommonModule,
    NodejsRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class NodejsModule { }
