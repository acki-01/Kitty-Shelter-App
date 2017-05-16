import React from 'react';
import ReactDOM from 'react-dom';
import CategoryRow from './CategoryRow.jsx';
import CatRow from './CatRow.jsx';
let style={
  border: '1px solid green'
}
export default class CatTable extends React.Component {
  render(){
    var rows = [];
    var lastCategory = null;
    this.props.kitties.forEach(function(kitty) {
            if (kitty.category !== lastCategory) {
        rows.push(<CategoryRow category= { kitty.category }  key= { kitty.category } />);
      }
      rows.push(<CatRow kitty={kitty} key={kitty.name} />);
      lastCategory = kitty.category;
    });
    return <table className="green">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr></thead>
        <tbody>{rows}</tbody>
      </table>;
  }
}
