import React from 'react';
import { CircularProgress } from '@material-ui/core';

import { useHomeStyles } from '../../pages/Home/theme';

interface LoadingBlockProps {
  size?: number;
  marginTop?: number;
}

export const LoadingBlock: React.FC<LoadingBlockProps> = ({
  size = 60,
  marginTop = 0,
}: LoadingBlockProps): React.ReactElement => {
  const classes = useHomeStyles();

  return (
    <div className={classes.loadingBlockWrapper} style={{ marginTop: marginTop }}>
      <CircularProgress size={size} className={classes.loadingBlockCircle} disableShrink />
    </div>
  );
};
