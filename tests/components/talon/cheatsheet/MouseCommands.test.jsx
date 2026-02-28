import { render, screen, fireEvent } from '@testing-library/react'
import MouseCommands from '../../../../src/components/talon/cheatsheet/MouseCommands'

vi.mock('../../../../src/services/talonService', () => ({
  default: {
    encloseInAngles: (text) => `<${text}>`,
    scrollToId: vi.fn(),
  },
}))

import talonService from '../../../../src/services/talonService'

describe('MouseCommands', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    render(<MouseCommands />)
  })

  it('renders the Mouse Control section heading', () => {
    expect(screen.getByRole('heading', { name: 'Mouse Control' })).toBeInTheDocument()
  })

  it('renders the Mouse Grid sub-section', () => {
    expect(screen.getByText('Mouse Grid')).toBeInTheDocument()
  })

  it('renders mouse grid commands', () => {
    expect(screen.getByText('mouse grid')).toBeInTheDocument()
    expect(screen.getByText('win grid')).toBeInTheDocument()
    expect(screen.getByText('grid off')).toBeInTheDocument()
    expect(screen.getByText('grid reset')).toBeInTheDocument()
    expect(screen.getByText('grid back')).toBeInTheDocument()
  })

  it('renders the Mouse Actions sub-section', () => {
    expect(screen.getByText('Mouse Actions')).toBeInTheDocument()
  })

  it('renders basic mouse action commands', () => {
    expect(screen.getByText('touch')).toBeInTheDocument()
    expect(screen.getByText('righty')).toBeInTheDocument()
    expect(screen.getByText('mid click')).toBeInTheDocument()
    expect(screen.getByText('wheel stop')).toBeInTheDocument()
  })

  it('calls scrollToId("modifier-keys") when a modifier keys button is clicked', () => {
    const buttons = screen.getAllByRole('button', { name: 'modifier keys' })
    fireEvent.click(buttons[0])
    expect(talonService.scrollToId).toHaveBeenCalledWith('modifier-keys')
  })
})
