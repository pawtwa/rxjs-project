import { Action } from '@ngrx/store';
import { CounterActionTypes } from '../actions/counter.actions';


export interface State {
  amount: number;
}

export const initialState: State = {
  amount: 0
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case CounterActionTypes.Up:
      return {
        ...state,
        amount: ++state.amount
      };
    case CounterActionTypes.Down:
      return {
        ...state,
        amount: --state.amount
      };
    default:
      return state;
  }
}
