import React from 'react';
// import './style.css';

export default class Button extends React.Component {
  render() {
    const { text, className, ...elProps } = this.props;

    return (
      <button className={className || 'Button'} {...elProps}>
        <style jsx>{`
        input[type="submit"]:hover, button {
          padding: 7px 5px;
        }

        input[type="submit"]:hover, button:hover {
          cursor: pointer;
        }
        `}</style>
        {text}
      </button>
    );
  }
}
