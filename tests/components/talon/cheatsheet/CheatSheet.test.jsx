import { render, screen } from '@testing-library/react';
import CheatSheet from '../../../../src/components/talon/cheatsheet/CheatSheet';

describe('CheatSheet', () => {
  beforeEach(() => render(<CheatSheet />));

  it('renders the main heading', () => {
    expect(screen.getByRole('heading', { name: 'Talon Commands Cheatsheet' })).toBeInTheDocument();
  });

  it('renders a link to the Community script package', () => {
    const link = screen.getByRole('link', { name: 'Community' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://github.com/talonhub/community');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders all six command section headings', () => {
    expect(screen.getByRole('heading', { name: 'General' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Individual Keyboard Keys' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Dictation Mode' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Mouse Control' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Manage Application Windows' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Manage Web Browsers' })).toBeInTheDocument();
  });
});
