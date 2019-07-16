import React, { Component } from 'react';

class ProfilePage extends Component {
  constructor(props){
    super(props);
    let params = props.match.params;
    this.pokeAPI = 'https://pokeapi.co/api/v2/pokemon/' + params.id
    console.log('COBA DULU PROPS', params)
    this.state = {
      poke : null
    }
  }

  componentWillMount(){
    fetch(`${this.pokeAPI}`)
      .then(res => res.json())
      .then(poke => {
        console.log('hasil fetch ' ,poke)
        this.setState({poke})});
  }

  render() {
    let pokemon = this.state.poke
    return (
      pokemon?
      <div className = "profilePage">
          <h1>{pokemon.name}</h1>
          <img src = {pokemon.sprites.front_default} alt=''></img>
      </div>:
      <div className = "profilePage">
        <h1>{`Fetching data... Please Wait!`}</h1>
      </div>  
    )
  }
}

export default ProfilePage;