import * as React from 'react';

import Breadcrumb from '../src/components/Navigation/Breadcrumb';

import Carousel from '../src/components/DataDisplay/Carousel';
import Collapse from '../src/components/DataDisplay/Collapse';
import Table from '../src/components/DataDisplay/Table';

import Rating from '../src/components/Form/Rating';
import Select from '../src/components/Form/Select';
import Input from '../src/components/Form/Input';
import Checkbox from '../src/components/Form/Checkbox';
import Radio from '../src/components/Form/Radio';
import Upload from '../src/components/Form/Upload';

import Modal from '../src/components/Feedback/Modal';

import { Row, Col } from '../src/components/Layout/Grid';

import BackTop from '../src/components/Other/BackTop';

import './example.scss';

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

const App = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [radioValue, setRadioValue] = React.useState<number>(1);

  return (
    <div>
      <h1>Components</h1>

      <hr />

      <h2>Navigation</h2>
      <h3>Breadcrumb</h3>
      <Breadcrumb separator={<div className="separator">/</div>}>
        <Breadcrumb.Item key="home" className="item">
          <a href="/">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item key="projects" className="item">
          <a href="/projects">Projects</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item key="project1" className="item item_current">
          Project1
        </Breadcrumb.Item>
      </Breadcrumb>

      <hr />

      <h2>Data Display</h2>
      <h3>Carousel</h3>
      <Carousel width={500} height={150} autoplay>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
      </Carousel>

      <h3>Collapse</h3>
      <Collapse defaultActiveIndex={[1, 3]}>
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

      <h3>Table</h3>
      <Table columns={columns} data={dataSource} />

      <hr />

      <h2>Form</h2>
      <h3>Rating</h3>
      <Rating defaultValue={3} onChange={() => {}} readOnly={false} withHalf={true} />

      <h3>Select</h3>
      <Select onChange={() => {}} defaultValue="Option2" disabled={false} placeholder="placeholder">
        <Select.Option value="Option1">Option1</Select.Option>
        <Select.Option value="Option2">Option2</Select.Option>
        <Select.Option value="Option3">Option3</Select.Option>
      </Select>

      <h3>Input</h3>
      <Input
        type="text"
        name="value"
        value="somevalue"
        label="Test label"
        onChange={() => {}}
        onError={() => {}}
        readonly={false}
        rules={[(v, name) => !!v && `${name} is required`]}
      />

      <h3>Checkbox</h3>
      <Checkbox onChange={setIsChecked} checked={isChecked} name="some" />

      <h3>Radio</h3>
      <Radio name="test" value={radioValue} onChange={setRadioValue}>
        <Radio.Item value={1}>Label 1</Radio.Item>
        <Radio.Item value={2}>Label 2</Radio.Item>
        <Radio.Item value={3} disabled>
          Label 3
        </Radio.Item>
      </Radio>

      <h3>Upload</h3>
      <Upload onUpload={console.log} onError={console.log} />

      <hr />

      <h2>Layout</h2>
      <h3>Grid</h3>
      <div
        style={{
          padding: '10px 0',
          textAlign: 'center',
        }}
      >
        <Row>
          <Col span={4}>33%</Col>
          <Col span={4}>33%</Col>
          <Col span={4}>33%</Col>
          <Col span={3}>25%</Col>
          <Col span={3}>25%</Col>
          <Col span={3}>25%</Col>
          <Col span={6}>50%</Col>
          <Col span={6}>50%</Col>
          <Col span={12}>100%</Col>
        </Row>
      </div>

      <hr />

      <h2>Feedback</h2>
      <h3>Modal</h3>
      <Modal visible={isVisible}>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <p>Some content</p>
        <button onClick={() => setIsVisible(false)}>Close modal</button>
      </Modal>
      <button onClick={() => setIsVisible(true)}>Open modal</button>

      <BackTop>To the top</BackTop>
    </div>
  );
};

export default App;
