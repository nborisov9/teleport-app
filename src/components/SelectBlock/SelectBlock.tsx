import React from 'react';
import { useDispatch } from 'react-redux';
import { FormControl, MenuItem, Select } from '@material-ui/core';

import { useCitiesAllStyles } from '../../pages/CitiesAll/theme';
import { fetchCitiesData } from '../../store/cities/actions';

interface SelectBlockProps {
  classes: ReturnType<typeof useCitiesAllStyles>;
  cityNames: Array<string>;
}

export const SelectBlock: React.FC<SelectBlockProps> = ({
  classes,
  cityNames,
}: SelectBlockProps): React.ReactElement => {
  const [selectView, setSelectView] = React.useState<boolean>(false);
  const [cities, setCities] = React.useState<string>('Moscow');

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCitiesData(cities));
  }, [dispatch, cities]);

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
          {cityNames.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
