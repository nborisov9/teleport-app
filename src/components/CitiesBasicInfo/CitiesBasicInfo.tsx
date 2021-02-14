import React from 'react';
import IconPopulation from '@material-ui/icons/People';
import IconPublic from '@material-ui/icons/Public';
import IconTitle from '@material-ui/icons/Title';

import { useCitiesAllStyles } from '../../pages/CitiesAll/theme';
import { BasicDataType } from '../../store/cities/types';

interface CitiesBasicInfoProps {
  cityBasicData: BasicDataType;
  cityPopulationData: number;
  citySummaryData: string;
}

const CitiesBasicInfo: React.FC<CitiesBasicInfoProps> = ({
  cityBasicData,
  cityPopulationData,
  citySummaryData,
}) => {
  const classes = useCitiesAllStyles();

  return (
    <>
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
            population: <span>{cityPopulationData}</span>
          </div>
        </div>
      </div>
      <div
        className={classes.citiesAllInfoText}
        dangerouslySetInnerHTML={{ __html: citySummaryData }}
      />
    </>
  );
};

export default CitiesBasicInfo;
