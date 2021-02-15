import React from 'react';
import IconPopulation from '@material-ui/icons/People';
import IconMoney from '@material-ui/icons/AttachMoney';
import IconPublic from '@material-ui/icons/Public';
import IconTitle from '@material-ui/icons/Title';

import { ICountryBasicData } from '../store/countries/types';
import { useHomeStyles } from '../pages/Home/theme';

interface IBasicData {
  title: string;
  icon: React.ReactNode;
  dataInfo: string | number;
}

interface IGetCountryData {
  dataCountry: IBasicData[];
}

const getCountryData = (
  data: ICountryBasicData,
  classes: ReturnType<typeof useHomeStyles>,
): IGetCountryData => ({
  dataCountry: [
    {
      title: 'name',
      icon: <IconTitle className={classes.countriesInfoIcon} />,
      dataInfo: data.name,
    },
    {
      title: 'currency code',
      icon: <IconMoney className={classes.countriesInfoIcon} />,
      dataInfo: data.currency_code,
    },
    {
      title: 'geoname id',
      icon: <IconPublic className={classes.countriesInfoIcon} />,
      dataInfo: data.geoname_id,
    },
    {
      title: 'population',
      icon: <IconPopulation className={classes.countriesInfoIcon} />,
      dataInfo: data.population,
    },
  ],
});

export { getCountryData };
