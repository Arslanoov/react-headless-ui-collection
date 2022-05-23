import React, { useState, useContext } from 'react';

import { PREFIX } from '../../../const/prefix';

import CollapseContext, { OnChangeHandler } from './Collapse.context';

const COLLAPSE_PREFIX = `${PREFIX}-collapse`;

type PanelProps = {
  children: React.ReactElement[] | React.ReactElement | string;
  index?: number;
  header?: string;
  disabled?: boolean;
  isDefaultActive?: boolean;
  icon?: React.ReactElement | string;
};

const Panel: React.FC<PanelProps> = ({
  index = -1,
  children,
  header = '',
  disabled = false,
  isDefaultActive = false,
  icon = '->',
}) => {
  const [isActive, setIsActive] = useState<boolean>(isDefaultActive);

  const onChange = useContext(CollapseContext);

  const toggle = () => {
    if (!disabled) {
      onChange(index, !isActive);
      setIsActive((isActive) => !isActive);
    }
  };

  return (
    <div className={`${COLLAPSE_PREFIX}__panel`}>
      <h3
        className={`
          ${COLLAPSE_PREFIX}__panel-header
          ${disabled ? COLLAPSE_PREFIX + '__panel-header_disabled' : ''}
        `}
        onClick={toggle}
      >
        <div className={`${COLLAPSE_PREFIX}__panel-icon`}>{icon}</div>
        {header}
      </h3>
      {/* TODO: Add js animation */}
      <div
        className={`
          ${COLLAPSE_PREFIX}__panel-content
          ${isActive ? COLLAPSE_PREFIX + '__panel-content_active' : ''}
        `}
      >
        {children}
      </div>
    </div>
  );
};

type CollapseProps = {
  children: React.ReactElement[] | React.ReactElement;
  defaultActiveIndex?: number[];
  onChange?: OnChangeHandler;
};

type CollapseComposition = {
  Panel: typeof Panel;
};

const Collapse: React.FC<CollapseProps> & CollapseComposition = ({
  children,
  defaultActiveIndex = [],
  onChange = () => {},
}) => {
  return (
    <div className={`${COLLAPSE_PREFIX}__container`}>
      <CollapseContext.Provider value={onChange}>
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            isDefaultActive: defaultActiveIndex.includes(index),
            index,
          })
        )}
      </CollapseContext.Provider>
    </div>
  );
};

Collapse.Panel = Panel;

export default Collapse;
