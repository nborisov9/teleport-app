import React from 'react';
import { CircularProgress } from '@material-ui/core';

import { useHomeStyles } from '../../pages/Home/theme';

interface LoadingBlockProps {
  size?: number;
  marginTop?: number;
  width?: string | number;
}

export const LoadingBlock: React.FC<LoadingBlockProps> = ({
  size = 60,
  marginTop = 0,
  width = 'atuo',
}: LoadingBlockProps): React.ReactElement => {
  const classes = useHomeStyles();
  const loadingStyles: React.CSSProperties = { marginTop: marginTop, width: width };

  return (
    <div className={classes.loadingBlockWrapper} style={loadingStyles}>
      <CircularProgress size={size} className={classes.loadingBlockCircle} disableShrink />
    </div>
  );
};
