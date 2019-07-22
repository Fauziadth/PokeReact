import React, { Component } from 'react';
import './App.scss';
import PageLayout from './Component/PageLayout';
import { BrowserRouter as Router, Route} from "react-router-dom";
import ProfilePage from './Component/PokePage';

class App extends Component {
  constructor(props){
    super(props)
    this.handleIdChange = this.handleIdChange.bind(this);
    this.state = {
        id : 1,
    }
  }

  handleIdChange (event) {
    const contentNumber = parseInt(event.target.value, 10);
    console.log('parent')
    console.log('NOW', contentNumber, 'PREV', this.state.id)
    this.temp = contentNumber;
    if (!isNaN(contentNumber) && contentNumber > 0) {
        this.setState({ id : contentNumber });
    }
  }


  render() {
    return (
      <div className="App">
        <Router>
            {/* <Route path="/" exact component={PageLayout} change={this.handleIdChange} id={this.state.id}/> */}
            <Route path="/" exact render={(props) => (
              <PageLayout {...props} change={this.handleIdChange} id = {this.state.id}/>
            )} ></Route>
            <Route path="/poke/:id" component={ProfilePage} />
        </Router>

      </div>
    );
  }
}

export default App;
