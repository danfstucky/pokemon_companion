import Vue from 'vue';
import Router from 'vue-router';
import Home from './../components/Home';
import PokemonHome from './../components/pokemon/PokemonHome';
import Pokedex from './../components/pokemon/pokedex/Pokedex';
import WildPokemon from './../components/pokemon/encounter_locations/WildPokemon';
import PokemonGyms from './../components/pokemon/gyms/PokemonGyms';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home }, // Root
    {
      path: '/pokemon',
      name: 'PokemonHome',
      component: PokemonHome,
      children: [
        { path: '', component: Pokedex },
        { path: '/wild_pokemon', component: WildPokemon },
        { path: '/gyms', component: PokemonGyms },
      ],
    },
    { path: '*', redirect: '/' }, // Catchall route to redirect
  ],
});
