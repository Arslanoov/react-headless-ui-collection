import React from 'react';
declare type TableColumn = {
    title: string;
    index: string;
    key: string;
};
declare type TableProps<RecordType = any> = {
    columns?: TableColumn[];
    data?: readonly RecordType[];
    className?: string;
};
declare const Table: React.FC<TableProps>;
export default Table;
