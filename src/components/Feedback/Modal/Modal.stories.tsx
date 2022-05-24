import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Modal from '.';

export default {
  title: 'Feedback/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <>
      <Modal visible={isVisible} {...args}>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <button onClick={() => setIsVisible(false)}>Close modal</button>
      </Modal>
      <button onClick={() => setIsVisible(true)}>Open modal</button>
    </>
  );
};

export const Standard = Template.bind({});
Standard.args = {};
