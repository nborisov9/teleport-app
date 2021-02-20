import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputAdornment } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

import { SearchTextField } from '../SearchTextField';
import { useHomeStyles } from '../../pages/Home/theme';
import { fetchCities } from '../../store/cities/actions';
import CitiesList from '../CitiesList';
import { selectCityNames } from '../../store/cities/selectors';
import { ARROW_DOWN, ARROW_UP, DECREMENT, ENTER, INCREMENT } from '../../helpers/consts';
import { scrollElement } from '../../utils/scroll';
import { LoadingBlock } from '../LoadingBlock';

interface SearchInputProps {
  placeHolder: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ placeHolder }) => {
  const [text, setText] = React.useState<string>('');
  const [inputLoader, setInputLoader] = React.useState<boolean>(false);
  const [citiesList, setCitiesList] = React.useState<boolean>(false);
  const [listNotFound, setListNotFound] = React.useState<boolean>(false);
  const [currentCursor, setCurrentCursor] = React.useState<number>(0);

  const inputRef = React.useRef<HTMLDivElement>(null);
  const citiesListRef = React.useRef<HTMLUListElement>(null);

  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const cities = useSelector(selectCityNames);

  const filterCitiesList = cities.filter(({ name }) =>
    name.toLowerCase().includes(text.toLowerCase()),
  );

  const clickOutSide = (event: MouseEvent) => {
    const path = event.composedPath();
    if (inputRef.current && !path.includes(inputRef.current)) {
      setCitiesList(false);
    }
  };

  React.useEffect(() => {
    if (cities.length) {
      !filterCitiesList.length ? setListNotFound(true) : setListNotFound(false);
    }
  }, [filterCitiesList, cities]);

  React.useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  React.useEffect(() => {
    if (text) {
      setInputLoader(true);
    }
  }, [text]);

  React.useEffect(() => {
    document.body.addEventListener('click', clickOutSide);
    return () => document.body.removeEventListener('click', clickOutSide);
  }, []);

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ARROW_DOWN && currentCursor < filterCitiesList.length - 1) {
      setCurrentCursor((prevState) => prevState + 1);
      scrollElement(citiesListRef, INCREMENT);
    }
    if (e.key === ARROW_UP && currentCursor > 0) {
      setCurrentCursor((prevState) => prevState - 1);
      scrollElement(citiesListRef, DECREMENT);
    }
  };

  const keyUpHandler = () => {
    setTimeout(() => setInputLoader(false), 1000);
  };

  const hadnleTextValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
    if (text.trim().length > 0) {
      setCitiesList(true);
    }
  };

  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ENTER) {
      filterCitiesList.length && setText(filterCitiesList[currentCursor].name);
      setCitiesList(false);
      setCurrentCursor(0);
      setText('');
    }
  };

  const setTextHandler = (name: string) => {
    setCitiesList(false);
    setCurrentCursor(0);
    !listNotFound && history.push(`/citiesAll/${name}`);
    setText('');
  };

  return (
    <div className={classes.inputSearchWrapper} ref={inputRef}>
      <SearchTextField
        className={classes.inputSearch}
        variant="outlined"
        onChange={hadnleTextValue}
        onKeyPress={keyPressHandler}
        onKeyUp={keyUpHandler}
        onKeyDown={keyDownHandler}
        placeholder={placeHolder}
        size="small"
        value={text}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {inputLoader ? <LoadingBlock size={20} width={33} /> : <SearchIcon />}
            </InputAdornment>
          ),
        }}
        fullWidth
      />
      <CitiesList
        referenceNode={citiesListRef}
        listNotFound={listNotFound}
        filterList={filterCitiesList}
        cursor={currentCursor}
        citiesList={citiesList}
        setTextHandler={setTextHandler}
      />
    </div>
  );
};
