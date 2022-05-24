import React from 'react';
export declare const RATING_PREFIX: string;
declare type RatingProps = {
    defaultValue?: number;
    onChange?: (index: number) => void;
    readOnly?: boolean;
    withHalf?: boolean;
    customIcon?: (index: number, isActive: boolean) => React.ReactElement;
    className?: string;
};
declare const Rating: React.FC<RatingProps>;
export default Rating;
