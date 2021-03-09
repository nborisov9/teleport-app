import { BLACK, DARK_YELLOW, LIGHT_BLUE, LIGHT_GREEN, ORGANE, RED } from '../helpers/constants';

const getColorStyle = (continent: string): React.CSSProperties => {
  if (continent === 'NA') {
    return { color: LIGHT_BLUE };
  }
  if (continent === 'SA') {
    return { color: ORGANE };
  }
  if (continent === 'AF') {
    return { color: RED };
  }
  if (continent === 'EU') {
    return { color: DARK_YELLOW };
  }
  if (continent === 'AS') {
    return { color: LIGHT_GREEN };
  }

  return { color: BLACK };
};

export { getColorStyle };
