import { useHomeStyles } from '../pages/Home/theme';

interface ICheckClassActive {
  index: number;
  cursor: number;
  classes: ReturnType<typeof useHomeStyles>;
}

const checkClassActive = ({ index, cursor, classes }: ICheckClassActive) => {
  if (cursor === index) {
    return `${classes.citiesLinkActive} ${classes.citiesLink}`;
  }
  return classes.citiesLink;
};

export { checkClassActive };
