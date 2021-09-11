import { render, screen } from '@testing-library/react';
import React from 'react';
import { Field } from './Field';

jest.mock('../utils/useUniqueID');

describe('Field', () => {
  describe('Label', () => {
    it('applies unique ID to htmlFor attribute', () => {
      render(
        <Field>
          <Field.Label>The Label</Field.Label>
        </Field>
      );

      expect(screen.getByText(/the label/i)).toHaveAttribute(
        'for',
        'mocked_id'
      );
    });
  });

  describe('Input', () => {
    it('applies unique ID to id attribute', () => {
      render(
        <Field>
          <Field.Label>The Label</Field.Label>
          <Field.Input />
        </Field>
      );

      expect(screen.getByLabelText(/the label/i)).toHaveAttribute(
        'id',
        'mocked_id'
      );
    });
  });

  describe('Textarea', () => {
    it('applies unique ID to id attribute', () => {
      render(
        <Field>
          <Field.Label>The Label</Field.Label>
          <Field.Textarea />
        </Field>
      );

      expect(screen.getByLabelText(/the label/i)).toHaveAttribute(
        'id',
        'mocked_id'
      );
    });
  });
});
