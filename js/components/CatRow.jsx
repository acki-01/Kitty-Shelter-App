import React from 'react';
import ReactDOM from 'react-dom';

export default class CatRow extends React.Component {
  render(){
    var name = this.props.kitty.likesKids ?
       this.props.kitty.name : <span style={{color: 'red'}}> {this.props.kitty.name} </span>;
    return <tr>
      <td className="red">{name}</td>
      <td className="red">{this.props.kitty.age}</td>
    </tr>;
  }
}
