import { createRouter, createWebHashHistory } from "vue-router";
import AboutMe from "./../components/core/AboutMe";
import DevProjects from "./../components/core/DevProjects";
import BiologyResearch from "./../components/core/BiologyResearch";

import PokemonHome from "./../components/pokemon/PokemonHome";
import Pokedex from "./../components/pokemon/pokedex/Pokedex";
import WildPokemon from "./../components/pokemon/encounter_locations/WildPokemon";
import PokemonGyms from "./../components/pokemon/gyms/PokemonGyms";
import TypeChart from "./../components/pokemon/TypeChart";
import About from "./../components/pokemon/About";

import TalonHome from "./../components/talon/TalonHome";
import CheatSheet from "./../components/talon/CheatSheet";
import CustomScripts from "./../components/talon/scripts/CustomScripts";

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
