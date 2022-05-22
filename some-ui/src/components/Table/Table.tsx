import React from 'react';

import { PREFIX } from '../../const/prefix';

const TABLE_PREFIX = `${PREFIX}-table`;

// TODO: Add pagination

type TableColumn = {
  title: string;
  index: string;
  key: string;
};

type TableProps<RecordType = any> = {
  columns?: TableColumn[];
  data?: readonly RecordType[];
  className?: string;
};

const Table: React.FC<TableProps> = ({ columns = [], data = [], className = '' }) => {
  const columnsItems = columns.map((column) => (
    <th className={`${TABLE_PREFIX}__columns-item ${TABLE_PREFIX}__column`} key={column.key}>
      {column.title}
    </th>
  ));

  return (
    <table className={`${TABLE_PREFIX} ${className}`}>
      <thead>
        <tr className={`${TABLE_PREFIX}__columns`}>{columnsItems}</tr>
      </thead>
      <tbody>
        {data.map((dataItem) => (
          <tr className={`${TABLE_PREFIX}__row`} key={dataItem.key}>
            {columns.map((column) => (
              <td className={`${TABLE_PREFIX}__row-item ${TABLE_PREFIX}__item`} key={column.key}>
                {dataItem[column.index]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
