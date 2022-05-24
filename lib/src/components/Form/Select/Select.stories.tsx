import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select from '.';

export default {
  title: 'Form/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  return (
    <Select {...args}>
      <Select.Option value="Option1">Option1</Select.Option>
      <Select.Option value="Option2">Option2</Select.Option>
      <Select.Option value="Option3">Option3</Select.Option>
    </Select>
  );
};

export const Standard = Template.bind({});
Standard.args = {
  defaultValue: 'Option2',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Some placeholder',
};
