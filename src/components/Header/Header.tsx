import React from 'react';

import { useHomeStyles } from '../../pages/Home/theme';

import IconInstagram from '@material-ui/icons/Instagram';
import IconFacebook from '@material-ui/icons/Facebook';
import IconTwitter from '@material-ui/icons/Twitter';
import Container from '@material-ui/core/Container';
import { TextField } from '@material-ui/core';

export const Header: React.FC = (): React.ReactElement => {
  const classes = useHomeStyles();

  return (
    <div className={classes.headerWrapper}>
      <Container className={classes.headerContainer} maxWidth="lg">
        <div className={classes.headerSearch}>
          <TextField style={{ width: 160 }} variant="outlined" size="small" />
        </div>
        <div className={classes.headerLogo}>Teleport-app</div>
        <div className={classes.headerSocial}>
          <IconInstagram className={classes.headerSocialIcons} />
          <IconFacebook className={classes.headerSocialIcons} />
          <IconTwitter className={classes.headerSocialIcons} />
        </div>
      </Container>
    </div>
  );
};
