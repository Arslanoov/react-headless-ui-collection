import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Collapse from './Collapse';

describe('Collapse component', () => {
  it('should render items', () => {
    render(
      <Collapse>
        <Collapse.Panel key="1" header="Some header 1">
          Some content 1
        </Collapse.Panel>
        <Collapse.Panel key="2" header="Some header 2">
          Some content 2
        </Collapse.Panel>
      </Collapse>
    );

    expect(screen.queryByText('Some header 1')).toBeInTheDocument();
    expect(screen.queryByText('Some content 1')).toBeInTheDocument();
    expect(screen.queryByText('Some header 2')).toBeInTheDocument();
    expect(screen.queryByText('Some content 2')).toBeInTheDocument();
  });

  it('should collapse item', async () => {
    const onChangeSpy = jest.fn();

    render(
      <Collapse onChange={onChangeSpy}>
        <Collapse.Panel key="1" header="Some header 1">
          Some content 1
        </Collapse.Panel>
        <Collapse.Panel key="2" header="Some header 2">
          Some content 2
        </Collapse.Panel>
      </Collapse>
    );

    expect(onChangeSpy).not.toBeCalled();

    await userEvent.click(await screen.findByText('Some header 2'));

    expect(onChangeSpy).toBeCalledWith(1, true);

    await userEvent.click(await screen.findByText('Some header 2'));

    expect(onChangeSpy).toBeCalledWith(1, false);

    await userEvent.click(await screen.findByText('Some header 1'));

    expect(onChangeSpy).toBeCalledWith(0, true);
  });

  it('should not collapse disabled item', async () => {
    const onChangeSpy = jest.fn();

    render(
      <Collapse onChange={onChangeSpy}>
        <Collapse.Panel key="1" header="Some header 1">
          Some content 1
        </Collapse.Panel>
        <Collapse.Panel key="2" header="Some header 2" disabled>
          Some content 2
        </Collapse.Panel>
      </Collapse>
    );

    expect(onChangeSpy).not.toBeCalled();

    await userEvent.click(await screen.findByText('Some header 2'));

    expect(onChangeSpy).not.toBeCalled();
  });
});
