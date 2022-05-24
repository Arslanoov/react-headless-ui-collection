import React from 'react';

import { PREFIX } from 'const/prefix';

const GRID_PREFIX = `${PREFIX}-grid`;

type ColProps = {
  span?: number;
  children: string | React.ReactElement | React.ReactElement[];
};

export const Col: React.FC<ColProps> = ({ span = 12, children }) => {
  const colSpan = Math.max(Math.min(span, 12), 0);
  return <div className={`${GRID_PREFIX}__col ${GRID_PREFIX}__col-${colSpan}`}>{children}</div>;
};

type RowProps = {
  className?: string;
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | string;
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | string;
  children: React.ReactElement | React.ReactElement[];
};

export const Row: React.FC<RowProps> = ({ className = '', justify = 'flex-start', align = 'flex-start', children }) => {
  return (
    <div
      className={`${GRID_PREFIX}__row ${className}`}
      style={{
        justifyContent: justify,
        alignItems: align,
      }}
    >
      {children}
    </div>
  );
};
