import React, { CSSProperties, FC } from 'react';
import { BarLoader } from 'react-spinners';

import Backdrop from 'app/components/Backdrop';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

interface IProps {
  color?: string;
  loading: boolean;
  css?: any;
  height?: string;
  width?: string;
}

export const BarLoading: FC<IProps> = props => {
  const { loading } = props;
  return loading ? (
    <Backdrop>
      <BarLoader {...props} />
    </Backdrop>
  ) : null;
};

BarLoading.defaultProps = {
  color: 'green',
  css: override,
  width: '100%',
};
