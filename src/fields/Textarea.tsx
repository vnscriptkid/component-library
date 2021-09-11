import React, { useContext } from 'react';
import { FieldContext } from './FieldContext';
import { StyledTextarea } from './styles';

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentPropsWithRef<'textarea'>
>((props, ref) => {
  const id = useContext(FieldContext);

  return <StyledTextarea ref={ref} id={id} {...props} />;
});

Textarea.displayName = 'Field.Textarea';
