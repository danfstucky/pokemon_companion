import { render, screen } from '@testing-library/react';
import BrowserCommands from '../../../../src/components/talon/cheatsheet/BrowserCommands';

describe('BrowserCommands', () => {
  beforeEach(() => render(<BrowserCommands />));

  it('renders the section heading', () => {
    expect(screen.getByRole('heading', { name: 'Manage Web Browsers' })).toBeInTheDocument();
  });

  it('renders a link to the Rango package', () => {
    const link = screen.getByRole('link', { name: 'Rango' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://github.com/david-tejada/rango');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders the Hints sub-section', () => {
    expect(screen.getByText('Hints')).toBeInTheDocument();
    expect(screen.getByText('hints toggle')).toBeInTheDocument();
  });

  it('renders the Form Fields sub-section', () => {
    expect(screen.getByText('Form Fields')).toBeInTheDocument();
  });

  it('renders the Copying Data sub-section', () => {
    expect(screen.getByText('Copying Data')).toBeInTheDocument();
  });

  it('renders the Scrolling sub-section', () => {
    expect(screen.getByText('Scrolling')).toBeInTheDocument();
    expect(screen.getByText('scroll save <word>')).toBeInTheDocument();
  });

  it('renders the Tab Management sub-section', () => {
    expect(screen.getByText('Tab Management')).toBeInTheDocument();
    expect(screen.getByText('tab open, tab new')).toBeInTheDocument();
    expect(screen.getByText('tab close')).toBeInTheDocument();
    expect(screen.getByText('tab next')).toBeInTheDocument();
  });
});
