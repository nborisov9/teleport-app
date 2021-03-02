import React from 'react';
import IconPopulation from '@material-ui/icons/People';
import IconPublic from '@material-ui/icons/Public';
import IconTitle from '@material-ui/icons/Title';

import { useMyCitiesStyles } from '../../../pages/MyCities/theme';
import { IBasicData } from '../../../store/cities/types';

interface CitiesBasicInfoProps {
  cityBasicData: IBasicData;
  cityPopulationData: number;
  citySummaryData: string;
}

const CitiesBasicInfo: React.FC<CitiesBasicInfoProps> = ({
  cityBasicData,
  cityPopulationData,
  citySummaryData,
}) => {
  const classes = useMyCitiesStyles();

  return (
    <>
      <div className={classes.myCitiesInfoWrapper}>
        <div className={classes.myCitiesInfoRow}>
          <div className={classes.myCitiesInfoTitle}>
            <IconTitle />
            name: <span>{cityBasicData.full_name}</span>
          </div>
          <div className={classes.myCitiesInfoTitle}>
            <IconPublic />
            continent: <span>{cityBasicData.continent}</span>
          </div>
          <div className={classes.myCitiesInfoTitle}>
            <IconPopulation />
            population: <span>{cityPopulationData}</span>
          </div>
        </div>
      </div>
      <div
        className={classes.myCitiesInfoText}
        dangerouslySetInnerHTML={{ __html: citySummaryData }}
      />
    </>
  );
};

export default CitiesBasicInfo;
