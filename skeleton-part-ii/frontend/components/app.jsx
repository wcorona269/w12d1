import { Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import PokemonIndexContainer from './../components/pokemon/pokemon_index_container';

export const App = () => (
  <Route path="/" component={PokemonIndexContainer} />
  // <h1>Hello World</h1>
  )