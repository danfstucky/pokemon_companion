import { render, screen, fireEvent } from '@testing-library/react'
import { act } from 'react'
import PokemonList from '../../../../src/components/pokemon/pokedex/PokemonList'
import { usePokemonStore } from '../../../../src/stores/pokemon'

const mockEntries = [
  { name: 'bulbasaur', id: 1 },
  { name: 'ivysaur', id: 2 },
  { name: 'venusaur', id: 3 },
]

beforeEach(() => {
  act(() =>
    usePokemonStore.setState({
      displayedPokedexEntries: mockEntries,
      showDetail: false,
      pokemonEntryId: 0,
    })
  )
})

describe('PokemonList', () => {
  it('renders a card for each displayed pokemon', () => {
    render(<PokemonList />)
    expect(screen.getByText('bulbasaur')).toBeInTheDocument()
    expect(screen.getByText('ivysaur')).toBeInTheDocument()
    expect(screen.getByText('venusaur')).toBeInTheDocument()
  })

  it('renders the pokedex number for each entry', () => {
    render(<PokemonList />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('renders a sprite image for each pokemon', () => {
    render(<PokemonList />)
    const images = document.querySelectorAll('img')
    expect(images).toHaveLength(mockEntries.length)
    expect(images[0]).toHaveAttribute(
      'src',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    )
  })

  it('calls showDetails with the pokemon id when a card is clicked', () => {
    render(<PokemonList />)
    fireEvent.click(screen.getByText('bulbasaur').closest('article'))
    const state = usePokemonStore.getState()
    expect(state.showDetail).toBe(true)
    expect(state.pokemonEntryId).toBe(1)
  })

  it('renders an empty list when there are no entries', () => {
    act(() => usePokemonStore.setState({ displayedPokedexEntries: [] }))
    render(<PokemonList />)
    expect(screen.queryByRole('article')).not.toBeInTheDocument()
  })
})
