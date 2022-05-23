import React, { useEffect } from 'react';

import { PREFIX } from '@/const/prefix';

const MODAL_PREFIX = `${PREFIX}-modal`;

type ModalProps = {
  visible?: boolean;
  className?: string;
  children: string | React.ReactElement | React.ReactElement[];
};

const Modal: React.FC<ModalProps> = ({ visible = false, className = '', children }) => {
  useEffect(() => {
    if (visible) {
      document?.body?.classList.add(`${PREFIX}-scroll`);
    } else {
      document?.body?.classList.remove(`${PREFIX}-scroll`);
    }
  }, [visible]);

  return (
    <div
      className={`${MODAL_PREFIX} ${visible ? MODAL_PREFIX + '_visible' : ''} ${className}`}
      role="dialog"
      aria-modal="true"
    >
      {children}
    </div>
  );
};

export default Modal;
