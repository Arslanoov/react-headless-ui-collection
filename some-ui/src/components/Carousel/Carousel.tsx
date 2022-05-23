import React, { useState, useEffect } from 'react';

import { PREFIX } from '../../const/prefix';

const CAROUSEL_PREFIX = `${PREFIX}-carousel`;

type Props = {
  children: React.ReactElement[];
  width?: number;
  height?: number;
  autoplay?: boolean;
  autoplayTimeout?: number;
  onChange?: (index: number) => void;
};

const Carousel: React.FC<Props> = ({
  width = 500,
  height = 150,
  autoplay = false,
  autoplayTimeout = 3000,
  onChange = () => {},
  children,
}) => {
  const [page, setPage] = useState(0);

  const onPageChange = (index: number) => {
    onChange(index);
    setPage(index);
  };

  const itemsCount = children?.length || 1;
  const paginationItems = [];
  for (let i = 0; i < itemsCount; i++) {
    paginationItems.push(
      <div
        className={`${CAROUSEL_PREFIX}__pagination-item ${page === i && CAROUSEL_PREFIX + '__pagination-item_current'}`}
        onClick={() => onPageChange(i)}
        key={i}
      >
        {i}
      </div>
    );
  }

  useEffect(() => {
    if (!autoplay) return;

    const id = setInterval(() => setPage((page) => (page + 1) % itemsCount), autoplayTimeout);

    return () => clearInterval(id);
  }, [autoplay, autoplayTimeout, itemsCount]);

  return (
    <div
      className={`${CAROUSEL_PREFIX}__container`}
      style={{
        width,
        height,
      }}
    >
      <div className={`${CAROUSEL_PREFIX}__items`}>
        {children.map((item, i) => (
          <div
            key={i}
            style={{
              left: `${(i - page) * width}px`,
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div className={`${CAROUSEL_PREFIX}__pagination`}>{paginationItems}</div>
    </div>
  );
};

export default Carousel;
