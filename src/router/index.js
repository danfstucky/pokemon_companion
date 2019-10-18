import Vue from 'vue';
import Router from 'vue-router';
import PokemonHome from './../components/pokemon/PokemonHome';
import Pokedex from './../components/pokemon/pokedex/Pokedex';
import WildPokemon from './../components/pokemon/encounter_locations/WildPokemon';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'PokemonHome', component: PokemonHome }, // Root
    { path: '/pokedex', name: 'Pokedex', component: Pokedex },
    { path: '/wild_pokemon', name: 'WildPokemon', component: WildPokemon },
    { path: '*', redirect: '/' }, // Catchall route to redirect
  ],
});
