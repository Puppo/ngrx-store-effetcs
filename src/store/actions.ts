
export interface IAction<T> {
  type: string;
  payload: T;
}

export const ADD_TODO = '[Todo] Add Todo';
export const REMOVE_TODO = '[Todo] Remove Todo';

export class AddTodo<T> implements IAction<T> {
  readonly type = ADD_TODO;
  constructor(public payload: T) { }
}
export class RemoveTodo<T> implements IAction<T> {
  readonly type = REMOVE_TODO;
  constructor(public payload: T) { }
}
