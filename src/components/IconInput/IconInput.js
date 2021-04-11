import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    fontSize: 14 / 16 + 'rem',
    height: 24,
    borderWidth: 1,
  },
  medium: {
    fontSize: 18 / 16 + 'rem',
    height: 36,
    borderWidth: 2,
  },
};

const Wrapper = styled.div`
  width: var(--width);
  height: var(--height);
  position: relative;
`;

const NativeInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;
const PresentationalBit = styled.div`
  font-size: var(--fontSize);
  border-bottom: var(--borderWidth) solid ${COLORS.black};
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const [text, setText] = React.useState('');
  const presentationalStyles = {
    '--fontSize': SIZES[size].fontSize,
    '--borderWidth': SIZES[size].borderWidth + 'px',
  };
  const wrapperStyles = {
    '--width': width + 'px',
    '--height': SIZES[size].height + 'px',
  };
  return (
    <Wrapper style={wrapperStyles}>
      <NativeInput
        placeholder={placeholder}
        onChange={(e) => setText(e.target.value)}
      ></NativeInput>
      <PresentationalBit style={presentationalStyles}>
        <Icon id={icon} strokeWidth={1} size={24} />
        {!text ? placeholder : text}
      </PresentationalBit>
    </Wrapper>
  );
};

export default IconInput;
