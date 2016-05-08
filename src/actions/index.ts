import * as types from '../constants/index';

let nextTodoId = 0
export const addTodo = (text: string) => {
  return {
    type: types.ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const toggleTodo = (id: number) => {
  return {
    type: types.TOGGLE_TODO,
    id
  }
}

export const setVisibilityFilter = (filter: string) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  }
}
