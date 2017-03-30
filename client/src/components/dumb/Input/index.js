import React from 'react';

export default class Input extends React.Component {
  render() {
    return (
        <div>
          <style jsx>{`
          input[type="text"], input[type="password"], input[type="email"] {
            padding: 9px 7px;
            width: 100%;
            display: block;
            
            margin-bottom: 10px;
          }

          input[type="text"]:last-child, input[type="password"]:last-child, input[type="email"]:last-child {
            margin-bottom: 0px;
          }
          `}</style>
          <input {...this.props} />
        </div>
      );
  }
}
