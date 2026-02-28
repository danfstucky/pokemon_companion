import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import PokemonHome from '../../../src/components/pokemon/PokemonHome';

describe('PokemonHome', () => {
  it('renders the PokemonTabs navigation', () => {
    render(
      <MemoryRouter initialEntries={['/pokemon/pokedex']}>
        <Routes>
          <Route path="/pokemon/*" element={<PokemonHome />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Pokedex')).toBeInTheDocument();
    expect(screen.getByText('Wild Pokemon')).toBeInTheDocument();
    expect(screen.getByText('Gym Leaders')).toBeInTheDocument();
  });
});
