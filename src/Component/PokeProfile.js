import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ProfileBox extends Component {
  constructor(props){
    super(props);
    this.pokeAPI = 'https://pokeapi.co/api/v2/pokemon'
    this.state = {
      pokeID : props.id?props.id:1,
      pokemon : undefined
    }
    // this.handleIdChange = this.handleIdChange.bind(this);
  }

  fetchPost() {
    const { pokeID } = this.state;
    fetch(`${this.pokeAPI}/${pokeID}`)
      .then(res => res.json())
      .then(pokemon => this.setState({ pokemon }));
  }

  componentDidMount() {
    this.fetchPost();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pokeID !== this.state.pokeID) {
      this.fetchPost();
    }
  }

  capitalizeFirst = (name) => {
    let capName = name[0].toUpperCase() + name.slice(1);
    return capName;
  }

 

  render() {
    const { pokeID, pokemon } = this.state;
    return (
      <div className = "profileBox">
        {pokemon && 
        <Link to={'/poke/'+pokeID } className='link'>
          <div>
              <h3 className='blue'>{this.capitalizeFirst(pokemon.name)}</h3> <h4 className='blue id'>{pokeID}</h4>
            <img src={pokemon.sprites.front_default} className="poke-sprite" alt=""/>
            <p></p>
          </div>
        </Link>}
      </div>
    );
  }
}

export default ProfileBox;