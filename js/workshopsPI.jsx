import React from 'react';
import ReactDOM from 'react-dom';
import CatTable from './components/CatTable.jsx';
import SearchBar from './components/SearchBar.jsx';
require('../sass/style.scss');
var kitties = [
 {category: "male", age: "4", likesKids: true, name: "Fidel Catstro"},
 {category: "male", age: "9", likesKids: true, name: "Hairy Potter"},
 {category: "male", age: "2", likesKids: false, name: "Grumpy"},
 {category: "female", age: "1", likesKids: true, name: "Jude Paw"},
 {category: "female", age: "2", likesKids: false, name: "Lucifurr"},
 {category: "female", age: "3", likesKids: true, name: "Meowly Cyrus"}
];
class App extends React.Component {
     constructor( props ){
         super( props );

         this.state = {
             onlyLikeKids : false,
             nameSearch   : '',
         };
     }

     handleOnlyLikeKidsChkChange = onlyLikeKids => {
         this.setState({
             onlyLikeKids,
         });
     };

     handleNameSearchChange = nameSearch => {
         this.setState({
             nameSearch,
         });
     };

     render() {
         const kittiesFiltered = this.props.kitties.filter( kitty => {
             if ( this.state.onlyLikeKids && !kitty.likesKids ){
                 return false;
             }

             if ( this.state.nameSearch !== '' && kitty.name.toLowerCase().indexOf( this.state.nameSearch.toLowerCase() ) === -1 ){
                 return false;
             }

             return true;
         });

         return <div className="yellow">
             <SearchBar
                 onOnlyLikeKidsChkChange={this.handleOnlyLikeKidsChkChange}
                 onlyLikeKids={this.state.onlyLikeKids}
                 onNameSearchChange={this.handleNameSearchChange}
                 nameSearch={this.state.nameSearch}
             />
             <CatTable kitties={kittiesFiltered} />
         </div>;
     }
 }
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App kitties= {kitties}/>,
        document.getElementById('app')
    );
});
