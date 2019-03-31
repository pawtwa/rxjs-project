import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  Up = '[Counter] Up',
  Down = '[Counter] Down'
}

export class UpCounters implements Action {
  readonly type = CounterActionTypes.Up;
}

export class DownCounters implements Action {
  readonly type = CounterActionTypes.Up;
}

export type CounterActions = UpCounters | DownCounters;
