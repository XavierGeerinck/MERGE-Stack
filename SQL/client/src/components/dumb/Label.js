import React from 'react';

export default class Label extends React.Component {
  render() {
    return (
      <label {...this.props}>{this.props.children}</label>
    );
  }
}
