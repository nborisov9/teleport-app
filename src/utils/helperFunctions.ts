import { useHomeStyles } from '../pages/Home/theme';

const checkClassActive = (
  index: number,
  cursor: number,
  classes: ReturnType<typeof useHomeStyles>,
): string => {
  return cursor === index
    ? `${classes.citiesLinkActive} ${classes.citiesLink}`
    : classes.citiesLink;
};

export { checkClassActive };
