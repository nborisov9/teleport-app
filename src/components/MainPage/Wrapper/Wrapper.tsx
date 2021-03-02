import React from 'react';

import { useHomeStyles } from '../../../pages/Countries/theme';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const classes = useHomeStyles();
  return <div className={classes.wrapper}>{children}</div>;
};

export default Wrapper;
