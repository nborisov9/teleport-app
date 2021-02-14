import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import IconArrowLeft from '@material-ui/icons/ArrowBack';

import { LoadingBlock } from '../LoadingBlock';
import { CountryBasicInfo } from '../CountryBasicInfo';
import { CountrySalaryInfo } from '../CountrySalaryInfo';
import { selectCountryDataLoadingState } from '../../store/countries/selectors';
import { useHomeStyles } from '../../pages/Home/theme';
import { ICountryBasicData, ICountrySalaryData } from '../../store/countries/types';

interface CountriesDataBlockProps {
  viewCountryData: boolean;
  countriesBasicData: ICountryBasicData;
  countriesSalaryData: ICountrySalaryData[];
}

const CountriesDataBlock: React.FC<CountriesDataBlockProps> = ({
  viewCountryData,
  countriesBasicData,
  countriesSalaryData,
}) => {
  const classes = useHomeStyles();

  const loadingCountryData = useSelector(selectCountryDataLoadingState);

  return (
    <Grid item xs>
      {viewCountryData ? (
        !loadingCountryData ? (
          <LoadingBlock size={60} />
        ) : (
          <>
            <CountryBasicInfo countriesBasicData={countriesBasicData} />
            <CountrySalaryInfo countriesSalaryData={countriesSalaryData} />
          </>
        )
      ) : (
        <Typography variant="h5" className={classes.countriesAllSelectTitle}>
          <IconArrowLeft /> select country
        </Typography>
      )}
    </Grid>
  );
};

export default CountriesDataBlock;
