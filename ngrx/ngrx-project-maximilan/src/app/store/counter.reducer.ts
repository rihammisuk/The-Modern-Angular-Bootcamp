import { createReducer } from '@ngrx/store';

const initialState = 0;

// export const counterReducer = createReducer(initialState);

//Can create reducer like this
export function counterReducer(state = initialState) {
  return state;
}
