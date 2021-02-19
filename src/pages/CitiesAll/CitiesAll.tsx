import React from 'react';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { clearCityData, fetchCitiesData } from '../../store/cities/actions';
import { useCitiesAllStyles } from './theme';
import { SelectBlock } from '../../components/SelectBlock';
import { LoadingBlock } from '../../components/LoadingBlock';
import { YandexMap } from '../../components/YandexMap';
import {
  selectCityBasicData,
  selectCityCoordsData,
  selectCityDataLoadingState,
  selectCityImageData,
  selectCityNames,
  selectCityNamesLoadingState,
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
  const history = useHistory();

  const pathname = history.location.pathname.slice(11);

  React.useEffect(() => {
    dispatch(clearCityData());
    dispatch(fetchCitiesData(pathname));
  }, [dispatch, pathname]);

  const cityNames = useSelector(selectCityNames);
  const cityBasicData = useSelector(selectCityBasicData);
  const cityImageData = useSelector(selectCityImageData);
  const cityScoreData = useSelector(selectCityScoreData);
  const cityCoordsData = useSelector(selectCityCoordsData);
  const citySalaryData = useSelector(selectCitySalaryData);
  const cityNamesLoadingState = useSelector(selectCityNamesLoadingState);
  const cityDataLoadingState = useSelector(selectCityDataLoadingState);

  if (!cityDataLoadingState || !cityNamesLoadingState) {
    return <LoadingBlock size={60} marginTop={0} />;
  }

  return (
    <div className={classes.citiesAllWrapper}>
      <SelectBlockWrapper imageURL={cityImageData}>
        <SelectBlock cityNames={cityNames} />
      </SelectBlockWrapper>
      <Container maxWidth="lg">
        <YandexMap
          classes={classes}
          latitude={cityCoordsData.location.latlon.latitude}
          longitude={cityCoordsData.location.latlon.longitude}
        />
        <CitiesBasicInfo
          cityBasicData={cityBasicData}
          cityPopulationData={cityCoordsData.population}
          citySummaryData={cityScoreData.summary}
        />
        <BarGraphBlock cityScoreData={cityScoreData.categories} />

        <div className={classes.citiesSalaryInfo}>
          <CitiesSalaryInfo citiesSalaryData={citySalaryData.slice(39)} />
        </div>
      </Container>
    </div>
  );
};

export default CitiesAll;
