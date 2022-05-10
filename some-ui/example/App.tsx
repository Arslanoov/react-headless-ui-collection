import * as React from 'react';

import Breadcrumb from '../src/components/Breadcrumb';
import Rating from '../src/components/Rating';

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
    </div>
  );
};

export default App;
