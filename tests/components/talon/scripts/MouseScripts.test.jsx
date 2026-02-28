import { render, screen } from '@testing-library/react';
import MouseScripts from '../../../../src/components/talon/scripts/MouseScripts';

describe('MouseScripts', () => {
  beforeEach(() => render(<MouseScripts />));

  it('renders the Voice Command Overview label', () => {
    expect(screen.getByText('Voice Command Overview:')).toBeInTheDocument();
  });

  it('renders directional movement command rows', () => {
    expect(screen.getByText('Move the mouse up a far amount.')).toBeInTheDocument();
    expect(screen.getByText('Move the mouse down a far amount.')).toBeInTheDocument();
    expect(screen.getByText('Move the mouse left a far amount.')).toBeInTheDocument();
    expect(screen.getByText('Move the mouse right a far amount.')).toBeInTheDocument();
  });

  it('renders the Script label and filename', () => {
    expect(screen.getByText('Script:')).toBeInTheDocument();
    expect(screen.getByText('mouse_movement.talon')).toBeInTheDocument();
  });

  it('renders the talon script code block', () => {
    const pre = document.querySelector('pre');
    expect(pre).toBeInTheDocument();
    expect(pre.textContent).toContain('mouse_move');
  });
});
