import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SadSmileIcon from '@material-ui/icons/SentimentDissatisfied';

import { useHomeStyles } from '../../../pages/Countries/theme';
import { ICityName } from '../../../store/cities/types';
import { useKeyPress } from '../../../utils/customHooks';
import { ENTER } from '../../../helpers/constants';
import { checkClassActive } from '../../../utils/citiesList';

interface ICitiesListProps {
  referenceUlNode: React.RefObject<HTMLUListElement>;
  referenceLiNode: React.RefObject<HTMLLIElement>;
  citiesList: boolean;
  listNotFound: boolean;
  cursor: number;
  filterList: ICityName[];
  setTextHandler: (name: string) => void;
}

const CitiesList: React.FC<ICitiesListProps> = ({
  referenceUlNode,
  referenceLiNode,
  listNotFound,
  citiesList,
  filterList,
  cursor,
  setTextHandler,
}) => {
  const classes = useHomeStyles();

  const history = useHistory();
  const dispatch = useDispatch();

  const isKeyPress: boolean = useKeyPress(ENTER);

  React.useEffect(() => {
    if (citiesList && isKeyPress) {
      !listNotFound && history.push(`/myCities/${filterList[cursor].name}`);
    }
  }, [citiesList, isKeyPress, filterList, cursor, history, listNotFound, dispatch]);

  if (!citiesList && !listNotFound) {
    return null;
  }

  if (listNotFound) {
    return (
      <div className={classes.citiesListNotFound}>
        <span>No matches</span> <SadSmileIcon />
      </div>
    );
  }

  return (
    <ul className={classes.citiesListWrapper} ref={referenceUlNode}>
      {filterList.map(({ name }, index) => (
        <li
          key={name}
          ref={referenceLiNode}
          className={checkClassActive({ index, cursor, classes })}
          onClick={() => setTextHandler(name)}>
          {name}
        </li>
      ))}
    </ul>
  );
};

export default CitiesList;
