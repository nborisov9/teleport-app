import React from 'react';
import { CircularProgress } from '@material-ui/core';

import { useHomeStyles } from '../../pages/Home/theme';

interface LoadingBlockProps {
  size?: number;
}

export const LoadingBlock: React.FC<LoadingBlockProps> = ({
  size = 60,
}: LoadingBlockProps): React.ReactElement => {
  const classes = useHomeStyles();

  return (
    <div className={classes.loadingBlockWrapper}>
      <CircularProgress size={size} className={classes.loadingBlockCircle} disableShrink />
    </div>
  );
};
