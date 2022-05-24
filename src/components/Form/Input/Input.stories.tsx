import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '.';

export default {
  title: 'Form/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState<string>(args.value ?? '');

  return <Input value={value} {...args} onChange={setValue} />;
};

export const Text = Template.bind({});
Text.args = {
  type: 'text',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  type: 'text',
  value: 'Some typed value',
  readonly: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  type: 'text',
  label: 'Some input label',
};
