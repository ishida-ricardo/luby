import { getItem } from '../repositories/localStorageRepository';
let nextTodoId = getItem('@luby::todos').length;

export const addTodo = (text: string) => ({
  type: 'ADD_TODO',
  id: ++nextTodoId,
  text
})

export const orderTodos = () => ({
  type: 'ORDER_TODOS'
})