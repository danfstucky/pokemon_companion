import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import TalonHome from '../../../src/components/talon/TalonHome';

describe('TalonHome', () => {
  it('renders the TalonTabs navigation', () => {
    render(
      <MemoryRouter initialEntries={['/talon/cheatsheet']}>
        <Routes>
          <Route path="/talon/*" element={<TalonHome />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Cheatsheet')).toBeInTheDocument();
    expect(screen.getByText('Custom Scripts')).toBeInTheDocument();
  });
});
