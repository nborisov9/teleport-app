import React from 'react';
import Switch from '@material-ui/core/Switch';
import Container from '@material-ui/core/Container';

import { useHomeStyles } from '../../../pages/Countries/theme';
import { ThemeContext, useThemeContext } from '../../../utils/ThemeContext';

const HedaerBottom = () => {
  const [inputState, setInputState] = React.useState<boolean>(false);

  const { toggleThemeHandler }: React.ContextType<typeof ThemeContext> = useThemeContext();

  const classes = useHomeStyles();

  const handleChange = () => {
    setInputState((prevState) => !prevState);
    toggleThemeHandler(inputState ? 'light' : 'dark');
  };

  return (
    <div className={classes.headerBottomWrapper}>
      <Container className={classes.headerBottomContainer} maxWidth="lg">
        <Switch
          checked={inputState}
          onChange={handleChange}
          color="primary"
          size="medium"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </Container>
    </div>
  );
};

export default HedaerBottom;
