import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';

import { useHomeStyles } from '../../pages/Home/theme';
import { SearchInput } from '../SearchInput';
import { clearCountriesItems } from '../../store/countries/actions';

export const Header: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const classes = useHomeStyles();

  const logoClickHandler = () => {
    dispatch(clearCountriesItems());
  };

  return (
    <div className={classes.headerWrapper}>
      <Container className={classes.headerContainer} maxWidth="lg">
        <div className={classes.headerSearch}>
          <SearchInput placeHolder="search" />
        </div>

        <div className={classes.headerLogo} onClick={logoClickHandler}>
          <Link to="/">Teleport-app</Link>
        </div>

        <div className={classes.headerAllCitiesLink}>
          <Link to="/citiesAll/Moscow">My cities</Link>
        </div>
      </Container>
    </div>
  );
};
