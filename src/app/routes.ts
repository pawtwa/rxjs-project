import { Routes } from '@angular/router';
import { PromisesComponent } from './basic/promises.component';
import { BasicIntroComponent as IntroComponent } from './basic/intro.component';
import { OperatorsComponent } from './operators/operators.component';
import { ObservableComponent } from './basic/observable.component';
import { DragAndDropComponent } from './example/drag-and-drop.component';
import { AutocompleteComponent } from './example/autocomplete.component';
import { PipeComponent } from './basic/pipe.component';
import { CreateComponent } from './basic/create.component';
import { SubjectComponent } from './basic/subject.component';
import { CallbackComponent } from './basic/callbacks.component';
import { NgrxComponent } from './example/ngrx.component';

export const ROUTES: Routes = [{
  path: '',
  redirectTo: 'observable',
  pathMatch: 'full'
}, {
  path: 'intro',
  component: IntroComponent
}, {
  path: 'callbacks',
  component: CallbackComponent
}, {
  path: 'promises',
  component: PromisesComponent
}, {
  path: 'observable',
  component: ObservableComponent
}, {
  path: 'create',
  component: CreateComponent
}, {
  path: 'subject',
  component: SubjectComponent
}, {
  path: 'pipe',
  component: PipeComponent
}, {
  path: 'operators',
  component: OperatorsComponent
}, {
  path: 'drag-and-drop',
  component: DragAndDropComponent
}, {
  path: 'autocomplete',
  component: AutocompleteComponent
}, {
  path: 'ngrx',
  component: NgrxComponent
}];
