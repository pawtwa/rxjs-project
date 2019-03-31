import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCounter from './counter.reducer';
import * as fromWiki from './wiki.reducer';

export interface State {
  counter: fromCounter.State;
  wiki: fromWiki.State;
}

export const reducers: ActionReducerMap<State> = {
  counter: fromCounter.reducer,
  wiki: fromWiki.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
