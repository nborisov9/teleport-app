import { makeStyles } from '@material-ui/core/';

export const useHomeStyles = makeStyles((theme) => ({
  headerWrapper: {
    background:
      'linear-gradient(90deg, rgba(204,204,204,1) 0%, rgba(238,238,238,1) 40%, rgba(204,204,204,1) 100%)',
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
