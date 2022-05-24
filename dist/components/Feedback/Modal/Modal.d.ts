import React from 'react';
export declare const MODAL_PREFIX: string;
declare type ModalProps = {
    visible?: boolean;
    className?: string;
    children: string | React.ReactElement | React.ReactElement[];
};
declare const Modal: React.FC<ModalProps>;
export default Modal;
