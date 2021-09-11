import React from 'react';

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>(({ children, ...props }, ref) => (
  <button type="button" ref={ref} className="btn btn-success" {...props}>
    {children}
  </button>
));

Button.displayName = 'Button';
