import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Checkbox from './Checkbox';

describe('Checkbox component', () => {
  it('Should render with default value', () => {
    const someLabel = 'Some checkbox';
    render(<Checkbox label={someLabel} onChange={() => {}} name="some" />);

    expect(screen.queryByText(someLabel)).toBeInTheDocument();
    expect(screen.queryByRole('checkbox')).toBeInTheDocument();
  });

  it('Should change value', async () => {
    const onChangeSpy = jest.fn();

    render(<Checkbox onChange={onChangeSpy} name="some" />);

    expect(onChangeSpy).not.toHaveBeenCalled();

    await userEvent.click(await screen.findByRole('checkbox'));

    expect(onChangeSpy).toHaveBeenCalledWith(true);
  });

  it('Should be disabled', async () => {
    const onChangeSpy = jest.fn();

    render(<Checkbox onChange={onChangeSpy} name="some" disabled />);

    expect(onChangeSpy).not.toHaveBeenCalled();

    await userEvent.click(await screen.findByRole('checkbox'));

    expect(onChangeSpy).not.toHaveBeenCalled();
  });
});
