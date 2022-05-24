import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from '.';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const NotChecked = Template.bind({});
NotChecked.args = {
  checked: false,
  name: 'some',
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  name: 'some',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  name: 'some',
};
