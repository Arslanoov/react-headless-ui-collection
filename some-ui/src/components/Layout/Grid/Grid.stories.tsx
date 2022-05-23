import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Row, Col } from './Grid';

import './grid-stories.styles.scss';

export default {
  title: 'Layout/Grid',
  component: Row,
} as ComponentMeta<typeof Row>;

const Template: ComponentStory<typeof Row> = (args) => <Row {...args} />;

export const RowSimple = Template.bind({});
RowSimple.args = {
  children: (
    <>
      <Col span={4}>33%</Col>
      <Col span={4}>33%</Col>
      <Col span={4}>33%</Col>
      <Col span={3}>25%</Col>
      <Col span={3}>25%</Col>
      <Col span={3}>25%</Col>
      <Col span={3}>25%</Col>
      <Col span={3}>25%</Col>
      <Col span={6}>50%</Col>
      <Col span={6}>50%</Col>
      <Col span={12}>100%</Col>
    </>
  ),
};

export const JustifyBetween = Template.bind({});
JustifyBetween.args = {
  justify: 'space-between',
  children: (
    <>
      <Col span={4}>33%</Col>
      <Col span={4}>33%</Col>
    </>
  ),
};

export const JustifyEvenly = Template.bind({});
JustifyEvenly.args = {
  justify: 'space-evenly',
  children: (
    <>
      <Col span={3}>25%</Col>
      <Col span={3}>25%</Col>
      <Col span={3}>25%</Col>
    </>
  ),
};
