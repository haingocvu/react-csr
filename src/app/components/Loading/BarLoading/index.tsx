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

const BarLoading: FC<IProps> = props => {
  const { color, loading, css, height, width } = props;
  return loading ? (
    <Backdrop>
      <BarLoader
        color={color}
        loading={loading}
        css={css}
        height={height}
        width={width}
      />
    </Backdrop>
  ) : null;
};

BarLoading.defaultProps = {
  color: 'green',
  css: override,
  width: '100%',
};

export default BarLoading;
