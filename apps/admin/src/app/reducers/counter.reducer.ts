import { CounterActionTypes, CounterActions } from '../actions/counter.actions';


export interface State {
  amount: number;
  step: number;
}

export const initialState: State = {
  amount: 0,
  step: 1
};

export function reducer(state = initialState, action: CounterActions): State {
  switch (action.type) {
    case CounterActionTypes.Up:
      return {
        ...state,
        amount: state.amount + state.step
      };
    case CounterActionTypes.Down:
      return {
        ...state,
        amount: state.amount - state.step
      };
    case CounterActionTypes.Step:
      return {
        ...state,
        step: action.payload.step
      };
    default:
      return state;
  }
}
