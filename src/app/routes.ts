import { Routes } from '@angular/router';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PromisesComponent } from './basic/promises.component';
import { BasicIntroComponent as IntroComponent } from './basic/intro.component';
import { SwitchMapComponent } from './operators/switch-map.component';
import { ObservableComponent } from './basic/observable.component';
import { DragAndDropComponent } from './basic/drag-and-drop.component';

export const ROUTES: Routes = [{
  path: '',
  redirectTo: 'observable',
  pathMatch: 'full'
}, {
  path: 'intro',
  component: IntroComponent
}, {
  path: 'observable',
  component: ObservableComponent
}, {
  path: 'promises-vs-callbacks',
  component: PromisesComponent
}, {
  path: 'operator/switch-map',
  component: SwitchMapComponent
}, {
  path: 'example/drag-and-drop',
  component: DragAndDropComponent
}];
