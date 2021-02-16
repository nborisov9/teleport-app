import React from 'react';
import { useDispatch } from 'react-redux';
import { InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { SearchTextField } from '../SearchTextField';
import { useHomeStyles } from '../../pages/Home/theme';
import { fetchCities } from '../../store/cities/actions';
import CitiesList from '../CitiesList';

interface SearchInputProps {
  placeHolder: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ placeHolder }) => {
  const [text, setText] = React.useState<string>('');
  const [isCitiesList, setIsCitiesList] = React.useState<boolean>(false);
  const inputRef = React.useRef<any>(null);

  const classes = useHomeStyles();
  const dispatch = useDispatch();

  const clickOutSide = (event: MouseEvent) => {
    const path = event.composedPath();
    if (inputRef.current && !path.includes(inputRef.current)) {
      setIsCitiesList(false);
    }
  };

  React.useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  React.useEffect(() => {
    document.body.addEventListener('click', clickOutSide);
    return () => document.body.removeEventListener('click', clickOutSide);
  }, []);

  const hadnleTextValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
    if (text.trim().length > 0) {
      setIsCitiesList(true);
    }
  };

  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setText('');
      setIsCitiesList(false);
    }
  };

  const setTextHandler = (name: string) => {
    setText(name);
    setIsCitiesList(false);
  };

  return (
    <div className={classes.inputSearchWrapper} ref={inputRef}>
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
      <CitiesList textInput={text} isCitiesList={isCitiesList} setTextHandler={setTextHandler} />
    </div>
  );
};
