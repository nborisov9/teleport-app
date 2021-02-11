import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FormControl, MenuItem, Select } from '@material-ui/core';

import { useCitiesAllStyles } from '../../pages/CitiesAll/theme';
import {
  fetchCitiesCoordsData,
  fetchCitiesData,
  fetchCitiesImagesData,
  fetchCitiesSalariesData,
  fetchCitiesScoresData,
} from '../../store/cities/actions';
import { CityCurrentNameType, ICityNames } from '../../store/cities/types';

interface SelectBlockProps {
  classes: ReturnType<typeof useCitiesAllStyles>;
  cityNames: ICityNames | any;
}

export const SelectBlock: React.FC<SelectBlockProps> = React.memo(
  ({ classes, cityNames }: SelectBlockProps): React.ReactElement => {
    const history = useHistory();
    const dispatch = useDispatch();
    const pathname = history.location.pathname.slice(11);

    const [selectView, setSelectView] = React.useState<boolean>(false);
    const [cities, setCities] = React.useState<string>(pathname);

    React.useEffect(() => {
      history.push(`/citiesAll/${cities}`);
      dispatch(fetchCitiesData(cities));
      dispatch(fetchCitiesCoordsData(cities));
      dispatch(fetchCitiesImagesData(cities));
      dispatch(fetchCitiesScoresData(cities));
      dispatch(fetchCitiesSalariesData(cities));
    }, [dispatch, cities, history]);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setCities(event.target.value as string);
    };

    const handleCloseSelect = () => {
      setSelectView(false);
    };

    const handleOpenSelect = () => {
      setSelectView(true);
    };

    return (
      <div>
        <FormControl className={classes.selectFormControl}>
          <Select
            className={classes.select}
            open={selectView}
            onClose={handleCloseSelect}
            onOpen={handleOpenSelect}
            value={cities}
            onChange={handleChange}>
            <MenuItem value="" disabled>
              Cities
            </MenuItem>
            {cityNames.map(({ name }: CityCurrentNameType) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  },
);
