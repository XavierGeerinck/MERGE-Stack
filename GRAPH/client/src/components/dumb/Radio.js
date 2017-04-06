import React from 'react';

export default class Radio extends React.Component {
  render() {
    return (
      <span><input {...this.props} />{this.props.text}</span>
    );
  }
}
