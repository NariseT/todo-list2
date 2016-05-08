import * as React from 'react'
import { PropTypes } from 'react'

export interface TodoProps extends React.Props<any> {
  onClick: any;
  completed: boolean;
  text: string;
}

export default class Todo extends React.Component<TodoProps, any> {
  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={ {
            textDecoration: this.props.completed ? 'line-through' : 'none'
        } }
      >
        {this.props.text}
      </li>
    );
  }
}
