import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PokemonTabs from '../../../src/components/pokemon/PokemonTabs'

function renderTabs(initialPath = '/pokemon/pokedex') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <PokemonTabs />
    </MemoryRouter>
  )
}

describe('PokemonTabs', () => {
  it('renders all five tab links', () => {
    renderTabs()
    expect(screen.getByText('Pokedex')).toBeInTheDocument()
    expect(screen.getByText('Wild Pokemon')).toBeInTheDocument()
    expect(screen.getByText('Gym Leaders')).toBeInTheDocument()
    expect(screen.getByText('Type Chart')).toBeInTheDocument()
    expect(screen.getByText('About Salmon Red')).toBeInTheDocument()
  })

  it('renders the tab list as a nav element', () => {
    renderTabs()
    expect(document.querySelector('.nav.nav-pills')).toBeInTheDocument()
  })
})
