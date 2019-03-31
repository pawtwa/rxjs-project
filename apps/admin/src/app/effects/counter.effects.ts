import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CounterActionTypes, StepCounters, StepSavedCounters, StepSavingCounters } from '../actions/counter.actions';
import { map, switchMap, startWith, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of, EMPTY } from 'rxjs';



@Injectable()
export class CounterEffects {

  @Effect({
    dispatch: true
  })
  save$ = this.actions$.pipe(
    ofType(CounterActionTypes.Step),
    switchMap((action: StepCounters) => {
      return this.http.get('/api/long', {
        params: {
          step: action.payload.step.toString()
        }
      }).pipe(
        map(res => new StepSavedCounters()),
        startWith(new StepSavingCounters()),
        catchError(err => of(new StepSavedCounters()))
      );
      // return {
      //   type: 'from effect action',
      //   payload: {}
      // }
    })
  );

  constructor(private actions$: Actions, private http: HttpClient) { }

}
