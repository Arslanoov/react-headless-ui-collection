import React, { useState } from 'react';

import { PREFIX } from '../../const/prefix';

const RATING_PREFIX = `${PREFIX}-rate`;

const CustomRatingIcon = () => <div>Star</div>;

type RatingProps = {
  defaultValue?: number;
  onChange?: (index: number) => void;
  readOnly?: boolean;
  withHalf?: boolean;
  customIcon?: (index: number) => React.ReactElement;
  className?: string;
};

// TODO: Implement with half

const Rating: React.FC<RatingProps> = ({
  defaultValue = 5,
  onChange = () => {},
  readOnly = false,
  customIcon = () => <CustomRatingIcon />,
  className = '',
}) => {
  const [value, setValue] = useState(defaultValue);

  const onValueChange = (index: number) => {
    setValue(index);
    onChange(index);
  };

  const icons = [];
  for (let i = 0; i < 5; i++) {
    icons.push(
      <div
        onClick={() => !readOnly && onValueChange(i)}
        className={`${RATING_PREFIX}__item ${i > value ? RATING_PREFIX + '__item_disabled' : ''}`}
        key={i}
      >
        {customIcon(i)}
      </div>
    );
  }

  return (
    <div className={`${RATING_PREFIX}__items ${readOnly ? RATING_PREFIX + '__items_disabled' : ''} ${className}`}>
      {icons}
    </div>
  );
};

export default Rating;