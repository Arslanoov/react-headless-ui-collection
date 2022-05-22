import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Table from './Table';

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

describe('Table component', () => {
  it('should correctly render table', () => {
    render(<Table columns={columns} data={dataSource} />);

    expect(screen.queryByRole('table')).toBeInTheDocument();
    expect(screen.getAllByRole('row').length).toBe(3);
    expect(screen.getAllByRole('cell').length).toBe(4);
  });
});
