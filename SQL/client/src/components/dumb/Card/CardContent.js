import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div className="Card-Content">
        <style jsx>{`
        .Card-Content {
          font-size: 15px;
          padding: 20px;
        }  
        `}</style>
        {this.props.children}
      </div>
    );
  }
}
