import React from 'react';
// import './Form.css';

export default class Form extends React.Component {
  render() {
    return (
      <div className="FormBlock">
        <form method={this.props.method || 'POST'} action={this.props.action || ''}>
          {this.props.children}
        </form>
      </div>
    );
  }
}
 