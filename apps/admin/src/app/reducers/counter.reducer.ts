import { CounterActionTypes, CounterActions } from '../actions/counter.actions';


export interface State {
  amount: number;
  step: number;
  saving: boolean;
}

export const initialState: State = {
  amount: 0,
  step: 1,
  saving: false
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
    case CounterActionTypes.StepSaving:
      return {
        ...state,
        saving: true
      };
    case CounterActionTypes.StepSaved:
      return {
        ...state,
        saving: false
      };
    default:
      return state;
  }
}

// SELEKTORY
export const selectAmount = (state: State) => state.amount;
export const selectStep = (state: State) => state.step;
export const selectSaving = (state: State) => state.saving;
