import { ActionReducerMap } from '@ngrx/store';

import { Todo } from './todos/models/todo.model';

import { todoReducer } from './todos/todo.reducer';

import { filtroReducer } from './filtro/filtro.reducer';
import { filtrosValidos } from './filtro/filtro.actions';



export interface AppState { // para ver el estado general de la app
    todos: Todo[],
    filtro: filtrosValidos
}



export const appReducers: ActionReducerMap<AppState> = { /* ActionReducerMap necesita saber que tipo de estado va a manejar  */
    todos: todoReducer,
    filtro: filtroReducer
}