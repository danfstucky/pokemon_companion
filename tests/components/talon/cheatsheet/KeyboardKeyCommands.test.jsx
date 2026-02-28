import { render, screen } from '@testing-library/react'
import KeyboardKeyCommands from '../../../../src/components/talon/cheatsheet/KeyboardKeyCommands'

describe('KeyboardKeyCommands', () => {
  beforeEach(() => render(<KeyboardKeyCommands />))

  it('renders the section heading', () => {
    expect(screen.getByRole('heading', { name: 'Individual Keyboard Keys' })).toBeInTheDocument()
  })

  it('renders the Symbols sub-section', () => {
    expect(screen.getByText('Symbols')).toBeInTheDocument()
  })

  it('renders the Special Keys sub-section', () => {
    expect(screen.getByText('Special Keys')).toBeInTheDocument()
  })

  it('renders the Arrow Keys sub-section', () => {
    expect(screen.getByText('Arrow Keys')).toBeInTheDocument()
  })

  it('renders the Modifier Keys sub-section with its anchor id', () => {
    expect(screen.getByText('Modifier Keys')).toBeInTheDocument()
    expect(document.getElementById('modifier-keys')).toBeInTheDocument()
  })

  it('renders common special key commands', () => {
    // voice command and key name are often identical, so each string appears twice
    expect(screen.getAllByText('enter').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('escape').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('tab').length).toBeGreaterThanOrEqual(1)
  })

  it('renders common modifier key commands', () => {
    expect(screen.getByText('control')).toBeInTheDocument()
    // 'shift' appears in both the voice command and key name columns
    expect(screen.getAllByText('shift').length).toBeGreaterThanOrEqual(1)
  })
})
