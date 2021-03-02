import React from 'react';

import { useMyCitiesStyles } from '../../../pages/MyCities/theme';

interface SelectBlockWrapperProps {
  imageURL: string;
  children: React.ReactNode;
}

const SelectBlockWrapper: React.FC<SelectBlockWrapperProps> = ({ imageURL, children }) => {
  const classes = useMyCitiesStyles();

  return (
    <div className={classes.myCitiesSelectWrapper}>
      <div className={classes.myCitiesImage}>
        <img src={imageURL} alt="" />
        <div className={classes.myCitiesSelectBlock}>{children}</div>
      </div>
    </div>
  );
};

export default SelectBlockWrapper;
