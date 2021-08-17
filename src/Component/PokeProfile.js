import React, { Component } from 'react';
import { Link } from "react-router-dom";
import constants from '../script/constants';

const {basePokeAPI} = constants

class ProfileBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokeID : props.id?props.id:1,
      pokemon : null
    }
  }

  fetchPost() {
    const { pokeID } = this.state;
    fetch(`${basePokeAPI}/pokemon/${pokeID}`)
      .then(res => res.json())
      .then(pokemon => this.setState({ pokemon }));
  }

  componentDidMount() {
    this.fetchPost();
  }

  capitalizeFirst = (name) => {
    return name[0].toUpperCase() + name.slice(1);
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