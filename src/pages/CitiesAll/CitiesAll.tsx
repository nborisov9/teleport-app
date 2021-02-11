import React from 'react';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import IconPopulation from '@material-ui/icons/People';
import IconPublic from '@material-ui/icons/Public';
import IconTitle from '@material-ui/icons/Title';

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

export const CitiesAll: React.FC = (): React.ReactElement | null => {
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

  return (
    <div className={classes.citiesAllWrapper}>
      {!cityLoadingState ? (
        <LoadingBlock size={60} />
      ) : (
        <>
          <div className={classes.citiesAllSelectWrapper}>
            <div className={classes.citiesAllImage}>
              <img src={cityImageData} alt="" />
              <div className={classes.citiesAllSelectBlock}>
                <SelectBlock cityNames={cityNames} classes={classes} />
              </div>
            </div>
          </div>
          <Container maxWidth="lg">
            {cityCoordsData.location ? (
              <YandexMap
                classes={classes}
                latitude={cityCoordsData.location.latlon.latitude}
                longitude={cityCoordsData.location.latlon.longitude}
              />
            ) : (
              <LoadingBlock size={60} />
            )}
            <div className={classes.citiesAllInfoWrapper}>
              <div className={classes.citiesAllInfoRow}>
                <div className={classes.citiesAllInfoTitle}>
                  <IconTitle />
                  name: <span>{cityBasicData.full_name}</span>
                </div>
                <div className={classes.citiesAllInfoTitle}>
                  <IconPublic />
                  continent: <span>{cityBasicData.continent}</span>
                </div>
                <div className={classes.citiesAllInfoTitle}>
                  <IconPopulation />
                  population: <span>{cityCoordsData.population}</span>
                </div>
              </div>
            </div>
            <div
              className={classes.citiesAllInfoText}
              dangerouslySetInnerHTML={{ __html: cityScoreData.summary }}
            />
            {!cityScoreData.categories ? (
              <LoadingBlock size={60} />
            ) : (
              <BarGraphBlock cityScoreData={cityScoreData.categories} />
            )}
            <div style={{ marginTop: 80 }}>
              <CitiesSalaryInfo citiesSalaryData={citySalaryData.slice(39)} />
            </div>
          </Container>
        </>
      )}
    </div>
  );
};
