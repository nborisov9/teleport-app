import React from 'react';

import { useCitiesAllStyles } from '../../pages/CitiesAll/theme';
import { ScoreDataType } from '../../store/cities/types';

interface IBarGraphBlock {
  cityScoreData: Array<ScoreDataType>;
}

export const BarGraphBlock: React.FC<IBarGraphBlock> = ({
  cityScoreData,
}: IBarGraphBlock): React.ReactElement => {
  const classes = useCitiesAllStyles();

  return (
    <div className={classes.citiesAllBarGraph}>
      <div className={classes.barGraphTitle}>Score</div>
      {cityScoreData.map((score: ScoreDataType, index: number) => (
        <div key={index + score.name}>
          <div className={classes.barGraphInfoWrapper}>
            <div className={classes.barGraphRowTitle}>{score.name}</div>
            <div className={classes.barGraphRowTitle}>{+score.score_out_of_10.toFixed(1)} / 10</div>
          </div>
          <div className={classes.barGraphRow}>
            <div
              style={{
                width: +score.score_out_of_10.toFixed(1) * 10 + '%',
                background: score.color,
              }}
              className={classes.barGraphRowCurrentScore}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
