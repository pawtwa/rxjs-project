import { Action } from '@ngrx/store';
import { WikiResult } from '../reducers/wiki.reducer';

export enum WikiActionTypes {
  QueryWikis = '[Wiki] QueryWikis',
  RequestSuccessWikis = '[Wiki] RequestSuccessWikis',
  RequestStartsWikis = '[Wiki] RequestStartsWikis'
}

export class QueryWikis implements Action {
  readonly type = WikiActionTypes.QueryWikis;

  constructor(public payload: { query: string }) { }
}

export class RequestSuccessWikis implements Action {
  readonly type = WikiActionTypes.RequestSuccessWikis;

  constructor(public payload: { results: WikiResult[] }) { }
}

export class RequestStartsWikis implements Action {
  readonly type = WikiActionTypes.RequestStartsWikis;
}


export type WikiActions = QueryWikis | RequestSuccessWikis | RequestStartsWikis;
