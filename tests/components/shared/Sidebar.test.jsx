import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Link } from 'react-router-dom';
import Sidebar from '../../../src/components/shared/Sidebar';

function renderSidebar(initialPath = '/') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Sidebar />
    </MemoryRouter>
  );
}

describe('Sidebar', () => {
  it('renders the author name and title', () => {
    renderSidebar();
    expect(screen.getByText('Dan Stucky')).toBeInTheDocument();
    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    renderSidebar();
    expect(screen.getByText('Who I Am')).toBeInTheDocument();
    expect(screen.getByText('Dev Projects')).toBeInTheDocument();
    expect(screen.getByText('Pokemon Salmon Red')).toBeInTheDocument();
    expect(screen.getByText('Talon Voice')).toBeInTheDocument();
    expect(screen.getByText('Genetics Research')).toBeInTheDocument();
  });

  it('renders a nav element', () => {
    renderSidebar();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('closes the mobile menu when the route changes from outside the menu (e.g. the back button)', () => {
    render(
      <MemoryRouter initialEntries={['/about-me']}>
        <Sidebar />
        <Link to="/books">external navigation</Link>
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(screen.getByText('external navigation'));
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false');
  });
});
