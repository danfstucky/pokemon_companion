import { render, screen, fireEvent } from '@testing-library/react'
import { act } from 'react'
import PokemonSearch from '../../../../src/components/pokemon/pokedex/PokemonSearch'
import { usePokemonStore } from '../../../../src/stores/pokemon'
import salmonRedPokedex from '../../../../src/data/pokedex'

beforeEach(() => {
  act(() => usePokemonStore.setState({ displayedPokedexEntries: salmonRedPokedex }))
})

describe('PokemonSearch', () => {
  it('renders the search input with placeholder text', () => {
    render(<PokemonSearch />)
    expect(screen.getByPlaceholderText('Search Pokemon Name')).toBeInTheDocument()
  })

  it('starts with an empty input value', () => {
    render(<PokemonSearch />)
    expect(screen.getByPlaceholderText('Search Pokemon Name')).toHaveValue('')
  })

  it('filters the store results when the user types', () => {
    render(<PokemonSearch />)
    fireEvent.change(screen.getByPlaceholderText('Search Pokemon Name'), {
      target: { value: 'bulb' },
    })
    const entries = usePokemonStore.getState().displayedPokedexEntries
    expect(entries.length).toBeGreaterThan(0)
    entries.forEach((p) => expect(p.name.startsWith('bulb')).toBe(true))
  })

  it('restores the full list when the input is cleared', () => {
    render(<PokemonSearch />)
    const input = screen.getByPlaceholderText('Search Pokemon Name')
    fireEvent.change(input, { target: { value: 'bulb' } })
    fireEvent.change(input, { target: { value: '' } })
    expect(usePokemonStore.getState().displayedPokedexEntries).toHaveLength(
      salmonRedPokedex.length
    )
  })

  it('filters to an empty list when search matches nothing', () => {
    render(<PokemonSearch />)
    fireEvent.change(screen.getByPlaceholderText('Search Pokemon Name'), {
      target: { value: 'zzznomatch' },
    })
    expect(usePokemonStore.getState().displayedPokedexEntries).toHaveLength(0)
  })
})
