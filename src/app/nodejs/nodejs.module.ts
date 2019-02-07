import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NodejsRoutingModule } from './nodejs-routing.module';
import { NodejsNavComponent } from './nodejs-nav/nodejs-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
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
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatProgressButtonsModule
  ]
})
export class NodejsModule { }
