import * as React from 'react';

import Breadcrumb from '../src/components/Breadcrumb';
import Rating from '../src/components/Rating';
import Select from '../src/components/Select';
import Carousel from '../src/components/Carousel';
import Collapse from '../src/components/Collapse';

import './example.scss';

const App = () => {
  return (
    <div>
      <h1>Components</h1>

      <h2>Breadcrumb</h2>
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

      <h2>Rating</h2>
      <Rating
        defaultValue={3}
        onChange={() => {}}
        readOnly={false}
        withHalf={true}
        customIcon={() => <div>icon</div>}
      />

      <h2>Select</h2>
      <Select onChange={() => {}} defaultValue="Option2" disabled={false} placeholder="placeholder">
        <Select.Option value="Option1" disabled>
          Option1
        </Select.Option>
        <Select.Option value="Option2" disabled>
          Option2
        </Select.Option>
        <Select.Option value="Option3" disabled>
          Option3
        </Select.Option>
      </Select>

      <h2>Carousel</h2>
      <Carousel width={500} height={150} autoplay>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
      </Carousel>

      <h2>Collapse</h2>
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
    </div>
  );
};

export default App;
