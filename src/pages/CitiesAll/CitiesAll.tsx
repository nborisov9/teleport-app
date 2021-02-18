import React from 'react';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCities } from '../../store/cities/actions';
import { useCitiesAllStyles } from './theme';
import { SelectBlock } from '../../components/SelectBlock';
import { LoadingBlock } from '../../components/LoadingBlock';
import { YandexMap } from '../../components/YandexMap';
import {
  selectCityBasicData,
  selectCityCoordsData,
  selectCityImageData,
  selectCityLoadingState,
  selectCityNames,
  selectCitySalaryData,
  selectCityScoreData,
} from '../../store/cities/selectors';
import { CitiesSalaryInfo } from '../../components/CitiesSalaryInfo';
import { BarGraphBlock } from '../../components/BarGraphBlock';
import SelectBlockWrapper from '../../components/SelectBlockWrapper';
import CitiesBasicInfo from '../../components/CitiesBasicInfo';

const CitiesAll: React.FC = () => {
  const classes = useCitiesAllStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const cityNames = useSelector(selectCityNames);
  const cityBasicData = useSelector(selectCityBasicData);
  const cityCoordsData = useSelector(selectCityCoordsData);
  const cityImageData = useSelector(selectCityImageData);
  const cityScoreData = useSelector(selectCityScoreData);
  const citySalaryData = useSelector(selectCitySalaryData);
  const cityLoadingState = useSelector(selectCityLoadingState);

  if (!cityLoadingState) {
    return <LoadingBlock size={60} />;
  }

  return (
    <div className={classes.citiesAllWrapper}>
      <SelectBlockWrapper imageURL={cityImageData}>
        <SelectBlock cityNames={cityNames} />
      </SelectBlockWrapper>
      <Container maxWidth="lg">
        {!cityCoordsData.location ? (
          <LoadingBlock size={60} />
        ) : (
          <YandexMap
            classes={classes}
            latitude={cityCoordsData.location.latlon.latitude}
            longitude={cityCoordsData.location.latlon.longitude}
          />
        )}
        <CitiesBasicInfo
          cityBasicData={cityBasicData}
          cityPopulationData={cityCoordsData.population}
          citySummaryData={cityScoreData.summary}
        />

        {!cityScoreData.categories ? (
          <LoadingBlock size={60} />
        ) : (
          <BarGraphBlock cityScoreData={cityScoreData.categories} />
        )}
        <div className={classes.citiesSalaryInfo}>
          <CitiesSalaryInfo citiesSalaryData={citySalaryData.slice(39)} />
        </div>
      </Container>
    </div>
  );
};

export default CitiesAll;
