import { render, screen } from '@testing-library/react';
import { act } from 'react';
import Pokedex from '../../../../src/components/pokemon/pokedex/Pokedex';
import { usePokemonStore } from '../../../../src/stores/pokemon';

vi.mock('../../../../src/components/pokemon/pokemon_details/PokemonDetail', () => ({
  default: ({ pokemonId }) => <div data-testid="pokemon-detail">Detail for {pokemonId}</div>,
}));

// Use a small list so rendering PokemonList doesn't time out
const smallList = [
  { name: 'bulbasaur', id: 1 },
  { name: 'charmander', id: 4 },
  { name: 'squirtle', id: 7 },
];

beforeEach(() => {
  act(() =>
    usePokemonStore.setState({
      showDetail: false,
      pokemonEntryId: 0,
      displayedPokedexEntries: smallList,
    })
  );
});

describe('Pokedex', () => {
  it('renders the page heading', () => {
    render(<Pokedex />);
    expect(screen.getByRole('heading', { name: 'Salmon Red Pokedex' })).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search Pokemon Name')).toBeInTheDocument();
  });

  it('does not show the detail panel when showDetail is false', () => {
    render(<Pokedex />);
    expect(screen.queryByTestId('pokemon-detail')).not.toBeInTheDocument();
  });

  it('shows the detail panel with the correct id when showDetail is true', () => {
    act(() => usePokemonStore.setState({ showDetail: true, pokemonEntryId: 25 }));
    render(<Pokedex />);
    expect(screen.getByTestId('pokemon-detail')).toBeInTheDocument();
    expect(screen.getByText('Detail for 25')).toBeInTheDocument();
  });
});
