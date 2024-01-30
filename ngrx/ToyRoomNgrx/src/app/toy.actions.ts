import { createAction, props } from '@ngrx/store';
import { Toy } from './Toy';

export const addToy = createAction('[Toy] Add Toy', props<{ toy: Toy }>());
export const removeToy = createAction(
  '[Toy] Remove Toy',
  props<{ id: number }>()
);

// import { createAction, props } from '@ngrx/store';
// import { Toy } from './Toy';

// export const addToy = createAction('[Toy] Add Toy', props<{ toy: Toy }>());
// export const removeToy = createAction('[Toy] Remove Toy', props<{ id: number }>());
