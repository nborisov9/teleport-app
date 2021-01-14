import { makeStyles } from '@material-ui/core/';

export const useHomeStyles = makeStyles((theme) => ({
  headerWrapper: {
    background: '#ccc',
    display: 'flex',
    height: 60,
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerSearch: {
    fontFamily: 'Ubuntu',
  },
  headerSocialIcons: {
    cursor: 'pointer',
    '&:active': {
      transform: 'translateY(2px)',
    },
  },
  headerLogo: {
    cursor: 'pointer',
    fontFamily: 'Mrs Sheppards',
    fontSize: 38,
  },
  headerSocial: {},
}));
