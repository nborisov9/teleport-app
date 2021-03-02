import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';

import { useMyCitiesStyles } from '../../../pages/MyCities/theme';

interface YandexMapProps {
  latitude: number;
  longitude: number;
}

export const YandexMap: React.FC<YandexMapProps> = ({ latitude, longitude }) => {
  const [coords, setCoords] = React.useState<number[]>([]);

  const classes = useMyCitiesStyles();

  React.useEffect(() => {
    setCoords([latitude, longitude]);
  }, [latitude, longitude]);

  return (
    <YMaps>
      <div className={classes.myCitiesYandexMap}>
        <Map width={'100%'} height={320} state={{ center: coords, zoom: 9 }} />
      </div>
    </YMaps>
  );
};
