import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Field } from '../fields/Field';

export default {
  title: 'Example/Textarea',
  component: Field.Textarea,
  subcomponents: { Field, label: Field.Label },
} as Meta;

const Template: Story = (args) => (
  <Field>
    <Field.Label>Description</Field.Label>
    <Field.Textarea placeholder="Enter something" {...args} />
  </Field>
);

export const Default = Template.bind({});

Default.args = {
  isResizable: true,
};
