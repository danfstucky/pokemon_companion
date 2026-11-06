import { render, screen, within } from '@testing-library/react';
import Books from '../../../src/components/core/Books';

const bookCard = (title) => within(screen.getByRole('heading', { name: title }).closest('article'));

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

  it('renders a card for each book, in order', () => {
    const titles = screen.getAllByRole('heading', { level: 2 }).map((heading) => heading.textContent);
    expect(titles).toEqual(['AI Simply Explained by a Software Engineer', 'Spot & Stop AI Scams']);
  });

  describe('AI Simply Explained', () => {
    const card = () => bookCard('AI Simply Explained by a Software Engineer');

    it('renders the book cover image', () => {
      expect(card().getByAltText('AI Simply Explained book cover')).toBeInTheDocument();
    });

    it('renders the book description', () => {
      expect(card().getByText(/comprehensive guide to understanding AI/)).toBeInTheDocument();
    });

    it('renders the View on Amazon button linking to the correct URL', () => {
      const amazonLink = card().getByRole('link', { name: /View on Amazon/ });
      expect(amazonLink).toHaveAttribute('href', 'https://www.amazon.com/dp/B0H2SFDS9P');
      expect(amazonLink).toHaveAttribute('target', '_blank');
    });

    it('renders the Listen on Audible button linking to the audiobook', () => {
      const audibleLink = card().getByRole('link', { name: /Listen on Audible/ });
      expect(audibleLink).toHaveAttribute(
        'href',
        'https://www.audible.com/pd/AI-Simply-Explained-by-a-Software-Engineer-Audiobook/B0HD84JJKQ'
      );
      expect(audibleLink).toHaveAttribute('target', '_blank');
    });

    it('renders availability formats', () => {
      expect(card().getByText('Paperback')).toBeInTheDocument();
      expect(card().getByText('Hardcover')).toBeInTheDocument();
      expect(card().getByText('Kindle')).toBeInTheDocument();
      expect(card().getByText('Audiobook')).toBeInTheDocument();
    });

    it('wraps the book cover in a link to Amazon', () => {
      const coverLink = card().getByAltText('AI Simply Explained book cover').closest('a');
      expect(coverLink).toHaveAttribute('href', 'https://www.amazon.com/dp/B0H2SFDS9P');
    });
  });

  describe('Spot & Stop AI Scams', () => {
    const card = () => bookCard('Spot & Stop AI Scams');

    it('renders the book cover image', () => {
      expect(card().getByAltText('Spot & Stop AI Scams book cover')).toBeInTheDocument();
    });

    it('renders the book description', () => {
      expect(card().getByText(/simple habits that protect you/)).toBeInTheDocument();
    });

    it('renders the View on Amazon button linking to the correct URL', () => {
      const amazonLink = card().getByRole('link', { name: /View on Amazon/ });
      expect(amazonLink).toHaveAttribute('href', 'https://www.amazon.com/dp/B0HQB8HF9V');
      expect(amazonLink).toHaveAttribute('target', '_blank');
    });

    it('does not render a Listen on Audible button', () => {
      expect(card().queryByRole('link', { name: /Listen on Audible/ })).not.toBeInTheDocument();
    });

    it('renders only its own availability formats', () => {
      expect(card().getByText('Paperback')).toBeInTheDocument();
      expect(card().getByText('Hardcover')).toBeInTheDocument();
      expect(card().getByText('Kindle')).toBeInTheDocument();
      expect(card().queryByText('Audiobook')).not.toBeInTheDocument();
    });

    it('wraps the book cover in a link to Amazon', () => {
      const coverLink = card().getByAltText('Spot & Stop AI Scams book cover').closest('a');
      expect(coverLink).toHaveAttribute('href', 'https://www.amazon.com/dp/B0HQB8HF9V');
    });
  });
});
