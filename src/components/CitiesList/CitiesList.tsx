import React from 'react';
import { useSelector } from 'react-redux';
import SadSmileIcon from '@material-ui/icons/SentimentDissatisfied';

import { useHomeStyles } from '../../pages/Home/theme';
import { selectCityNames } from '../../store/cities/selectors';

interface ICitiesListProps {
  isCitiesList: boolean;
  setTextHandler: (name: string) => void;
  textInput: string;
}

const CitiesList: React.FC<ICitiesListProps> = ({ isCitiesList, setTextHandler, textInput }) => {
  const classes = useHomeStyles();

  const cities = useSelector(selectCityNames);

  const filterCitiesList = cities.filter(({ name }) =>
    name.toLowerCase().includes(textInput.toLowerCase()),
  );

  if (!isCitiesList) {
    return null;
  }

  if (!filterCitiesList.length) {
    return (
      <div className={classes.citiesListNotFound}>
        <span>No matches</span> <SadSmileIcon />
      </div>
    );
  }

  return (
    <ul className={classes.citiesListWrapper}>
      {filterCitiesList.map(({ name }) => (
        <li key={name} onClick={() => setTextHandler(name)}>
          {name}
        </li>
      ))}
    </ul>
  );
};

export default CitiesList;
