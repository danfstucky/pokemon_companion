import { render, screen } from '@testing-library/react'
import DevProjects from '../../../src/components/core/DevProjects'

vi.mock('bootstrap', () => ({
  Carousel: vi.fn(),
}))

describe('DevProjects', () => {
  beforeEach(() => render(<DevProjects />))

  it('renders the Pokemon Fan Game card', () => {
    expect(screen.getByText('Pokemon Fan Game')).toBeInTheDocument()
  })

  it('renders the Tactical Arbitrage card', () => {
    expect(screen.getByText('Tactical Arbitrage Command Line App')).toBeInTheDocument()
  })

  it('renders the Smite Spec card', () => {
    expect(screen.getByText('Smite Spec')).toBeInTheDocument()
  })

  it('renders the carousel with screenshot images', () => {
    const carouselItems = document.querySelectorAll('.carousel-item')
    expect(carouselItems.length).toBe(10)
  })

  it('renders GitHub links for projects', () => {
    const links = screen.getAllByRole('link', { name: /Project Github Link/i })
    expect(links.length).toBeGreaterThanOrEqual(2)
  })

  it('renders the Salmon Red logo image', () => {
    expect(screen.getByAltText('Salmon Red Logo')).toBeInTheDocument()
  })
})
