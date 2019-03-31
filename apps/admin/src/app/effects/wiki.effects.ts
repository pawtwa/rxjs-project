import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { WikiActionTypes, RequestSuccessWikis, QueryWikis, RequestStartsWikis } from '../actions/wiki.actions';
import { switchMap, map, filter, startWith, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { WikiResult } from '../reducers/wiki.reducer';



@Injectable()
export class WikiEffects {

  @Effect({
    dispatch: true
  })
  save$ = this.actions$.pipe(
    ofType(WikiActionTypes.QueryWikis),
    debounceTime(500),
    filter((action: QueryWikis) => action.payload.query.length > 3),
    map((action: QueryWikis) => action.payload.query),
    distinctUntilChanged(),
    switchMap((query: string) => {
      return this.http.get('/api/wikipedia', {
        params: {
          search: query
        }
      }).pipe(
        map((res: WikiResult[]) => new RequestSuccessWikis({ results: res })),
        startWith(new RequestStartsWikis())
      );
    })
  );

  constructor(private actions$: Actions, private http: HttpClient) { }

}
