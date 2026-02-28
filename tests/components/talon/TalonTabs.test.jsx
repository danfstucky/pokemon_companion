import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import TalonTabs from '../../../src/components/talon/TalonTabs'

function renderTabs(initialPath = '/talon/cheatsheet') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <TalonTabs />
    </MemoryRouter>
  )
}

describe('TalonTabs', () => {
  it('renders both tab links', () => {
    renderTabs()
    expect(screen.getByText('Cheatsheet')).toBeInTheDocument()
    expect(screen.getByText('Custom Scripts')).toBeInTheDocument()
  })

  it('renders the tabs inside a nav pill list', () => {
    renderTabs()
    expect(document.querySelector('.nav.nav-pills')).toBeInTheDocument()
  })
})
