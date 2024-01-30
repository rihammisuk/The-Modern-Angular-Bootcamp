// toy.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Toy } from './Toy';

export const selectToyState = createFeatureSelector<Toy[]>('toys');

export const selectToys = createSelector(selectToyState, (toys: Toy[]) => toys);
