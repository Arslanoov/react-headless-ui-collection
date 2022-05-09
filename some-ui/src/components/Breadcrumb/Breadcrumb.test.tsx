import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Breadcrumb from './Breadcrumb';

describe('Breadcrumb component', () => {
  it('Should render items correctly', () => {
    const { container } = render(
      <Breadcrumb className="items">
        <Breadcrumb.Item key="home" className="item">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item key="projects" className="item">
          Projects
        </Breadcrumb.Item>
        <Breadcrumb.Item key="project1" className="item">
          Project1
        </Breadcrumb.Item>
      </Breadcrumb>
    );

    expect(container.querySelectorAll('.item').length).toBe(3);
  });

  it('Should correctly render custom string separator', () => {
    const separator = '>';

    render(
      <Breadcrumb separator={separator} className="items">
        <Breadcrumb.Item key="home" className="item">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item key="projects" className="item">
          Projects
        </Breadcrumb.Item>
        <Breadcrumb.Item key="project1" className="item">
          Project1
        </Breadcrumb.Item>
      </Breadcrumb>
    );

    expect(screen.getAllByText(separator).length).toBe(2);
  });

  it('Should correctly render custom separator element', () => {
    const { container } = render(
      <Breadcrumb separator={<div className="custom-separator">---</div>} className="items">
        <Breadcrumb.Item key="home" className="item">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item key="projects" className="item">
          Projects
        </Breadcrumb.Item>
        <Breadcrumb.Item key="project1" className="item">
          Project1
        </Breadcrumb.Item>
      </Breadcrumb>
    );

    expect(container.querySelectorAll('.custom-separator').length).toBe(2);
    expect(screen.getAllByText('---').length).toBe(2);
  });
});