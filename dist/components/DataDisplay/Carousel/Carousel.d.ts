import React from 'react';
export declare const CAROUSEL_PREFIX: string;
declare type Props = {
    children: React.ReactElement[];
    width?: number;
    height?: number;
    autoplay?: boolean;
    autoplayTimeout?: number;
    onChange?: (index: number) => void;
};
declare const Carousel: React.FC<Props>;
export default Carousel;
