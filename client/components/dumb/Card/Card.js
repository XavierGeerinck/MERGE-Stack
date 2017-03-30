import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <div className="Card" href={this.props.link}>
        <style jsx>{`
        .Card:first-of-type {
          margin-top: 20px;
        }

        .Card {
          background-color: white;
          display: block;
          border: 1px solid #e6e6e6;
          border-radius: 3px;
          margin-bottom: 40px;
        }  
        `}</style>
        {this.props.children}
      </div>
    );
  }
}
