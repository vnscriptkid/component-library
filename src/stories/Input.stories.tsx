import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Field } from '../fields/Field';

export default {
  title: 'Example/Input',
  component: Field.Input,
  subcomponents: { Field, label: Field.Label },
} as Meta;

export const Default: Story = ({ placeholder }) => (
  <Field>
    <Field.Input placeholder={placeholder} />
    <Field.Label>Hello</Field.Label>
  </Field>
);

Default.args = {
  placeholder: 'Enter something',
};
