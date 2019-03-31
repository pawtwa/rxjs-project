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


// SELEKTORY
export const selectCounter = (state: State) => state.counter;
export const selectCounterAmount = createSelector(selectCounter, fromCounter.selectAmount);
export const selectCounterStep = createSelector(selectCounter, fromCounter.selectStep);
export const selectCounterSaving = createSelector(selectCounter, fromCounter.selectSaving);

export const selectWiki = (state: State) => state.wiki;
export const selectWikiQuery = createSelector(selectWiki, fromWiki.selectQuery);
export const selectWikiResults = createSelector(selectWiki, fromWiki.selectResults);
export const selectWikiLoading = createSelector(selectWiki, fromWiki.selectLoading);

