import * as React from 'react';
declare type BreadcrumbItemProps = {
    key: string;
    className?: string;
    children: React.ReactElement[] | React.ReactElement | string;
};
declare const BreadcrumbItem: React.FC<BreadcrumbItemProps>;
declare type BreadcrumbProps = {
    className?: string;
    separator?: string | React.ReactElement;
    children: React.ReactElement[];
};
declare type BreadcrumbComposition = {
    Item: typeof BreadcrumbItem;
};
declare const Breadcrumb: React.FC<BreadcrumbProps> & BreadcrumbComposition;
export default Breadcrumb;
