import React, { Component } from 'react';
import './App.scss';
import PageLayout from './Component/PageLayout';
import { BrowserRouter as Router, Route} from "react-router-dom";
import ProfilePage from './Component/PokePage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router basename="/PokeReact">
            {/* <Route path="/" exact component={PageLayout} change={this.handleIdChange} id={this.state.id}/> */}
            <Route path="/" exact component={PageLayout}/>
            <Route path="/poke/:id" component={ProfilePage}/>
        </Router>

      </div>
    );
  }
}

export default App;
