import React from 'react';
import './CardFooter.css';

export default class Form extends React.Component {
  render() {
    return (
      <div className="Card-Footer">
        {this.props.children}
      </div>
    );
  }
}
