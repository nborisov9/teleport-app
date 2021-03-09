import React from 'react';

import { useHomeStyles } from '../../../pages/Countries/theme';
import { ThemeContext, useThemeContext } from '../../../utils/ThemeContext';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const classes = useHomeStyles();
  const { themeMode }: React.ContextType<typeof ThemeContext> = useThemeContext();

  const getColor = () => {
    if (themeMode === 'light') {
      return 'white';
    }

    if (themeMode === 'dark') {
      return 'gray';
    }
  };

  return (
    <div className={classes.wrapper} style={{ background: getColor() }}>
      {children}
    </div>
  );
};

export default Wrapper;
