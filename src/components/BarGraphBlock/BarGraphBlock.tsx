import React from 'react';

import { useCitiesAllStyles } from '../../pages/CitiesAll/theme';
import { IScoreData } from '../../store/cities/types';

interface IBarGraphBlock {
  cityScoreData: Array<IScoreData>;
}

export const BarGraphBlock: React.FC<IBarGraphBlock> = ({ cityScoreData }) => {
  const classes = useCitiesAllStyles();

  const calcValueTitle = (value: number): number => +value.toFixed(1);
  const calcValuePercent = (value: number): string => calcValueTitle(value) * 10 + '%';

  return (
    <div className={classes.citiesAllBarGraph}>
      <div className={classes.barGraphTitle}>Score</div>
      {cityScoreData.map(({ name, score_out_of_10, color }: IScoreData) => (
        <div key={name}>
          <div className={classes.barGraphInfoWrapper}>
            <div className={classes.barGraphRowTitle}>{name}</div>
            <div className={classes.barGraphRowTitle}>{calcValueTitle(score_out_of_10)} / 10</div>
          </div>
          <div className={classes.barGraphRow}>
            <div
              style={{
                width: calcValuePercent(score_out_of_10),
                background: color,
              }}
              className={classes.barGraphRowCurrentScore}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
