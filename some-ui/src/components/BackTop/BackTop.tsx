import React from 'react';

import { PREFIX } from '../../const/prefix';

import useBackTop from './useBackTop';

const BACKTOP_PREFIX = `${PREFIX}-backtop`;

type BackTopProps = {
  children: React.ReactElement | string;
};

const BackTop: React.FC<BackTopProps> = ({ children = <div>top</div> }) => {
  const [onClick, visible] = useBackTop();

  return (
    <div
      onClick={onClick}
      className={BACKTOP_PREFIX}
      style={{
        opacity: visible ? '1' : '0',
        zIndex: visible ? '100' : '-10',
      }}
    >
      {children}
    </div>
  );
};

export default BackTop;
