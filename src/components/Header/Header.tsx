import React from 'react';

import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import { useHomeStyles } from '../../pages/Home/theme';
import { SearchInput } from '../SearchInput';

export const Header: React.FC = (): React.ReactElement => {
  const classes = useHomeStyles();

  return (
    <div className={classes.headerWrapper}>
      <Container className={classes.headerContainer} maxWidth="lg">
        <div className={classes.headerSearch}>
          <SearchInput placeHolder="поиск" classes={classes} />
        </div>

        <div className={classes.headerLogo}>
          <Link to="/">Teleport-app</Link>
        </div>

        <div className={classes.headerAllCitiesLink}>
          <Link to="/citiesAll">All cities</Link>
        </div>
      </Container>
    </div>
  );
};
