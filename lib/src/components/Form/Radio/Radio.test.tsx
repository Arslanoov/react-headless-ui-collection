import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Radio from './Radio';

describe('Select component', () => {
  it('should render items', () => {
    render(
      <Radio name="test" value={1} onChange={() => {}}>
        <Radio.Item value={1}>Label 1</Radio.Item>
        <Radio.Item value={2}>Label 2</Radio.Item>
        <Radio.Item value={3}>Label 3</Radio.Item>
      </Radio>
    );

    expect(screen.getAllByRole('radio').length).toBe(3);
  });

  it('should change value', async () => {
    const onChangeSpy = jest.fn();

    render(
      <Radio name="test" value={1} onChange={onChangeSpy}>
        <Radio.Item value={1}>Label 1</Radio.Item>
        <Radio.Item value={2}>Label 2</Radio.Item>
        <Radio.Item value={3}>Label 3</Radio.Item>
      </Radio>
    );

    expect(onChangeSpy).not.toHaveBeenCalled();

    const secondRadio = screen.getAllByRole('radio')[1];
    await userEvent.click(secondRadio);

    expect(onChangeSpy).toHaveBeenNthCalledWith(1, 2);

    const thirdRadio = screen.getAllByRole('radio')[2];
    await userEvent.click(thirdRadio);

    expect(onChangeSpy).toHaveBeenNthCalledWith(2, 3);
  });

  it('should be disabled', async () => {
    const onChangeSpy = jest.fn();

    render(
      <Radio name="test" value={1} onChange={onChangeSpy} disabled>
        <Radio.Item value={1}>Label 1</Radio.Item>
        <Radio.Item value={2}>Label 2</Radio.Item>
        <Radio.Item value={3}>Label 3</Radio.Item>
      </Radio>
    );

    expect(onChangeSpy).not.toHaveBeenCalled();

    const secondRadio = screen.getAllByRole('radio')[1];
    await userEvent.click(secondRadio);

    expect(onChangeSpy).not.toHaveBeenCalled();
  });

  it('should be disabled item', async () => {
    const onChangeSpy = jest.fn();

    render(
      <Radio name="test" value={1} onChange={onChangeSpy}>
        <Radio.Item value={1}>Label 1</Radio.Item>
        <Radio.Item value={2} disabled>
          Label 2
        </Radio.Item>
        <Radio.Item value={3}>Label 3</Radio.Item>
      </Radio>
    );

    expect(onChangeSpy).not.toHaveBeenCalled();

    const secondRadio = screen.getAllByRole('radio')[1];
    await userEvent.click(secondRadio);

    expect(onChangeSpy).not.toHaveBeenCalled();

    const thirdRadio = screen.getAllByRole('radio')[2];
    await userEvent.click(thirdRadio);

    expect(onChangeSpy).toHaveBeenNthCalledWith(1, 3);
  });
});
