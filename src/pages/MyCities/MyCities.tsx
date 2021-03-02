import React from 'react';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { clearCityData, fetchCitiesData } from '../../store/cities/actions';
import { useMyCitiesStyles } from './theme';
import { SelectBlock } from '../../components/MainPage/SelectBlock';
import { LoadingBlock } from '../../components/MainPage/LoadingBlock';
import { YandexMap } from '../../components/CitiesPage/YandexMap';
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
import { CitiesSalaryInfo } from '../../components/CitiesPage/CitiesSalaryInfo';
import { BarGraphBlock } from '../../components/CitiesPage/BarGraphBlock';
import SelectBlockWrapper from '../../components/MainPage/SelectBlockWrapper';
import CitiesBasicInfo from '../../components/CitiesPage/CitiesBasicInfo';

interface IParams {
  city: string;
}

const MyCities: React.FC = () => {
  const classes = useMyCitiesStyles();

  const dispatch = useDispatch();
  const params: IParams = useParams();

  const { city } = params;

  React.useEffect(() => {
    dispatch(clearCityData());
    dispatch(fetchCitiesData(city));
  }, [dispatch, city]);

  const cityNames = useSelector(selectCityNames);
  const cityBasicData = useSelector(selectCityBasicData);
  const cityImageData = useSelector(selectCityImageData);
  const cityScoreData = useSelector(selectCityScoreData);
  const cityCoordsData = useSelector(selectCityCoordsData);
  const citySalaryData = useSelector(selectCitySalaryData);
  const cityNamesLoadingState = useSelector(selectCityNamesLoadingState);
  const cityDataLoadingState = useSelector(selectCityDataLoadingState);

  const latitude = cityCoordsData && cityCoordsData.location.latlon.latitude;
  const longitude = cityCoordsData && cityCoordsData.location.latlon.longitude;

  if (
    !cityCoordsData ||
    !cityBasicData ||
    !cityScoreData ||
    !cityDataLoadingState ||
    !cityNamesLoadingState
  ) {
    return <LoadingBlock size={60} marginTop={0} />;
  }

  return (
    <div className={classes.myCitiesWrapper}>
      <SelectBlockWrapper imageURL={cityImageData}>
        <SelectBlock cityNames={cityNames} />
      </SelectBlockWrapper>
      <Container maxWidth="lg">
        {latitude && longitude && <YandexMap latitude={latitude} longitude={longitude} />}
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

export default MyCities;
