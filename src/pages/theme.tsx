import { makeStyles } from '@material-ui/core/';

export const useHomeStyles = makeStyles((theme) => ({
  headerWrapper: {
    background:
      'linear-gradient(90deg, rgba(204,204,204,1) 0%, rgba(238,238,238,1) 40%, rgba(204,204,204,1) 100%)',
    display: 'flex',
    padding: '10px 0',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerSearch: {
    flex: '1',
    fontFamily: 'Ubuntu',
  },
  headerLogo: {
    flex: '1',
    textAlign: 'center',
    cursor: 'pointer',
    fontFamily: 'Mrs Sheppards',
    fontSize: 38,
  },
  inputSearch: {
    width: 170,
    fontSize: 15,
  },
  headerAllCitiesLink: {
    textAlign: 'right',
    flex: '1',
    fontFamily: 'Ubuntu',
    fontSize: 26,
    cursor: 'pointer',
    '&:active': {
      transform: 'translateY(2px)',
    },
  },
}));
