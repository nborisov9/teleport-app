import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import IconArrowLeft from '@material-ui/icons/ArrowBack';

import { LoadingBlock } from '../../MainPage/LoadingBlock';
import { CountryBasicInfo } from '../CountryBasicInfo';
import { CountrySalaryInfo } from '../CountrySalaryInfo';
import {
  selectCountryBasicData,
  selectCountryDataLoadingState,
  selectCountrySalaryData,
} from '../../../store/countries/selectors';
import { useHomeStyles } from '../../../pages/Countries/theme';

interface CountriesDataBlockProps {
  viewCountryData: boolean;
}

const CountriesDataBlock: React.FC<CountriesDataBlockProps> = ({ viewCountryData }) => {
  const classes = useHomeStyles();

  const countriesBasicData = useSelector(selectCountryBasicData);
  const countriesSalaryData = useSelector(selectCountrySalaryData);
  const loadingCountryData = useSelector(selectCountryDataLoadingState);

  return (
    <Grid item xs>
      {viewCountryData ? (
        !loadingCountryData ? (
          <LoadingBlock size={60} marginTop={170} />
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
