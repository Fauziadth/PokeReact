import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import ProfileBox from './Component/pokeProfile';
import PageLayout from './Component/PageLayout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageLayout/>
        {/* <ProfileBox/> */}
      </div>
    );
  }
}

export default App;
