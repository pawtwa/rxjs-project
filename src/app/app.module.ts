import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PromisesComponent } from './basic/promises.component';
import { BasicIntroComponent } from './basic/intro.component';
import { OperatorsComponent } from './operators/operators.component';
import { RouteS2aPipe } from './route-s2a.pipe';
import { ObservableComponent } from './basic/observable.component';
import { ListComponent } from './list/list.component';
import { DragAndDropComponent } from './example/drag-and-drop.component';
import { AutocompleteComponent } from './example/autocomplete.component';
import { CallbackComponent } from './basic/callbacks.component';
import { PipeComponent } from './basic/pipe.component';
import { CreateComponent } from './basic/create.component';
import { SubjectComponent } from './basic/subject.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    CallbackComponent,
    PromisesComponent,
    BasicIntroComponent,
    OperatorsComponent,
    RouteS2aPipe,
    ObservableComponent,
    DragAndDropComponent,
    ListComponent,
    AutocompleteComponent,
    PipeComponent,
    CreateComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
