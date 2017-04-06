import React from 'react';

const placeholderColor = '999999'

const img = `http://placehold.it/250/${placeholderColor}/ffffff?text=Placeholder`

export default class GridView extends React.Component {
  render() {
    return (
      <div className="grid">
        {this.props.data.map((tile, index) => (
          <div className="grid-item" key={index} >
            <img src={tile.img || img} />
            <h5>{tile.title}</h5>
            <small>{tile.body}</small>
          </div>
        ))}
      </div>
    );
  }
}
