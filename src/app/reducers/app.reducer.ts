import { User } from '../login/app.model';
import { Action } from '@ngrx/store';

export const ADD_USER = 'ADD_USER';

export function addUserReducer(state: User[] = [], action) {
console.log('Inside Reducer:' , state , action);
  switch (action.type) {
    case ADD_USER:
        console.log('Add User Case');
        return [state, action.payload];
    default:
        return state;
    }
}