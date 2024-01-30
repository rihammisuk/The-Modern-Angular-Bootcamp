// toy.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as ToyActions from './toy.actions';
import { Toy } from './Toy';

// Define initial state
export const initialState: Toy[] = [];

// Create the reducer function
export const toyReducer = createReducer(
  initialState,

  // Handling the "Add Toy" action
  on(ToyActions.addToy, (state, { toy }) => {
    return [...state, toy]; // Add the new toy to the state
  }),

  // Handling the "Remove Toy" action
  on(ToyActions.removeToy, (state, { id }) => {
    return state.filter((toy) => toy.id !== id); // Remove the toy with the provided ID
  })
);
