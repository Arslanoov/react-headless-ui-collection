import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Carousel from '.';

export default {
  title: 'Data Display/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args}>
    <div>First</div>
    <div>Second</div>
    <div>Third</div>
  </Carousel>
);

export const AutoPlay = Template.bind({});
AutoPlay.args = {
  autoplay: true,
  autoplayTimeout: 2000,
};

export const Big = Template.bind({});
Big.args = {
  width: 1000,
  height: 400,
};

export const Medium = Template.bind({});
Medium.args = {
  width: 600,
  height: 300,
};

export const Small = Template.bind({});
Small.args = {
  width: 400,
  height: 200,
};
