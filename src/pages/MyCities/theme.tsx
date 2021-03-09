import { makeStyles } from '@material-ui/core/';

export const useMyCitiesStyles = makeStyles(() => ({
  myCitiesWrapper: {
    paddingBottom: 50,
    marginTop: 20,
  },

  myCitiesSelectWrapper: {
    position: 'relative',
    width: '100%',
  },

  myCitiesSelectBlock: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  myCitiesLoader: {},

  citiesSalaryInfo: {
    marginTop: 80,
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

  myCitiesImage: {
    '& img': {
      height: '300px',
      width: '100%',
    },
  },
  myCitiesYandexMap: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
  },

  myCitiesInfoWrapper: {
    marginTop: 15,
    display: 'flex',
    justifyContent: 'center',
  },
  myCitiesInfoRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  myCitiesInfoTitle: {
    fontFamily: 'ubuntu',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    '& span': {
      marginLeft: 10,
      fontWeight: 800,
    },
    '& svg': {
      marginRight: 3,
      cursor: 'pointer',
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
  },
  myCitiesInfoSubTitle: {},
  myCitiesInfoText: {
    fontFamily: 'ubuntu',
    lineHeight: 1.3,
    marginTop: 45,
  },
  myCitiesBarGraph: {
    marginTop: 100,
  },
  barGraphTitle: {
    fontFamily: 'ubuntu',
    textTransform: 'uppercase',
    fontWeight: 600,
    textAlign: 'center',
    letterSpacing: 5,
    fontSize: 35,
  },
  barGraphRow: {
    position: 'relative',
    width: '100%',
    height: 50,
    border: '1px solid #ccc',
    borderRadius: '20px',
    marginTop: 7,
  },
  barGraphRowCurrentScore: {
    position: 'absolute',
    borderRadius: '20px',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: '100%',
  },
  barGraphInfoWrapper: {
    marginTop: 25,
    display: 'flex',
    justifyContent: 'space-between',
  },
  barGraphRowTitle: {
    fontFamily: 'ubuntu',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
}));
