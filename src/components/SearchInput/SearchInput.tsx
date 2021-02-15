import React from 'react';
import { InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { SearchTextField } from '../SearchTextField';
import { useHomeStyles } from '../../pages/Home/theme';

interface SearchInputProps {
  placeHolder: string;
  classes: ReturnType<typeof useHomeStyles>;
}

export const SearchInput: React.FC<SearchInputProps> = ({ placeHolder, classes }) => {
  const [text, setText] = React.useState<string>('');

  const hadnleTextValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.currentTarget.value);
  };

  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setText('');
    }
  };

  return (
    <SearchTextField
      className={classes.inputSearch}
      variant="outlined"
      onChange={hadnleTextValue}
      onKeyPress={keyPressHandler}
      placeholder={placeHolder}
      size="small"
      value={text}
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
