import * as React from 'react'
import { PropTypes } from 'react'

export interface LinkProps extends React.Props<any> {
  active: boolean,
  children: any,
  onClick: any
}

export default class Link extends React.Component<LinkProps, any> {
  
  render() {
    if (this.props.active) {
      return (
        <span>{this.props.children}</span>
      )
    }
    return (
      <a href="#"
        onClick={e => {
          e.preventDefault()
          this.props.onClick()
        }}
      >
        {this.props.children}
      </a>
    )
  }
}
