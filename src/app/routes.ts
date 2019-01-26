import { Routes } from '@angular/router';
import { PromisesComponent } from './basic/promises.component';
import { BasicIntroComponent as IntroComponent } from './basic/intro.component';
import { SwitchMapComponent } from './operators/switch-map.component';
import { ObservableComponent } from './basic/observable.component';
import { DragAndDropComponent } from './example/drag-and-drop.component';
import { AutocompleteComponent } from './example/autocomplete.component';
import { PipeComponent } from './basic/pipe.component';
import { CreateComponent } from './basic/create.component';
import { SubjectComponent } from './basic/subject.component';

export const ROUTES: Routes = [{
  path: '',
  redirectTo: 'observable',
  pathMatch: 'full'
}, {
  path: 'intro',
  component: IntroComponent
}, {
  path: 'callbacks',
  component: PromisesComponent
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
  path: 'operator/switch-map',
  component: SwitchMapComponent
}, {
  path: 'example/drag-and-drop',
  component: DragAndDropComponent
}, {
  path: 'example/autocomplete',
  component: AutocompleteComponent
}];
