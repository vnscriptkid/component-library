import React, { useContext } from 'react';
import { FieldContext } from './FieldContext';
import { StyledLabel } from './styles';

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<'label'>
>(({ children, ...props }, ref) => {
  const id = useContext(FieldContext);

  return (
    <StyledLabel ref={ref} htmlFor={id} {...props}>
      {children}
    </StyledLabel>
  );
});

Label.displayName = 'Field.Label';
