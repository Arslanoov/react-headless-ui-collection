import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Input from './Input';

describe('Input component', () => {
  it('should correctly render', () => {
    render(<Input type="text" label="somelabel" name="someinput" value="somevalue" />);

    expect(screen.queryByText('somelabel')).toBeInTheDocument();
    expect(screen.getByDisplayValue('somevalue')).toBeInTheDocument();
  });

  it('should write text', async () => {
    const onChangeSpy = jest.fn();

    render(<Input type="text" name="someinput" value="somevalue" onChange={onChangeSpy} />);

    expect(onChangeSpy).not.toBeCalled();

    await userEvent.type(screen.getByRole('textbox'), 'smth');

    expect(onChangeSpy).toHaveBeenCalledTimes(4);
  });

  it('should be readonly', async () => {
    const onChangeSpy = jest.fn();

    render(<Input type="text" name="someinput" value="somevalue" onChange={onChangeSpy} readonly />);

    expect(onChangeSpy).not.toBeCalled();

    await userEvent.type(screen.getByRole('textbox'), 'some text');

    expect(onChangeSpy).not.toBeCalled();
  });

  it('should validate', async () => {
    const onChangeSpy = jest.fn();
    const onErrorSpy = jest.fn();

    render(
      <Input
        type="text"
        name="someinput"
        value="aaaa"
        onChange={onChangeSpy}
        onError={onErrorSpy}
        rules={[(value: string) => value.length >= 5 && 'Some error']}
      />
    );

    expect(onErrorSpy).not.toBeCalled();
    expect(onChangeSpy).not.toBeCalled();

    await userEvent.type(screen.getByRole('textbox'), 'a');

    expect(onErrorSpy).toHaveBeenCalledWith(['Some error']);
    expect(onChangeSpy).not.toBeCalled();
  });
});
