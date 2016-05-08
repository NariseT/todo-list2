import * as React from 'react' 
import { PropTypes } from 'react'
import Todo from './Todo'

export interface TodoListProps extends React.Props<any> {
  todos: {id: number, completed: boolean, text: string}[],
  onTodoClick: any
}

export default class TodoList extends React.Component<TodoListProps, any> {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => this.props.onTodoClick(todo.id)}
          />
        )}
      </ul>
    )
  }
}
