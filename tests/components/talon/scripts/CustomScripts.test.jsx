import { render, screen } from '@testing-library/react'
import CustomScripts from '../../../../src/components/talon/scripts/CustomScripts'

describe('CustomScripts', () => {
  beforeEach(() => render(<CustomScripts />))

  it('renders the Custom Scripts heading', () => {
    expect(screen.getByRole('heading', { name: 'Custom Scripts' })).toBeInTheDocument()
  })

  it('renders the talon/user directory hint', () => {
    expect(screen.getByText(/talon\/user/)).toBeInTheDocument()
  })

  it('renders the accordion sections', () => {
    expect(screen.getByText('General')).toBeInTheDocument()
    expect(screen.getByText('Mouse Movement')).toBeInTheDocument()
  })

  it('renders accordion buttons for both sections', () => {
    const buttons = screen.getAllByRole('button')
    const labels = buttons.map((b) => b.textContent.trim())
    expect(labels).toContain('General')
    expect(labels).toContain('Mouse Movement')
  })

  it('renders community/settings CSV customization hint', () => {
    expect(screen.getByText(/community\/settings\/\*/)).toBeInTheDocument()
  })
})
