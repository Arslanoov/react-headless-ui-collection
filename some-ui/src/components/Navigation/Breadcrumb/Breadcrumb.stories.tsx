import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Breadcrumb from '.';

export default {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args}>
    <Breadcrumb.Item key="home">Home</Breadcrumb.Item>
    <Breadcrumb.Item key="projects">Projects</Breadcrumb.Item>
    <Breadcrumb.Item key="project">Project 1</Breadcrumb.Item>
  </Breadcrumb>
);

export const Separator = Template.bind({});
Separator.args = {
  separator: '/',
};
