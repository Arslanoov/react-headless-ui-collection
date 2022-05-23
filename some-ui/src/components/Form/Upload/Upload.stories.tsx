import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Upload from '.';

export default {
  title: 'Form/Upload',
  component: Upload,
  argTypes: {
    maxSize: {
      description: 'File max size (KB)',
    },
    formats: {
      description: 'Array of allowed file formats',
    },
  },
} as ComponentMeta<typeof Upload>;

const Template: ComponentStory<typeof Upload> = (args) => <Upload {...args} />;

export const Standard = Template.bind({});
Standard.args = {};

export const MultipleFiles = Template.bind({});
MultipleFiles.args = {
  multiple: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Some label',
};
