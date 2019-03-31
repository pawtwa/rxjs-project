import { WikiActionTypes, WikiActions } from '../actions/wiki.actions';

export interface WikiResult {
  title: string;
}

export interface State {
  query: string;
  results: WikiResult[];
  loading: boolean;
}

export const initialState: State = {
  query: '',
  results: [],
  loading: false
};

export function reducer(state = initialState, action: WikiActions): State {
  switch (action.type) {
    case WikiActionTypes.QueryWikis: {
      return {
        ...state,
        query: action.payload.query
      }
    }
    case WikiActionTypes.RequestStartsWikis: {
      return {
        ...state,
        results: [],
        loading: true
      }
    }
    case WikiActionTypes.RequestSuccessWikis: {
      return {
        ...state,
        query: '',
        results: action.payload.results,
        loading: false
      }
    }
    default:
      return state;
  }
}
