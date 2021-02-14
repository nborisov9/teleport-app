import React from 'react';

import { Typography } from '@material-ui/core';
import { useHomeStyles } from '../../pages/Home/theme';
import IconPopulation from '@material-ui/icons/People';
import IconMoney from '@material-ui/icons/AttachMoney';
import IconPublic from '@material-ui/icons/Public';
import IconTitle from '@material-ui/icons/Title';

interface ICountryBasicData {
  currency_code: string;
  geoname_id: number;
  name: string;
  population: number;
}

interface CountryBasicInfoProps {
  countriesBasicData: ICountryBasicData | any;
}

export const CountryBasicInfo: React.FC<CountryBasicInfoProps> = ({ countriesBasicData }) => {
  const classes = useHomeStyles();

  return (
    <>
      <Typography variant="h6" className={classes.countriesInfoTitle}>
        basic info
      </Typography>
      <div className={classes.countriesInfoWrapper}>
        <div className={classes.countryInfoName}>
          <span>
            <IconTitle className={classes.countriesInfoIcon} />
            name:
          </span>
          {countriesBasicData.name}
        </div>
        <div className={classes.countryInfoName}>
          <span>
            <IconMoney className={classes.countriesInfoIcon} />
            currency code:
          </span>
          {countriesBasicData.currency_code}
        </div>
        <div className={classes.countryInfoName}>
          <span>
            <IconPublic className={classes.countriesInfoIcon} />
            geoname id:
          </span>
          {countriesBasicData.geoname_id}
        </div>
        <div className={classes.countryInfoName}>
          <span>
            <IconPopulation className={classes.countriesInfoIcon} />
            population:
          </span>
          {countriesBasicData.population}
        </div>
      </div>
    </>
  );
};
