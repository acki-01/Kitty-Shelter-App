import React from 'react';
import ReactDOM from 'react-dom';

export default class CategoryRow extends React.Component {
  render(){
    return <tr>
          <th className="turquoise" colSpan={2}>{this.props.category}</th>
      </tr>
  }
}
