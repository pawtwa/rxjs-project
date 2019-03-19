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
  MatProgressSpinnerModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatMenuModule
} from '@angular/material';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentsComponent } from './pages/comments/comments.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [NodejsNavComponent, CommentsComponent, PhotosComponent, LoginComponent, RegisterComponent, ProfileComponent],
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
    MatProgressButtonsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule
  ]
})
export class NodejsModule { }
