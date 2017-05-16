import React from 'react';
import ReactDOM from 'react-dom';

export default class SearchBar extends React.Component {
  handleOnlyLikeKidsChkChange = e => {
      if ( typeof this.props.onOnlyLikeKidsChkChange === 'function'){
          this.props.onOnlyLikeKidsChkChange( e.target.checked );
      }
  };

  handleNameSearchChange = e => {
      if ( typeof this.props.onNameSearchChange === 'function'){
          this.props.onNameSearchChange( e.target.value );
      }
  };
  render() {
        return <div className="blue">
            <input type="text"
                   onChange={this.handleNameSearchChange}
                   value={this.props.nameSearch}
            /><br/><br/>
            <input type="checkbox"
                   id="onlyCatsThatLikeKidsChk"
                   onChange={this.handleOnlyLikeKidsChkChange}
                   checked={this.props.onlyLikeKids}
            />
            <label htmlFor="onlyCatsThatLikeKidsChk">Only show cats that like kids</label>
        </div>;
    }
}
