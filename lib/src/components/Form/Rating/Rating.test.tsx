import * as React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Rating, { RATING_PREFIX } from './Rating';

describe('Rating component', () => {
  it('should correctly render default value', () => {
    const { container } = render(<Rating defaultValue={2} />);

    expect(container.querySelectorAll(`.${RATING_PREFIX}__item`).length).toBe(5);
    expect(container.querySelectorAll(`.${RATING_PREFIX}__item_disabled`).length).toBe(2);
  });

  it('should trigger change cb', async () => {
    const onChangeSpy = jest.fn();

    const { container } = render(<Rating defaultValue={2} onChange={onChangeSpy} />);

    expect(container.querySelectorAll(`.${RATING_PREFIX}__item_disabled`).length).toBe(2);

    const lastEl = container.querySelectorAll(`.${RATING_PREFIX}__item`)[4];

    await userEvent.click(lastEl);
    expect(onChangeSpy).toHaveBeenCalledTimes(1);

    expect(container.querySelectorAll(`.${RATING_PREFIX}__item_disabled`).length).toBe(0);
  });

  it('should not trigger cb when read only', async () => {
    const onChangeSpy = jest.fn();

    const { container } = render(<Rating defaultValue={2} onChange={onChangeSpy} readOnly />);

    expect(container.querySelectorAll(`.${RATING_PREFIX}__item_disabled`).length).toBe(2);

    const lastEl = container.querySelectorAll(`.${RATING_PREFIX}__item`)[4];

    await userEvent.click(lastEl);
    expect(onChangeSpy).not.toHaveBeenCalled();

    expect(container.querySelectorAll(`.${RATING_PREFIX}__item_disabled`).length).toBe(2);
  });

  it.todo('should render custom icon');
  it.todo('should work with half rate');
});
