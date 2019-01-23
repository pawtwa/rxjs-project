import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PromisesComponent } from './basic/promises.component';
import { BasicIntroComponent } from './basic/basic-intro.component';
import { SwitchMapComponent } from './operators/switch-map.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    PromisesComponent,
    BasicIntroComponent,
    SwitchMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
