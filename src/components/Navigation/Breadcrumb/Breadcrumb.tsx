import * as React from 'react';

import { PREFIX } from 'const/prefix';

const BREADCRUMB_PREFIX = `${PREFIX}-bc`;

type BreadcrumbItemProps = {
  key: string;
  className?: string;
  children: React.ReactElement[] | React.ReactElement | string;
};

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ className = '', children }) => {
  return <div className={`${BREADCRUMB_PREFIX}__item ${className}`}>{children}</div>;
};

type BreadcrumbProps = {
  className?: string;
  separator?: string | React.ReactElement;
  children: React.ReactElement[];
};

type BreadcrumbComposition = {
  Item: typeof BreadcrumbItem;
};

const Breadcrumb: React.FC<BreadcrumbProps> & BreadcrumbComposition = ({ className = '', separator, children }) => {
  const items = children.map((breadcrumbItem, index) => (
    <React.Fragment key={breadcrumbItem.key}>
      {breadcrumbItem}
      {index !== children.length - 1 &&
        (typeof separator === 'string' ? (
          <div className={`${BREADCRUMB_PREFIX}__separator`}>{separator}</div>
        ) : (
          separator
        ))}
    </React.Fragment>
  ));

  return <div className={`${BREADCRUMB_PREFIX}__items ${className}`}>{items}</div>;
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
