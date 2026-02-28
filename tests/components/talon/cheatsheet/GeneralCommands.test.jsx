import { render, screen } from '@testing-library/react'
import GeneralCommands from '../../../../src/components/talon/cheatsheet/GeneralCommands'

describe('GeneralCommands', () => {
  beforeEach(() => render(<GeneralCommands />))

  it('renders the General section heading', () => {
    expect(screen.getByRole('heading', { name: 'General' })).toBeInTheDocument()
  })

  it('renders the Voice Command and Description column headers', () => {
    expect(screen.getByText('Voice Command')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('renders sleep and wake commands', () => {
    expect(screen.getByText('go to sleep')).toBeInTheDocument()
    expect(screen.getByText('wake Up')).toBeInTheDocument()
  })

  it('renders mode switch commands', () => {
    expect(screen.getByText('dictation mode')).toBeInTheDocument()
    expect(screen.getByText('command mode')).toBeInTheDocument()
  })

  it('renders help commands', () => {
    expect(screen.getByText('help alphabet')).toBeInTheDocument()
    expect(screen.getByText('help context')).toBeInTheDocument()
    expect(screen.getByText('help active')).toBeInTheDocument()
    expect(screen.getByText('help close')).toBeInTheDocument()
  })

  it('uses encloseInAngles to format placeholder text', () => {
    // talonService.encloseInAngles('any phrase') → '<any phrase>'
    expect(screen.getByText(/<any phrase>/)).toBeInTheDocument()
  })
})
