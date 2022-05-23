import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Collapse from '.';

export default {
  title: 'Data Display/Collapse',
  component: Collapse,
} as ComponentMeta<typeof Collapse>;

const Template: ComponentStory<typeof Collapse> = (args) => (
  <Collapse {...args}>
    <Collapse.Panel key="1" header="Some header 1">
      Some content 1
    </Collapse.Panel>
    <Collapse.Panel key="2" header="Some header 2">
      Some content 2
    </Collapse.Panel>
    <Collapse.Panel key="3" header="Some header 3" disabled>
      Some content 3
    </Collapse.Panel>
    <Collapse.Panel key="4" header="Some header 4" disabled>
      Some content 3
    </Collapse.Panel>
  </Collapse>
);

export const DefaultActive = Template.bind({});
DefaultActive.args = {
  defaultActiveIndex: [1, 3],
};
