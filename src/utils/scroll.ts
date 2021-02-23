import { DECREMENT, INCREMENT } from '../helpers/constants';

interface IScroll {
  citiesUlRef: React.RefObject<any>;
  citiesLiRef: React.RefObject<HTMLLIElement>;
}

const scrollElement = ({ citiesUlRef, citiesLiRef }: IScroll, operator: string) => {
  if (citiesUlRef.current && citiesLiRef.current) {
    if (operator === INCREMENT) {
      return (citiesUlRef.current.scrollTop += citiesLiRef.current.clientHeight);
    }

    if (operator === DECREMENT) {
      return (citiesUlRef.current.scrollTop -= citiesLiRef.current.clientHeight);
    }
  }
};

export { scrollElement };
