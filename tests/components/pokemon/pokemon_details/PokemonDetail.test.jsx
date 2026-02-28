import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { act } from 'react'
import PokemonDetail from '../../../../src/components/pokemon/pokemon_details/PokemonDetail'
import { usePokemonStore } from '../../../../src/stores/pokemon'

vi.mock('../../../../src/components/pokemon/pokemon_details/StatsChart', () => ({
  default: () => <div data-testid="stats-chart" />,
}))

vi.mock('../../../../src/components/pokemon/pokemon_details/PokemonMoves', () => ({
  default: ({ moves }) => <div data-testid="pokemon-moves">{moves.length} moves</div>,
}))

const mockPokemonData = {
  id: 1,
  name: 'bulbasaur',
  types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
  abilities: [{ ability: { name: 'overgrow' } }],
  stats: [{ base_stat: 45, stat: { name: 'hp' } }],
  moves: [],
}

beforeEach(() => {
  act(() => usePokemonStore.setState({ pokemonEncounter: null, showDetail: true }))
  global.fetch = vi.fn().mockResolvedValue({
    status: 200,
    json: () => Promise.resolve(mockPokemonData),
  })
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('PokemonDetail', () => {
  it('shows a loading spinner while the fetch is in flight', () => {
    global.fetch = vi.fn().mockReturnValue(new Promise(() => {}))
    render(<PokemonDetail pokemonId={1} />)
    expect(document.querySelector('.fa-spinner')).toBeInTheDocument()
  })

  it('renders pokemon name after a successful fetch', async () => {
    render(<PokemonDetail pokemonId={1} />)
    await waitFor(() => expect(screen.getByText('bulbasaur')).toBeInTheDocument())
  })

  it('renders all types after a successful fetch', async () => {
    render(<PokemonDetail pokemonId={1} />)
    await waitFor(() => screen.getByText('bulbasaur'))
    expect(screen.getByText('grass')).toBeInTheDocument()
    expect(screen.getByText('poison')).toBeInTheDocument()
  })

  it('renders all abilities after a successful fetch', async () => {
    render(<PokemonDetail pokemonId={1} />)
    await waitFor(() => screen.getByText('bulbasaur'))
    expect(screen.getByText('overgrow')).toBeInTheDocument()
  })

  it('renders the stats chart', async () => {
    render(<PokemonDetail pokemonId={1} />)
    await waitFor(() => screen.getByText('bulbasaur'))
    expect(screen.getByTestId('stats-chart')).toBeInTheDocument()
  })

  it('shows "Pokemon not found" when the fetch returns a non-200 status', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      status: 404,
      json: () => Promise.resolve({ id: 0, name: 'Unknown' }),
    })
    render(<PokemonDetail pokemonId={9999} />)
    await waitFor(() =>
      expect(screen.getByText('Pokemon not found')).toBeInTheDocument()
    )
  })

  it('calls closeDetails when the close button is clicked', async () => {
    render(<PokemonDetail pokemonId={1} />)
    await waitFor(() => screen.getByText('bulbasaur'))
    fireEvent.click(screen.getByText('close'))
    expect(usePokemonStore.getState().showDetail).toBe(false)
  })

  it('shows encounter level when isWildEncounter is true', async () => {
    act(() =>
      usePokemonStore.setState({
        pokemonEncounter: { id: 1, name: 'bulbasaur', level: '15-20' },
      })
    )
    render(<PokemonDetail pokemonId={1} isWildEncounter={true} />)
    await waitFor(() => screen.getByText('bulbasaur'))
    expect(screen.getByText('Encounter Level')).toBeInTheDocument()
    expect(screen.getByText('15-20')).toBeInTheDocument()
  })
})
