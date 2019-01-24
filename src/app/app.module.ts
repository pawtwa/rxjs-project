import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PromisesComponent } from './basic/promises.component';
import { BasicIntroComponent } from './basic/intro.component';
import { SwitchMapComponent } from './operators/switch-map.component';
import { RouteS2aPipe } from './route-s2a.pipe';
import { ObservableComponent } from './basic/observable.component';
import { ListComponent } from './list/list.component';
import { DragAndDropComponent } from './basic/drag-and-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    PromisesComponent,
    BasicIntroComponent,
    SwitchMapComponent,
    RouteS2aPipe,
    ObservableComponent,
    DragAndDropComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
