import React, { FC, useState, useEffect } from 'react';
import { Progress, ProgressProps } from '@chakra-ui/react';
import { useInterval } from 'react-use';

import Backdrop from 'app/components/Backdrop';

interface IProps extends ProgressProps {
  loading: boolean;
}

export const BarLoading: FC<IProps> = props => {
  const { loading, value, max = 100, ...rest } = props;

  const [customValue, setCustomValue] = useState(0);
  const [show, setShow] = useState(true);

  useInterval(() => {
    setCustomValue(prev =>
      prev < max - 25 ? prev + Math.floor(Math.random() * 10) + 14 : prev,
    );
  }, 100);

  useEffect(() => {
    if (!loading) {
      setCustomValue(max);
    }
  }, [loading, max]);

  useEffect(() => {
    if (customValue === max) {
      setShow(false);
    }
  }, [customValue, max]);

  return show ? (
    <Backdrop>
      <Progress max={max} value={customValue} {...rest} />
    </Backdrop>
  ) : null;
};

BarLoading.defaultProps = {
  loading: false,
  size: 'xs',
  colorScheme: 'pink',
  max: 100,
  min: 0,
};
