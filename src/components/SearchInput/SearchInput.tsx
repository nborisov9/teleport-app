import { InputAdornment } from '@material-ui/core';
import React from 'react';

import { SearchTextField } from '../SearchTextField';

import SearchIcon from '@material-ui/icons/Search';
import { useHomeStyles } from '../../pages/Home/theme';

interface SearchInputProps {
  placeHolder: string;
  classes: ReturnType<typeof useHomeStyles>;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeHolder,
  classes,
}: SearchInputProps): React.ReactElement => {
  const [text, setText] = React.useState<string>('');

  console.log(text);

  const hadnleTextValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.currentTarget.value);
  };

  return (
    <SearchTextField
      className={classes.inputSearch}
      variant="outlined"
      onChange={hadnleTextValue}
      placeholder={placeHolder}
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};
