import Vue from 'vue';
import Router from 'vue-router';
import AboutMe from './../components/core/AboutMe';
import DevProjects from './../components/core/DevProjects';
import BiologyResearch from './../components/core/BiologyResearch';

import PokemonHome from './../components/pokemon/PokemonHome';
import Pokedex from './../components/pokemon/pokedex/Pokedex';
import WildPokemon from './../components/pokemon/encounter_locations/WildPokemon';
import PokemonGyms from './../components/pokemon/gyms/PokemonGyms';
import TypeChart from './../components/pokemon/TypeChart';
import About from './../components/pokemon/About';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: AboutMe }, // Root
    { path: '/dev-projects', component: DevProjects },
    { path: '/research', component: BiologyResearch },
    {
      path: '/pokemon',
      component: PokemonHome,
      children: [
        { path: '/', component: Pokedex }, // Sub-route root
        { path: '/pokemon/wild-encounters', component: WildPokemon },
        { path: '/pokemon/gyms', component: PokemonGyms },
        { path: '/pokemon/types', component: TypeChart },
        { path: '/pokemon/about', component: About },
      ],
    },
    { path: '*', redirect: '/' }, // Catchall route to redirect
  ],
});
