import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ProfilePage extends Component {
  constructor(props){
    super(props);
    let params = props.match.params;
    this.pokeAPI = 'https://pokeapi.co/api/v2/pokemon/' + params.id;
    this.flavorAPI = 'https://pokeapi.co/api/v2/pokemon-species/' + params.id;
    console.log('COBA DULU PROPS', params);
    this.state = {
      poke : null,
      flavor : null
    };
  }

  componentWillMount(){
    fetch(`${this.pokeAPI}`)
      .then(res => res.json())
      .then(poke => {
        console.log('hasil fetch ' ,poke);
        this.setState({poke});
      });

    fetch(`${this.flavorAPI}`)
    .then(res => res.json())
    .then(flavor => {
      console.log('hasil species ' ,flavor);
      this.setState({flavor})
    });
  }

  componentDidUpdate(){
    // console.log('TERUPADTE')
  }

  // componentWillUnmount(){
  //   console.log('Bye')
  // }

  render() {
    let pokemon = this.state.poke;
    return (
      pokemon?
      <div className = "profilePage">
          <Link to='/'><h3>back</h3></Link>
          <h1>{pokemon.name}</h1>
          <img src = {pokemon.sprites.front_default} alt=''></img>
      </div>:
      <div className = "profilePage">
        <h1>{`Fetching data... Please Wait!`}</h1>
      </div>
    );
  }
}

export default ProfilePage;