import React from 'react';

import { useCitiesAllStyles } from '../../pages/CitiesAll/theme';

interface SelectBlockWrapperProps {
  imageURL: string;
  children: React.ReactNode;
}

const SelectBlockWrapper: React.FC<SelectBlockWrapperProps> = ({ imageURL, children }) => {
  const classes = useCitiesAllStyles();

  return (
    <div className={classes.citiesAllSelectWrapper}>
      <div className={classes.citiesAllImage}>
        <img src={imageURL} alt="" />
        <div className={classes.citiesAllSelectBlock}>{children}</div>
      </div>
    </div>
  );
};

export default SelectBlockWrapper;
