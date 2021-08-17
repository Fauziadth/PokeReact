import React, { Component } from 'react';
import { Link } from "react-router-dom";
import constants from '../script/constants';

const { basePokeAPI } = constants

class ProfilePage extends Component {
  constructor(props){
    super(props);
    let params = props.match.params;
    this.pokemonId = params.id;
    this.state = {
      poke : null,
      flavor : null
    };
  }

  componentWillMount(){
    fetch(`${basePokeAPI}/pokemon/${this.pokemonId}`)
      .then(res => res.json())
      .then(poke => {
        console.log('hasil fetch ' ,poke);
        this.setState({poke});
      });

    fetch(`${basePokeAPI}/pokemon-species/${this.pokemonId}`)
    .then(res => res.json())
    .then(flavor => {
      console.log('hasil species ' ,flavor);
      this.setState({flavor})
    });
  }

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