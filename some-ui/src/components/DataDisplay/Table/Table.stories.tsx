import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Table from '.';

export default {
  title: 'Data Display/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

const dataSource = [
  {
    key: '1',
    name: 'John',
    age: 20,
  },
  {
    key: '2',
    name: 'Alice',
    age: 25,
  },
];

const columns = [
  {
    title: 'Name',
    index: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    index: 'age',
    key: 'age',
  },
];

export const Standard = Template.bind({});
Standard.args = {
  columns,
  data: dataSource,
};
