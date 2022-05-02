import { Query } from '@datorama/akita';
import { TodoState, TodoStore } from './todo.store';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

export class TodoQuery extends Query<TodoState> {
  constructor(
    protected todoStore: TodoStore
  ) {
    super(todoStore);
  }

  getTodos(): Observable<Todo[]> {
    return this.select(state => {

      console.log('state.data:', state.data);

      return state.data;
    });
  }

  getLoaded(): Observable<boolean> {
    return this.select(state => {
      console.log('state.isLoaded:', state.sisLoaded);

      return state.isLoaded;
    });
  }

  getLoading(): Observable<boolean> {
    return this.selectLoading();
  }
}
