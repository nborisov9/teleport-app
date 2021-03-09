import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useHomeStyles } from '../../../pages/Countries/theme';
import OutlineSVG from './continents/OutlineSVG';
import SouthAmericaSVG from './continents/SouthAmericaSVG';
import NorthAmericaSVG from './continents/NorthAmericaSVG';
import AsiaSVG from './continents/AsiaSVG';
import EuropeSVG from './continents/EuropeSVG';
import AfricaSVG from './continents/AfricaSVG';
import ContinentsWrapperSVG from './continents/ContinentsWrapperSVG';
import { DARK_YELLOW, LIGHT_BLUE, LIGHT_GREEN, ORGANE, RED } from '../../../helpers/constants';

interface IContitnentTitle {
  text: string;
  style: React.CSSProperties;
}

const continentState: IContitnentTitle = { text: '', style: { color: '' } };

const WorldMap: React.FC = () => {
  const [continentInfo, setContintentInfo] = React.useState<IContitnentTitle>(continentState);
  const [isVisibleTitle, isSetVisibleTitle] = React.useState<boolean>(false);

  const classes = useHomeStyles();

  const NARef = React.useRef<SVGGElement>(null);
  const SARef = React.useRef<SVGGElement>(null);
  const ASRef = React.useRef<SVGGElement>(null);
  const EURef = React.useRef<SVGGElement>(null);
  const AFRef = React.useRef<SVGGElement>(null);

  const handleMouseOver = (event: MouseEvent) => {
    const path = event.composedPath();
    if (NARef.current && path.includes(NARef.current)) {
      setContintentInfo({ text: 'NORTH AMERICA', style: { color: LIGHT_BLUE } });
      isSetVisibleTitle(true);
      return;
    }
    if (SARef.current && path.includes(SARef.current)) {
      setContintentInfo({ text: 'SORTH AMERICA', style: { color: ORGANE } });
      isSetVisibleTitle(true);
      return;
    }
    if (ASRef.current && path.includes(ASRef.current)) {
      setContintentInfo({ text: 'ASIA', style: { color: LIGHT_GREEN } });
      isSetVisibleTitle(true);
      return;
    }
    if (EURef.current && path.includes(EURef.current)) {
      setContintentInfo({ text: 'EUROPE', style: { color: DARK_YELLOW } });
      isSetVisibleTitle(true);
      return;
    }
    if (AFRef.current && path.includes(AFRef.current)) {
      setContintentInfo({ text: 'AFRICA', style: { color: RED } });
      isSetVisibleTitle(true);
      return;
    }

    isSetVisibleTitle(false);
  };

  React.useEffect(() => {
    document.body.addEventListener('mouseover', handleMouseOver);
    return () => document.body.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <div className={classes.worldWrapper}>
      <Typography
        variant="h5"
        className={isVisibleTitle ? classes.visibleWorldMapTitle : classes.worldMapTitle}
        style={continentInfo.style}>
        {continentInfo.text}
      </Typography>

      <div className={classes.worldMapWrapper}>
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
      </div>
    </div>
  );
};

export default WorldMap;
