import { render, screen } from '@testing-library/react';
import BiologyResearch from '../../../src/components/core/BiologyResearch';

describe('BiologyResearch', () => {
  beforeEach(() => render(<BiologyResearch />));

  it('renders the Background card', () => {
    expect(screen.getByText('Background')).toBeInTheDocument();
  });

  it('renders the Publications card with research links', () => {
    expect(screen.getByText('Publications')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Functional diversification of two UGT80 enzymes/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Steryl glucosides: a genetic approach/i })).toBeInTheDocument();
  });

  it('renders the Research Abstract card', () => {
    expect(screen.getByText('Research Abstract')).toBeInTheDocument();
  });

  it('opens publication links in a new tab', () => {
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer');
    });
  });
});
