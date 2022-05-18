import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Breadcrumb from './index';

export default {
  title: 'Breadcrumb component',
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args}>
    <Breadcrumb.Item key="home">Home</Breadcrumb.Item>
    <Breadcrumb.Item key="projects">Projects</Breadcrumb.Item>
  </Breadcrumb>
);

export const Separator = Template.bind({});
Separator.args = {
  className: 'some-class',
  separator: '/',
};
