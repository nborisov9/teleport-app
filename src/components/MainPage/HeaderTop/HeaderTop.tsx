import { Container } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { useHomeStyles } from '../../../pages/Countries/theme';
import { clearCountriesItems } from '../../../store/countries/actions';
import { SearchInput } from '../SearchInput';

const HeaderTop = () => {
  const dispatch = useDispatch();
  const classes = useHomeStyles();

  const logoClickHandler = () => {
    dispatch(clearCountriesItems());
  };

  return (
    <div className={classes.headerTopWrapper}>
      <Container className={classes.headerTopContainer} maxWidth="lg">
        <div className={classes.headerTopSearch}>
          <SearchInput placeHolder="search" />
        </div>
        <div className={classes.headerTopLogo} onClick={logoClickHandler}>
          <Link to="/">Teleport-app</Link>
        </div>
        <div className={classes.headerTopMyCitiesLink}>
          <Link to="/mycities/Moscow">my cities</Link>
        </div>
      </Container>
    </div>
  );
};

export default HeaderTop;
