import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button } from './Button';

describe('Button', () => {
  it('applies default type of button', () => {
    render(<Button>hello</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });
  it('applies specific type if provided', () => {
    render(<Button type="submit">hello</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });
  it('applies valid attribute to element', () => {
    render(<Button aria-label="My Button">hello</Button>);

    expect(screen.getByRole('button')).toHaveAttribute(
      'aria-label',
      'My Button'
    );
  });
});

// export {};
