import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Radio from '.';

export default {
  title: 'Form/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

// TODO: Fix value change
const Template: ComponentStory<typeof Radio> = (args) => {
  const [value, setValue] = useState<string | number>(args.value ?? 1);

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /* @ts-ignore */
    <Radio {...args} value={value} onChange={setValue}>
      <Radio.Item value={1}>Label 1</Radio.Item>
      <Radio.Item value={2}>Label 2</Radio.Item>
      <Radio.Item value={3}>Label 3</Radio.Item>
    </Radio>
  );
};

export const Active = Template.bind({});
Active.args = {
  disabled: false,
  name: 'some',
  value: 1,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  name: 'some',
  value: 1,
};
