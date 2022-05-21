import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Select from './Select';

describe('Select component', () => {
  it('should render items', () => {
    const { container } = render(
      <Select>
        <Select.Option value="1">1</Select.Option>
        <Select.Option value="2">2</Select.Option>
        <Select.Option value="3">3</Select.Option>
      </Select>
    );

    expect(container.querySelectorAll('.someui-select__item').length).toBe(3);
    expect(screen.queryByText('1')).toBeInTheDocument();
    expect(screen.queryByText('2')).toBeInTheDocument();
    expect(screen.queryByText('3')).toBeInTheDocument();
  });

  it('should correctly show default value', () => {
    const { container } = render(
      <Select defaultValue="2">
        <Select.Option value="1">1</Select.Option>
        <Select.Option value="2">2</Select.Option>
        <Select.Option value="3">3</Select.Option>
      </Select>
    );

    expect(container.querySelector('.someui-select__preview')?.innerHTML).toBe('2');
  });

  it('should show placeholder', () => {
    const { container } = render(
      <Select placeholder="some placeholder">
        <Select.Option value="1">1</Select.Option>
        <Select.Option value="2">2</Select.Option>
        <Select.Option value="3">3</Select.Option>
      </Select>
    );

    expect(container.querySelector('.someui-select__preview')?.innerHTML).toBe('some placeholder');
  });

  it('should select element', async () => {
    const onSelectSpy = jest.fn();

    const { container } = render(
      <Select onChange={onSelectSpy}>
        <Select.Option value="1">1</Select.Option>
        <Select.Option value="2">2</Select.Option>
        <Select.Option value="3">3</Select.Option>
      </Select>
    );

    expect(container.querySelector('.someui-select__preview')?.innerHTML).toBe('');

    expect(onSelectSpy).not.toHaveBeenCalled();

    await userEvent.click(container.querySelectorAll('.someui-select__item')[1]);

    expect(onSelectSpy).toHaveBeenCalledTimes(1);

    expect(container.querySelector('.someui-select__preview')?.innerHTML).toBe('2');
  });

  it('should be disabled', async () => {
    const onSelectSpy = jest.fn();

    const { container } = render(
      <Select onChange={onSelectSpy} defaultValue="2" disabled>
        <Select.Option value="1">1</Select.Option>
        <Select.Option value="2">2</Select.Option>
        <Select.Option value="3">3</Select.Option>
      </Select>
    );

    expect(container.querySelector('.someui-select__preview')?.innerHTML).toBe('2');
    expect(onSelectSpy).not.toHaveBeenCalled();

    await userEvent.click(container.querySelectorAll('.someui-select__item')[1]);

    expect(onSelectSpy).not.toHaveBeenCalled();
    expect(container.querySelector('.someui-select__preview')?.innerHTML).toBe('2');
  });

  it('option should be disabled', async () => {
    const onSelectSpy = jest.fn();

    const { container } = render(
      <Select onChange={onSelectSpy} defaultValue="2">
        <Select.Option value="1">1</Select.Option>
        <Select.Option value="2" disabled>
          2
        </Select.Option>
        <Select.Option value="3">3</Select.Option>
      </Select>
    );

    expect(container.querySelector('.someui-select__preview')?.innerHTML).toBe('2');
    expect(onSelectSpy).not.toHaveBeenCalled();

    await userEvent.click(container.querySelectorAll('.someui-select__item')[1]);

    expect(onSelectSpy).not.toHaveBeenCalled();
    expect(container.querySelector('.someui-select__preview')?.innerHTML).toBe('2');
  });
});
