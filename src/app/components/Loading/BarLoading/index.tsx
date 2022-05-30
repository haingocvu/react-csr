import React, { FC, useState, useEffect } from 'react';
import { Progress, ProgressProps } from '@chakra-ui/react';
import Backdrop from 'app/components/Backdrop';

interface IProps extends ProgressProps {
  loading: boolean;
}

export const BarLoading: FC<IProps> = props => {
  const { loading, value, ...rest } = props;

  const [customValue, setCustomValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCustomValue(prev =>
        prev < 88 ? prev + Math.floor(Math.random() * 10) + 20 : prev,
      );
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return loading ? (
    <Backdrop>
      <Progress value={customValue} {...rest} />
    </Backdrop>
  ) : null;
};

BarLoading.defaultProps = {
  loading: false,
  size: 'xs',
  colorScheme: 'pink',
};
