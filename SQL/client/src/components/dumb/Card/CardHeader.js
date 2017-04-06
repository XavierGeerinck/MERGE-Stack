import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <div className="Card-Header">
        <style jsx>{`
        .Card-Header {
          height: 64px;
          padding: 14px 20px;

          display: flex;
          align-items: stretch;
          align-items: center;
        }

        .Card-Header .Author {
          flex-grow: 1;
          flex-shrink: 1;
          display: block;
        }

        .Card-Header .Author a {
          color: #262626;
          font-weight: bold;
          text-decoration: none;
          text-transform: none;
          font-size: 15px;
        }

        .Card-Header .TimeAgo a {
          text-decoration: none;
          color: #999;
          font-size: 15px;
        }  
        `}</style>
        {this.props.children}
      </div>
    );
  }
}
