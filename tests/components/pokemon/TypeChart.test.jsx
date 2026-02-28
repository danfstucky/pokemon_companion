import { render, screen } from '@testing-library/react'
import TypeChart from '../../../src/components/pokemon/TypeChart'
import types from '../../../src/data/types'

describe('TypeChart', () => {
  beforeEach(() => render(<TypeChart />))

  it('renders a header and side label for every type', () => {
    types.forEach((type) => {
      // each type name appears as both a column header and a row header
      const cells = screen.getAllByText(type.name)
      expect(cells.length).toBeGreaterThanOrEqual(2)
    })
  })

  it('renders effectiveness multiplier cells', () => {
    expect(screen.getAllByText('1x').length).toBeGreaterThan(0)
    expect(screen.getAllByText('2x').length).toBeGreaterThan(0)
    expect(screen.getAllByText('0.5x').length).toBeGreaterThan(0)
    expect(screen.getAllByText('0x').length).toBeGreaterThan(0)
  })

  it('renders the attack/defense legend image', () => {
    expect(screen.getByAltText('attack/defense')).toBeInTheDocument()
  })
})
