import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BackTop from '.';

import './backtop-stories.styles.scss';

export default {
  title: 'Other/BackTop',
  component: BackTop,
} as ComponentMeta<typeof BackTop>;

const Template: ComponentStory<typeof BackTop> = (args) => <BackTop {...args} children={args.children} />;

export const Static = Template.bind({});
Static.args = {
  children: 'To the top',
};
