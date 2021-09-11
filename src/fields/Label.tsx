import React, { useContext } from 'react';
import { FieldContext } from './FieldContext';

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<'label'>
>(({ children, ...props }, ref) => {
  const id = useContext(FieldContext);

  return (
    <label ref={ref} htmlFor={id} {...props}>
      {children}
    </label>
  );
});

Label.displayName = 'Field.Label';
