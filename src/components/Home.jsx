import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './shared/Sidebar'
import AboutMe from './core/AboutMe'
import DevProjects from './core/DevProjects'
import BiologyResearch from './core/BiologyResearch'
import PokemonHome from './pokemon/PokemonHome'
import Pokedex from './pokemon/pokedex/Pokedex'
import WildPokemon from './pokemon/encounter_locations/WildPokemon'
import PokemonGyms from './pokemon/gyms/PokemonGyms'
import TypeChart from './pokemon/TypeChart'
import PokemonAbout from './pokemon/About'
import TalonHome from './talon/TalonHome'
import CheatSheet from './talon/cheatsheet/CheatSheet'
import CustomScripts from './talon/scripts/CustomScripts'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.mainContentContainer}>
        <Routes>
          <Route path="/" element={<Navigate to="/about-me" replace />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/dev-projects" element={<DevProjects />} />
          <Route path="/research" element={<BiologyResearch />} />
          <Route path="/pokemon" element={<PokemonHome />}>
            <Route index element={<Navigate to="/pokemon/pokedex" replace />} />
            <Route path="pokedex" element={<Pokedex />} />
            <Route path="wild-encounters" element={<WildPokemon />} />
            <Route path="gyms" element={<PokemonGyms />} />
            <Route path="types" element={<TypeChart />} />
            <Route path="about" element={<PokemonAbout />} />
          </Route>
          <Route path="/talon" element={<TalonHome />}>
            <Route index element={<Navigate to="/talon/cheatsheet" replace />} />
            <Route path="cheatsheet" element={<CheatSheet />} />
            <Route path="scripts" element={<CustomScripts />} />
          </Route>
          <Route path="*" element={<Navigate to="/about-me" replace />} />
        </Routes>
      </div>
    </div>
  )
}
