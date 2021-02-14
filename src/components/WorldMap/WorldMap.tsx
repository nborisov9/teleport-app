import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useHomeStyles } from '../../pages/Home/theme';
import OutlineSVG from './continents/OutlineSVG';
import SouthAmericaSVG from './continents/SouthAmericaSVG';
import NorthAmericaSVG from './continents/NorthAmericaSVG';
import AsiaSVG from './continents/AsiaSVG';
import EuropeSVG from './continents/EuropeSVG';
import AfricaSVG from './continents/AfricaSVG';
import ContinentsWrapperSVG from './continents/ContinentsWrapperSVG';

export const WorldMap: React.FC = () => {
  const [continentTitle, setContintentTitle] = React.useState<string>('select contintent');

  const classes = useHomeStyles();

  const NARef = React.useRef<SVGGElement>(null);
  const SARef = React.useRef<SVGGElement>(null);
  const ASRef = React.useRef<SVGGElement>(null);
  const EURef = React.useRef<SVGGElement>(null);
  const AFRef = React.useRef<SVGGElement>(null);

  const handleMouseOver = (event: MouseEvent) => {
    const path = event.composedPath();
    if (NARef.current && path.includes(NARef.current)) {
      setContintentTitle('NORTH AMERICA');
      return;
    }
    if (SARef.current && path.includes(SARef.current)) {
      setContintentTitle('SORTH AMERICA');
      return;
    }
    if (ASRef.current && path.includes(ASRef.current)) {
      setContintentTitle('ASIA');
      return;
    }
    if (EURef.current && path.includes(EURef.current)) {
      setContintentTitle('EUROPE');
      return;
    }
    if (AFRef.current && path.includes(AFRef.current)) {
      setContintentTitle('AFRICA');
      return;
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('mouseover', handleMouseOver);
    return () => document.body.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <>
      <Typography variant="h5" className={classes.worldMapTitle}>
        {continentTitle}
      </Typography>
      <ContinentsWrapperSVG>
        <OutlineSVG />
        <Link to="/countries/SA">
          <SouthAmericaSVG referenceNode={SARef} />
        </Link>
        <Link to="/countries/NA">
          <NorthAmericaSVG referenceNode={NARef} />
        </Link>
        <Link to="/countries/AS">
          <AsiaSVG referenceNode={ASRef} />
        </Link>
        <Link to="/countries/EU">
          <EuropeSVG referenceNode={EURef} />
        </Link>
        <Link to="/countries/AF">
          <AfricaSVG referenceNode={AFRef} />
        </Link>
      </ContinentsWrapperSVG>
    </>
  );
};
