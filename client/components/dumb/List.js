import React from 'react';
import ListView from './ListView';
import GridView from './GridView';

export default class List extends React.Component {
  render() {
    if (this.props.type == 'grid') {
      return (
        <div className="gutter-free clearfix">
          <GridView data={this.props.data} />
        </div>
      )
    } else {
      return (
        <div className="gutter-free clearfix">
          <ListView data={this.props.data} />
        </div>
      )
    }
  }
}
