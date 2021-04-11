import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    fontSize: 14 / 16 + 'rem',
    height: 24 / 16,
    borderWidth: 1,
    iconSize: 16,
    paddingLeft: 24,
  },
  large: {
    fontSize: 18 / 16 + 'rem',
    height: 36 / 16,
    borderWidth: 2,
    iconSize: 24,
    paddingLeft: 36,
  },
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  border: none;
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  padding-left: var(--paddingLeft);
  color: inherit;
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }
`;

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = {
    '--width': width + 'px',
    '--fontSize': SIZES[size].fontSize,
    '--borderWidth': SIZES[size].borderWidth + 'px',
    '--height': SIZES[size].height + 'rem',
    '--paddingLeft': SIZES[size].paddingLeft + 'px',
  };
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': SIZES[size].iconSize + 'px' }}>
        <Icon id={icon} size={SIZES[size].iconSize} />
      </IconWrapper>
      <TextInput style={styles} {...delegated} />
    </Wrapper>
  );
};

export default IconInput;
