import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Sidebar from '../../../src/components/shared/Sidebar'

function renderSidebar(initialPath = '/') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Sidebar />
    </MemoryRouter>
  )
}

describe('Sidebar', () => {
  it('renders the author name and title', () => {
    renderSidebar()
    expect(screen.getByText('Dan Stucky')).toBeInTheDocument()
    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    renderSidebar()
    expect(screen.getByText('Who I Am')).toBeInTheDocument()
    expect(screen.getByText('Dev Projects')).toBeInTheDocument()
    expect(screen.getByText('Pokemon Salmon Red')).toBeInTheDocument()
    expect(screen.getByText('Talon Voice')).toBeInTheDocument()
    expect(screen.getByText('Genetics Research')).toBeInTheDocument()
  })

  it('renders a nav element', () => {
    renderSidebar()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
