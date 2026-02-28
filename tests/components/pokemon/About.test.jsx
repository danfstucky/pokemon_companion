import { render, screen } from '@testing-library/react'
import PokemonAbout from '../../../src/components/pokemon/About'

describe('PokemonAbout', () => {
  beforeEach(() => render(<PokemonAbout />))

  it('renders the "What is all of this?" section', () => {
    expect(screen.getByText('What is all of this?')).toBeInTheDocument()
  })

  it('renders the "how can I play?" section', () => {
    expect(screen.getByText('Awesome, how can I play?')).toBeInTheDocument()
  })

  it('renders the Special Thanks section', () => {
    expect(screen.getByText('Special Thanks')).toBeInTheDocument()
  })

  it('explains the game is not available for download', () => {
    expect(
      screen.getByText(/intentionally not available for download/i)
    ).toBeInTheDocument()
  })
})
