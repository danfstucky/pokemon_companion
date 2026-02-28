import { render, screen, fireEvent } from '@testing-library/react';
import ManageAppWindowCommands from '../../../../src/components/talon/cheatsheet/ManageAppWindowCommands';

vi.mock('../../../../src/services/talonService', () => ({
  default: {
    encloseInAngles: (text) => `<${text}>`,
    scrollToId: vi.fn(),
  },
}));

import talonService from '../../../../src/services/talonService';

describe('ManageAppWindowCommands', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    render(<ManageAppWindowCommands />);
  });

  it('renders the section heading', () => {
    expect(screen.getByRole('heading', { name: 'Manage Application Windows' })).toBeInTheDocument();
  });

  it('renders window management commands', () => {
    expect(screen.getByText('window new, window open')).toBeInTheDocument();
    expect(screen.getByText('window next')).toBeInTheDocument();
    expect(screen.getByText('window last')).toBeInTheDocument();
    expect(screen.getByText('window close')).toBeInTheDocument();
    expect(screen.getByText('window hide')).toBeInTheDocument();
    expect(screen.getByText('running list')).toBeInTheDocument();
  });

  it('renders the Snap Positions sub-section with its anchor id', () => {
    expect(screen.getByText('Snap Positions')).toBeInTheDocument();
    expect(document.getElementById('snap-positions')).toBeInTheDocument();
  });

  it('renders snap position options', () => {
    expect(screen.getByText('full, fullscreen')).toBeInTheDocument();
    expect(screen.getByText('left third')).toBeInTheDocument();
    // 'top left' and 'bottom right' appear in both command and position columns
    expect(screen.getAllByText('top left').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('bottom right').length).toBeGreaterThanOrEqual(1);
  });

  it('calls scrollToId("snap-positions") when a snap position button is clicked', () => {
    const buttons = screen.getAllByRole('button', { name: 'snap position' });
    fireEvent.click(buttons[0]);
    expect(talonService.scrollToId).toHaveBeenCalledWith('snap-positions');
  });
});
