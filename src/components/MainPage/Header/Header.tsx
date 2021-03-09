import React from 'react';

import { useHomeStyles } from '../../../pages/Countries/theme';
import HedaerBottom from '../HeaderBottom';
import HeaderTop from '../HeaderTop';

const Header: React.FC = (): React.ReactElement => {
  const classes = useHomeStyles();

  return (
    <div className={classes.headerWrapper}>
      <HeaderTop />
      <HedaerBottom />
    </div>
  );
};

export default Header;
