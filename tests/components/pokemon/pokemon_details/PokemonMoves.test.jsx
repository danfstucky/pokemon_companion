import { render, screen } from '@testing-library/react';
import PokemonMoves from '../../../../src/components/pokemon/pokemon_details/PokemonMoves';

describe('PokemonMoves', () => {
  it('renders the moves table header', () => {
    render(<PokemonMoves />);
    expect(screen.getByText('Moves')).toBeInTheDocument();
  });

  it('renders an empty table body when given no moves', () => {
    render(<PokemonMoves />);
    expect(screen.queryByRole('row', { name: /lvl/i })).not.toBeInTheDocument();
  });

  it('renders each move name and level', () => {
    const moves = [
      { name: 'tackle', level: 1 },
      { name: 'growl', level: 3 },
      { name: 'vine-whip', level: 7 },
    ];
    render(<PokemonMoves moves={moves} />);
    expect(screen.getByText('tackle')).toBeInTheDocument();
    expect(screen.getByText('lvl 1')).toBeInTheDocument();
    expect(screen.getByText('growl')).toBeInTheDocument();
    expect(screen.getByText('lvl 3')).toBeInTheDocument();
    expect(screen.getByText('vine-whip')).toBeInTheDocument();
    expect(screen.getByText('lvl 7')).toBeInTheDocument();
  });

  it('renders the correct number of rows', () => {
    const moves = [
      { name: 'scratch', level: 1 },
      { name: 'ember', level: 4 },
    ];
    render(<PokemonMoves moves={moves} />);
    // tbody rows (excludes the thead row)
    const rows = document.querySelectorAll('tbody tr');
    expect(rows).toHaveLength(2);
  });
});
