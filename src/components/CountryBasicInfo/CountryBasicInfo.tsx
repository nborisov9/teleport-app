import { Typography } from '@material-ui/core';

import { useHomeStyles } from '../../pages/Home/theme';
import { ICountryBasicData } from '../../store/countries/types';
import { getCountryData } from '../../utils';

interface CountryBasicInfoProps {
  countriesBasicData: ICountryBasicData;
}

export const CountryBasicInfo: React.FC<CountryBasicInfoProps> = ({ countriesBasicData }) => {
  const classes = useHomeStyles();
  const { dataCountry } = getCountryData(countriesBasicData, classes);

  return (
    <>
      <Typography variant="h6" className={classes.countriesInfoTitle}>
        basic info
      </Typography>
      <div className={classes.countriesInfoWrapper}>
        {dataCountry.map(({ title, icon, dataInfo }) => (
          <div className={classes.countryInfoName} key={title}>
            <span>
              {icon}
              {title}:
            </span>
            {dataInfo}
          </div>
        ))}
      </div>
    </>
  );
};
