import { render, screen } from '@testing-library/react';
import AboutMe from '../../../src/components/core/AboutMe';

vi.mock('../../../src/components/shared/HorizontalBarChart', () => ({
  default: () => <div data-testid="horizontal-bar-chart" />,
}));

describe('AboutMe', () => {
  beforeEach(() => render(<AboutMe />));

  it('renders the About Me card', () => {
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('renders a profile image', () => {
    expect(screen.getByAltText('Dan Stucky')).toBeInTheDocument();
  });

  it('renders the Education card with all three degrees', () => {
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('B.S. Computer Science')).toBeInTheDocument();
    expect(screen.getByText('M.S. Molecular Genetics')).toBeInTheDocument();
    expect(screen.getByText('B.S. Biology')).toBeInTheDocument();
  });

  it('renders the Skills card with a chart', () => {
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByTestId('horizontal-bar-chart')).toBeInTheDocument();
  });

  it('renders the Contact card with external links', () => {
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'My GitHub' })).toBeInTheDocument();
  });
});
