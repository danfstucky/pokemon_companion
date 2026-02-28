import { render, screen, fireEvent } from '@testing-library/react'
import { act } from 'react'
import PokemonGyms from '../../../../src/components/pokemon/gyms/PokemonGyms'
import { usePokemonStore } from '../../../../src/stores/pokemon'

vi.mock('../../../../src/components/pokemon/pokemon_details/PokemonDetail', () => ({
  default: () => <div data-testid="pokemon-detail" />,
}))

beforeEach(() => {
  act(() =>
    usePokemonStore.setState({ showDetail: false, pokemonEntryId: 0, pokemonEncounter: null })
  )
})

describe('PokemonGyms', () => {
  it('renders nine gym leader selection images', () => {
    render(<PokemonGyms />)
    const gymImages = screen.getAllByRole('img', { name: /Gym \d/i })
    expect(gymImages).toHaveLength(9)
  })

  it('does not show gym details before a gym is selected', () => {
    render(<PokemonGyms />)
    expect(screen.queryByText('Leader:')).not.toBeInTheDocument()
  })

  it('shows leader details after clicking a gym image', () => {
    render(<PokemonGyms />)
    fireEvent.click(screen.getByAltText('Gym 1'))
    expect(screen.getByText('Leader:')).toBeInTheDocument()
    expect(screen.getByText('Type:')).toBeInTheDocument()
  })

  it('displays the correct leader data for gym 1', () => {
    render(<PokemonGyms />)
    fireEvent.click(screen.getByAltText('Gym 1'))
    expect(screen.getByText('Danimala')).toBeInTheDocument()
    expect(screen.getByText('Farm Animals')).toBeInTheDocument()
  })

  it('shows the pokemon detail panel when showDetail is true', async () => {
    act(() => usePokemonStore.setState({ showDetail: true, pokemonEntryId: 77 }))
    render(<PokemonGyms />)
    expect(screen.getByTestId('pokemon-detail')).toBeInTheDocument()
  })

  it('calls showEncounterDetails when a gym pokemon is clicked', () => {
    render(<PokemonGyms />)
    fireEvent.click(screen.getByAltText('Gym 1'))
    // ponyta is the first pokemon in gym 1
    fireEvent.click(screen.getByText('ponyta').closest('article'))
    const state = usePokemonStore.getState()
    expect(state.showDetail).toBe(true)
    expect(state.pokemonEncounter).toMatchObject({ name: 'ponyta', id: 77 })
  })
})
