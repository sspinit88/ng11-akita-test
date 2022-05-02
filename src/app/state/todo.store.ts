import { Todo } from '../models/todo.model';
import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface TodoState {
  data: Todo[];
  isLoaded: boolean;
}


export const createInitialState = (): TodoState => {
  return {
    data: [],
    isLoaded: false,
  };
};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'todo' })
export class TodoStore extends Store<TodoState> {
  constructor() {
    super(createInitialState());
  }
}
