import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';

import { useCitiesAllStyles } from '../../pages/CitiesAll/theme';

interface YandexMapProps {
  classes: ReturnType<typeof useCitiesAllStyles>;
  latitude: number;
  longitude: number;
}

export const YandexMap: React.FC<YandexMapProps> = ({ latitude, longitude, classes }) => {
  const [coords, setCoords] = React.useState<number[]>([]);

  React.useEffect(() => {
    setCoords([latitude, longitude]);
  }, [latitude, longitude]);

  return (
    <YMaps>
      <div className={classes.citiesAllYandexMap}>
        <Map
          width={'100%'}
          height={320}
          state={{
            center: coords,
            zoom: 9,
          }}
        />
      </div>
    </YMaps>
  );
};
