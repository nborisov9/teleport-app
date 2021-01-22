import React from 'react';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCities } from '../../store/cities/actions';
import { selectCityData, selectCityNames } from '../../store/cities/selectors';
import { useCitiesAllStyles } from './theme';
import { SelectBlock } from '../../components/SelectBlock';
import { LoadingBlock } from '../../components/LoadingBlock';
import { YandexMap } from '../../components/YandexMap';

export const CitiesAll: React.FC = (): React.ReactElement | null => {
  const classes = useCitiesAllStyles();

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const citiesFullName = useSelector(selectCityNames);
  const cityData = useSelector(selectCityData);

  const citesFirstName: Array<string> = citiesFullName.map(({ matching_full_name }): string => {
    return matching_full_name.split(',')[0];
  });

  if (!citiesFullName || !cityData) {
    return null;
  }

  return (
    <div className={classes.citiesAllWrapper}>
      <div className={classes.citiesAllSelectWrapper}>
        <div className={classes.citiesAllImage}>
          <img
            src="https://d13k13wj6adfdf.cloudfront.net/urban_areas/stockholm_web-1e571c8d62.jpg"
            alt=""
          />
          <div className={classes.citiesAllSelectBlock}>
            <SelectBlock cityNames={citesFirstName} classes={classes} />
          </div>
        </div>
      </div>
      <Container maxWidth="lg">
        {cityData.location ? (
          <YandexMap
            classes={classes}
            latitude={cityData.location.latlon.latitude}
            longitude={cityData.location.latlon.longitude}
          />
        ) : (
          <LoadingBlock size={60} />
        )}
      </Container>
    </div>
  );
};
