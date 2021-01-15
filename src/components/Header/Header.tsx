import React from 'react';

import { useHomeStyles } from '../../pages/theme';

import IconInstagram from '@material-ui/icons/Instagram';
import IconFacebook from '@material-ui/icons/Facebook';
import IconTwitter from '@material-ui/icons/Twitter';
import Container from '@material-ui/core/Container';
import { InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { SearchTextField } from '../SearchTextField';

export const Header: React.FC = (): React.ReactElement => {
  const classes = useHomeStyles();

  return (
    <div className={classes.headerWrapper}>
      <Container className={classes.headerContainer} maxWidth="lg">
        <div className={classes.headerSearch}>
          <SearchTextField
            className={classes.inputSearch}
            variant="outlined"
            placeholder="Поиск"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
        </div>
        <div className={classes.headerLogo}>Teleport-app</div>
        <div className={classes.headerAllCitiesLink}>All cities</div>
      </Container>
    </div>
  );
};
