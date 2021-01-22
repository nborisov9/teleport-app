import { makeStyles } from '@material-ui/core/';

export const useCitiesAllStyles = makeStyles((theme) => ({
  // citiesAllContainer: {
  //   margin: '50px auto 0px auto',
  //   fontFamily: 'Ubuntu',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   height: 500,
  //   flexWrap: 'wrap',
  //   alignItems: 'center',
  //   padding: 0,
  // },
  // citiyName: {
  //   cursor: 'pointer',
  //   paddingBottom: 15,
  //   '&:hover': {
  //     fontWeight: 800,
  //   },
  //   '&:active': {
  //     transform: 'translateY(2px)',
  //   },
  // },
  // citiesAllButtonWrapper: {
  //   margin: '20px 0 0 0',
  //   display: 'flex',
  //   justifyContent: 'center',
  // },
  // citiesAllButtonBack: {
  //   borderRadius: 20,
  //   padding: '5px 30px',
  //   marginBottom: 20,
  //   background: theme.palette.background.default,
  // },
  citiesAllWrapper: {},

  citiesAllSelectWrapper: {
    position: 'relative',
    width: '100%',
  },

  citiesAllSelectBlock: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectFormControl: {
    width: 340,
    background: '#fff',
    padding: 0,
    textAlign: 'center',
    '& svg': {
      transform: 'translate(8px, -13px)',
      fontSize: 55,
      color: '#000',
    },
  },
  select: {
    background: '#fff',
    color: '#000',
    fontSize: 40,
    textTransform: 'uppercase',
    fontFamily: 'ubuntu',
  },

  citiesAllImage: {
    '& img': {
      height: '300px',
      width: '100%',
    },
  },
  citiesAllYandexMap: {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
  },
}));
