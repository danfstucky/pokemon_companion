import { render, screen } from '@testing-library/react';
import Books from '../../../src/components/core/Books';

describe('Books', () => {
  beforeEach(() => render(<Books />));

  it('renders the Published Books header card', () => {
    expect(screen.getByText('Published Books')).toBeInTheDocument();
  });

  it('renders the author contact email', () => {
    const emailLink = screen.getByRole('link', { name: 'inpathon@gmail.com' });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:inpathon@gmail.com');
  });

  it('renders the AI Simply Explained book card', () => {
    expect(screen.getByText('AI Simply Explained by a Software Engineer')).toBeInTheDocument();
  });

  it('renders the book cover image', () => {
    expect(screen.getByAltText('AI Simply Explained book cover')).toBeInTheDocument();
  });

  it('renders the book description', () => {
    expect(screen.getByText(/comprehensive guide to understanding AI/)).toBeInTheDocument();
  });

  it('renders the View on Amazon button linking to the correct URL', () => {
    const amazonLink = screen.getByRole('link', { name: /View on Amazon/ });
    expect(amazonLink).toHaveAttribute('href', 'https://www.amazon.com/dp/B0H2SFDS9P');
    expect(amazonLink).toHaveAttribute('target', '_blank');
  });

  it('renders availability formats', () => {
    expect(screen.getByText('Paperback')).toBeInTheDocument();
    expect(screen.getByText('Hardcover')).toBeInTheDocument();
    expect(screen.getByText('Kindle')).toBeInTheDocument();
  });

  it('wraps the book cover in a link to Amazon', () => {
    const coverImg = screen.getByAltText('AI Simply Explained book cover');
    const coverLink = coverImg.closest('a');
    expect(coverLink).toHaveAttribute('href', 'https://www.amazon.com/dp/B0H2SFDS9P');
  });
});
