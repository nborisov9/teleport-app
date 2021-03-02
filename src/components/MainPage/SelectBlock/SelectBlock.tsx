import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { FormControl, MenuItem, Select } from '@material-ui/core';

import { useMyCitiesStyles } from '../../../pages/MyCities/theme';
import { ICityName, ICityNames } from '../../../store/cities/types';

interface SelectBlockProps {
  cityNames: ICityNames | any;
}

interface IParams {
  city: string;
}

const SelectBlock: React.FC<SelectBlockProps> = ({ cityNames }) => {
  const classes = useMyCitiesStyles();

  const history = useHistory();
  const dispatch = useDispatch();
  const params: IParams = useParams();

  const { city } = params;

  const [selectView, setSelectView] = React.useState<boolean>(false);
  const [cities, setCities] = React.useState<string>(city);

  React.useEffect(() => {
    history.push(`/mycities/${cities}`);
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
          {cityNames.map(({ name }: ICityName) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default React.memo(SelectBlock, () => true);
