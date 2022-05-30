import React, { FC } from 'react';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`;

interface IProps {
  children: any;
}

const Backdrop: FC<IProps> = props => {
  const { children } = props;
  return <StyledBackdrop>{children}</StyledBackdrop>;
};

export default Backdrop;
