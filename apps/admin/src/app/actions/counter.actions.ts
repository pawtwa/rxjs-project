import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  Up = '[Counter] Up',
  Down = '[Counter] Down',
  Step = '[Counter] Step',
}

export class UpCounters implements Action {
  readonly type = CounterActionTypes.Up;
}

export class DownCounters implements Action {
  readonly type = CounterActionTypes.Down;
}

export class StepCounters implements Action {
  readonly type = CounterActionTypes.Step;

  constructor(public payload: { step: number }) { }
}

export type CounterActions = UpCounters | DownCounters | StepCounters;
