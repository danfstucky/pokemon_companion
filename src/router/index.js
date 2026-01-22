import { createRouter, createWebHashHistory } from "vue-router";
import AboutMe from "./../components/core/AboutMe.vue";
import DevProjects from "./../components/core/DevProjects.vue";
import BiologyResearch from "./../components/core/BiologyResearch.vue";

import PokemonHome from "./../components/pokemon/PokemonHome.vue";
import Pokedex from "./../components/pokemon/pokedex/Pokedex.vue";
import WildPokemon from "./../components/pokemon/encounter_locations/WildPokemon.vue";
import PokemonGyms from "./../components/pokemon/gyms/PokemonGyms.vue";
import TypeChart from "./../components/pokemon/TypeChart.vue";
import About from "./../components/pokemon/About.vue";

import TalonHome from "./../components/talon/TalonHome.vue";
import CheatSheet from "./../components/talon/cheatsheet/CheatSheet.vue";
import CustomScripts from "./../components/talon/scripts/CustomScripts.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/about-me" }, // Root
    { path: "/about-me", component: AboutMe },
    { path: "/dev-projects", component: DevProjects },
    { path: "/research", component: BiologyResearch },
    {
      path: "/pokemon",
      component: PokemonHome,
      children: [
        { path: "/pokemon", redirect: "/pokemon/pokedex" }, // Sub-route root
        { path: "/pokemon/pokedex", component: Pokedex },
        { path: "/pokemon/wild-encounters", component: WildPokemon },
        { path: "/pokemon/gyms", component: PokemonGyms },
        { path: "/pokemon/types", component: TypeChart },
        { path: "/pokemon/about", component: About },
      ],
    },
    {
      path: "/talon",
      component: TalonHome,
      children: [
        { path: "/talon", redirect: "/talon/cheatsheet" },
        { path: "/talon/cheatsheet", component: CheatSheet },
        { path: "/talon/scripts", component: CustomScripts },
      ],
    },
    { path: "/:notFound(.*)", redirect: "/about-me" }, // Catchall route to redirect
  ],
});

export default router;
