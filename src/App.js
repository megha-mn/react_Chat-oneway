import React, { Component } from 'react';
import './App.css';
// import {NewForm} from './NewForm';
import {Chat} from './Container/Chat'


class App extends Component {
 
  render() {
    return (
      <div>
        {/* <NewForm /> */}
        <Chat />
      </div>    
    );    
  }
}

export default App;


