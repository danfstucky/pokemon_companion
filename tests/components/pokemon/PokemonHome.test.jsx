import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import PokemonHome from '../../../src/components/pokemon/PokemonHome';
import { usePokemonStore } from '../../../src/stores/pokemon';

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

  it('closes an open Pokemon detail modal when the route changes (e.g. the back button)', () => {
    render(
      <MemoryRouter initialEntries={['/pokemon/pokedex']}>
        <Routes>
          <Route path="/pokemon/*" element={<PokemonHome />} />
        </Routes>
      </MemoryRouter>
    );
    act(() => usePokemonStore.getState().showDetails(4));
    expect(usePokemonStore.getState().showDetail).toBe(true);

    fireEvent.click(screen.getByText('Type Chart'));
    expect(usePokemonStore.getState().showDetail).toBe(false);
  });
});
