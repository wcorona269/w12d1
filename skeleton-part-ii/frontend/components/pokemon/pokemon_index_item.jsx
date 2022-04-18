import React from 'react';
import ReactDom from 'react-dom';
import { Link } from "react-router-dom";


const PokemonIndexItem = (props) => (
  <ul>
    {/* <h1>hello</h1> */}
    <li> <Link to="/pokemon/:pokemonId">{props.pokemon.name}</Link></li>
    <li> <Link to="/pokemon/:pokemonId">{props.pokemon.imageUrl}</Link></li>
  </ul>
)

export default PokemonIndexItem;