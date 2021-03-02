import React from 'react';

import { useHomeStyles } from '../../../pages/Countries/theme';

const Footer: React.FC = () => {
  const classes = useHomeStyles();

  return (
    <div className={classes.footerWrapper}>
      <div className={classes.footerLink}>© teleport</div>
    </div>
  );
};

export default Footer;
