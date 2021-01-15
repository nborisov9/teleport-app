import { makeStyles } from '@material-ui/core/';

export const useCitiesAllStyles = makeStyles((theme) => ({
  citiesAllContainer: {
    margin: '50px auto 0px auto',
    fontFamily: 'Ubuntu',
    display: 'flex',
    flexDirection: 'column',
    height: 500,
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 0,
  },
  citiyName: {
    cursor: 'pointer',
    paddingBottom: 15,
    '&:hover': {
      fontWeight: 800,
    },
    '&:active': {
      transform: 'translateY(2px)',
    },
  },
  citiesAllLoader: {
    color: theme.palette.info.main,
    marginTop: 170,
  },
}));
