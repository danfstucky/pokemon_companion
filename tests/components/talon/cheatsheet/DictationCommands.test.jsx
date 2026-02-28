import { render, screen } from '@testing-library/react'
import DictationCommands from '../../../../src/components/talon/cheatsheet/DictationCommands'

describe('DictationCommands', () => {
  beforeEach(() => render(<DictationCommands />))

  it('renders the section heading', () => {
    expect(screen.getByRole('heading', { name: 'Dictation Mode' })).toBeInTheDocument()
  })

  it('renders basic dictation commands', () => {
    expect(screen.getByText('cap')).toBeInTheDocument()
    expect(screen.getByText('no cap')).toBeInTheDocument()
    expect(screen.getByText('no space')).toBeInTheDocument()
    expect(screen.getByText('scratch that')).toBeInTheDocument()
    expect(screen.getByText('select that')).toBeInTheDocument()
  })

  it('renders the Dictation Mode Keywords section', () => {
    expect(screen.getByText('Dictation Mode Keywords')).toBeInTheDocument()
  })

  it('renders the Punctuation sub-section', () => {
    // 'Punctuation' appears as an h5 heading and as table column headers
    expect(screen.getByRole('heading', { name: 'Punctuation' })).toBeInTheDocument()
  })

  it('renders the Formatters sub-section', () => {
    expect(screen.getByText('Formatters')).toBeInTheDocument()
    expect(screen.getByText('all cap')).toBeInTheDocument()
  })

  it('renders the Prose sub-section', () => {
    expect(screen.getByText('Prose')).toBeInTheDocument()
    expect(screen.getByText('new line')).toBeInTheDocument()
    expect(screen.getByText('new paragraph')).toBeInTheDocument()
  })
})
