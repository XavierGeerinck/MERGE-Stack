import React from 'react';

const placeholderColor = '999999'

const img = `http://placehold.it/250/${placeholderColor}/ffffff?text=Placeholder`

export default class ListView extends React.Component {
  render() {
    return (
      <div className="list">
        <ul className="list-group">
          {this.props.data.map((tile, index) => (
            <li className="list-group-item media clearfix"
              key={index}
              title={tile.title}>
              <img src={tile.img || img} className="pull-left" />
              <div className="media-body">
                <h3>{tile.title}</h3>
                <p className="lead">{tile.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
