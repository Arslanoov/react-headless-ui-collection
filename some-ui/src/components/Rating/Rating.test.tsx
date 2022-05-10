import * as React from 'react';
import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Rating from './Rating';

// TODO: Add prefix import

describe('Rating component', function () {
  it('should correctly render default value', () => {
    const { container } = render(<Rating defaultValue={2} />);

    expect(container.querySelectorAll('.someui-rate__item').length).toBe(5);
    expect(container.querySelectorAll('.someui-rate__item_disabled').length).toBe(2);
  });

  it('should trigger change cb', async () => {
    const onChangeSpy = jest.fn();

    const { container } = render(<Rating defaultValue={2} onChange={onChangeSpy} />);

    expect(container.querySelectorAll('.someui-rate__item_disabled').length).toBe(2);

    const lastEl = container.querySelectorAll('.someui-rate__item')[4];

    await userEvent.click(lastEl);
    expect(onChangeSpy).toHaveBeenCalledTimes(1);

    expect(container.querySelectorAll('.someui-rate__item_disabled').length).toBe(0);
  });

  it('should not trigger cb when read only', async () => {
    const onChangeSpy = jest.fn();

    const { container } = render(<Rating defaultValue={2} onChange={onChangeSpy} readOnly />);

    expect(container.querySelectorAll('.someui-rate__item_disabled').length).toBe(2);

    const lastEl = container.querySelectorAll('.someui-rate__item')[4];

    await userEvent.click(lastEl);
    expect(onChangeSpy).not.toHaveBeenCalled();

    expect(container.querySelectorAll('.someui-rate__item_disabled').length).toBe(2);
  });

  it.todo('should render custom icon');
  it.todo('should work with half rate');
});