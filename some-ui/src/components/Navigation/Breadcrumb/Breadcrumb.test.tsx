import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Breadcrumb from './Breadcrumb';

describe('Breadcrumb component', () => {
  it('Should render items correctly', () => {
    const itemClassName = 'item';

    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Item className={itemClassName} key="home">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item className={itemClassName} key="projects">
          Projects
        </Breadcrumb.Item>
        <Breadcrumb.Item className={itemClassName} key="project1">
          Project1
        </Breadcrumb.Item>
      </Breadcrumb>
    );

    expect(container.querySelectorAll(`.${itemClassName}`).length).toBe(3);
  });

  it('Should correctly render custom string separator', () => {
    const separator = '>';

    render(
      <Breadcrumb separator={separator}>
        <Breadcrumb.Item key="home">Home</Breadcrumb.Item>
        <Breadcrumb.Item key="projects">Projects</Breadcrumb.Item>
        <Breadcrumb.Item key="project1">Project1</Breadcrumb.Item>
      </Breadcrumb>
    );

    expect(screen.getAllByText(separator).length).toBe(2);
  });

  it('Should correctly render custom separator element', () => {
    const separatorClassName = 'custom-separator';
    const separator = '---';

    const { container } = render(
      <Breadcrumb separator={<div className={separatorClassName}>{separator}</div>}>
        <Breadcrumb.Item key="home">Home</Breadcrumb.Item>
        <Breadcrumb.Item key="projects">Projects</Breadcrumb.Item>
        <Breadcrumb.Item key="project1">Project1</Breadcrumb.Item>
      </Breadcrumb>
    );

    expect(container.querySelectorAll(`.${separatorClassName}`).length).toBe(2);
    expect(screen.getAllByText(separator).length).toBe(2);
  });
});
