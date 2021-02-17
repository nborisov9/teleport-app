import React from 'react';
import SadSmileIcon from '@material-ui/icons/SentimentDissatisfied';

import { useHomeStyles } from '../../pages/Home/theme';
import { ICityCurrentName } from '../../store/cities/types';

interface ICitiesListProps {
  referenceNode: React.RefObject<HTMLUListElement>;
  isCitiesList: boolean;
  filterList: ICityCurrentName[];
  cursor: number;
  setTextHandler: (name: string) => void;
}

const CitiesList: React.FC<ICitiesListProps> = ({
  referenceNode,
  isCitiesList,
  filterList,
  cursor,
  setTextHandler,
}) => {
  const classes = useHomeStyles();

  const checkClassActive = (index: number) =>
    cursor === index ? `${classes.citiesLinkActive} ${classes.citiesLink}` : classes.citiesLink;

  if (!isCitiesList) {
    return null;
  }

  if (!filterList.length) {
    return (
      <div className={classes.citiesListNotFound}>
        <span>No matches</span> <SadSmileIcon />
      </div>
    );
  }

  return (
    <ul className={classes.citiesListWrapper} ref={referenceNode}>
      {filterList.map(({ name }, index) => (
        <li key={name} className={checkClassActive(index)} onClick={() => setTextHandler(name)}>
          {name}
        </li>
      ))}
    </ul>
  );
};

export default CitiesList;
