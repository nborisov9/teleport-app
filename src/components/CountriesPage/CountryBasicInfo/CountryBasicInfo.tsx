import { Typography } from '@material-ui/core';
import React from 'react';

import { useHomeStyles } from '../../../pages/Countries/theme';
import { ICountryBasicData } from '../../../store/countries/types';
import { getCountryData } from '../../../utils/countryData';
import { LoadingBlock } from '../../MainPage/LoadingBlock';

interface CountryBasicInfoProps {
  countriesBasicData: ICountryBasicData | null;
}

export const CountryBasicInfo: React.FC<CountryBasicInfoProps> = ({ countriesBasicData }) => {
  const classes = useHomeStyles();
  const contryData = getCountryData(countriesBasicData, classes);

  if (!contryData) {
    return <LoadingBlock size={60} />;
  }

  return (
    <>
      <Typography variant="h6" className={classes.countriesInfoTitle}>
        basic info
      </Typography>
      <div className={classes.countriesInfoWrapper}>
        {contryData.map(({ title, icon, dataInfo }) => (
          <div className={classes.countryInfoName} key={title}>
            <span>
              {icon}
              {title}:
            </span>
            {dataInfo}
          </div>
        ))}
      </div>
    </>
  );
};
