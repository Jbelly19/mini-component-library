/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const SIZES = {
  small: {
    height: 8,
    padding: 0,
  },
  medium: {
    height: 12,
    padding: 0,
  },
  large: {
    height: 24,
    padding: 4,
  },
};

const ProgressBarOuter = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const ProgressBarInner = styled.div`
  height: 100%;
  width: var(--width);
  background-color: ${COLORS.primary};
  position: relative;
  border-radius: var(--left-border-radius) var(--right-border-radius)
    var(--right-border-radius) var(--left-border-radius);
`;

const ProgressBar = ({ value, size }) => {
  const OUTER_WIDTH = 370;
  const INNER_MAX_WIDTH = OUTER_WIDTH - SIZES[size].padding * 2; // total width minus the padding
  const INNER_BORDER_RADIUS = 4; // eye balled this value
  const outerStyles = {
    '--width': OUTER_WIDTH + 'px',
    '--height': SIZES[size].height + 'px',
    '--padding': SIZES[size].padding + 'px',
  };
  const innerStyles = {
    '--width':
      Math.min(INNER_MAX_WIDTH * (value / 100), INNER_MAX_WIDTH) + 'px',
    '--right-border-radius':
      value >= 99
        ? Math.min(INNER_BORDER_RADIUS * (value / 100), 4) + 'px'
        : '0px',
    '--left-border-radius': INNER_BORDER_RADIUS + 'px',
  };

  return (
    <ProgressBarOuter
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin='0'
      aria-valuemax='100'
      style={outerStyles}
    >
      <ProgressBarInner style={innerStyles}></ProgressBarInner>
    </ProgressBarOuter>
  );
};

export default ProgressBar;
