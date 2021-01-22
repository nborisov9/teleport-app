import React from 'react';
import { CircularProgress } from '@material-ui/core';

interface LoadingBlockProps {
  size?: number;
}

export const LoadingBlock: React.FC<LoadingBlockProps> = ({
  size = 60,
}: LoadingBlockProps): React.ReactElement => {
  return (
    <div style={{ marginTop: 170, display: 'flex', justifyContent: 'center' }}>
      <CircularProgress size={size} disableShrink style={{ color: 'rgb(0, 103, 238)' }} />
    </div>
  );
};
