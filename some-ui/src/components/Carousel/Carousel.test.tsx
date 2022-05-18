import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Carousel from './Carousel';

describe('Carousel component', function () {
  it('should render items', () => {
    render(
      <Carousel width={200} height={200}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Carousel>
    );

    expect(screen.queryByText('Slide 1')).toBeInTheDocument();
    expect(screen.queryByText('Slide 2')).toBeInTheDocument();
    expect(screen.queryByText('Slide 3')).toBeInTheDocument();
  });

  it('should change slides', async () => {
    const onChangeSpy = jest.fn();

    const { container } = render(
      <Carousel onChange={onChangeSpy} width={200} height={200}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Carousel>
    );

    expect(onChangeSpy).toBeCalledTimes(0);

    const paginationItem = container.querySelectorAll('.someui-carousel__pagination-item')[1];
    await userEvent.click(paginationItem);

    expect(onChangeSpy).toBeCalledTimes(1);

    const anotherPaginationItem = container.querySelectorAll('.someui-carousel__pagination-item')[2];
    await userEvent.click(anotherPaginationItem);

    expect(onChangeSpy).toBeCalledTimes(2);
  });

  // TODO: Write test
  it.todo('should animate automatically');
});
