import { makeStyles } from '@material-ui/core/';
import { MAIN_BLUE } from '../../helpers/constants';

export const useHomeStyles = makeStyles((theme) => ({
  wrapper: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  headerWrapper: {},
  headerTopWrapper: {
    background: '#fff',
    display: 'flex',
    padding: '11px 0',
    boxShadow: '0px 1px 1px 0px rgba(34, 60, 80, 0.2)',
  },
  headerTopContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTopSearch: {
    flex: '1',
    fontFamily: 'Ubuntu',
  },
  headerTopLogo: {
    flex: '1',
    textAlign: 'center',
    cursor: 'pointer',
    fontFamily: 'Mrs Sheppards',
    fontSize: 38,

    '& a': {
      color: '#000',
    },
  },
  headerBottomWrapper: {
    height: 28,
    display: 'flex',
    boxShadow: '0px 1px 1px 0px rgba(34, 60, 80, 0.2)',
  },
  headerBottomContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  inputSearchWrapper: {
    position: 'relative',
  },
  inputSearch: {
    width: 200,
    fontSize: 15,
  },
  citiesListWrapper: {
    position: 'absolute',
    zIndex: 999,
    top: 45,
    left: 0,
    cursor: 'pointer',
    maxHeight: 150,
    width: '100%',
    overflowY: 'auto',
    background: '#fff',
    border: '1px solid #ccc',
    boxShadow: '5px 5px 8px 0px rgba(34, 60, 80, 0.2)',
    '& li': {
      height: 36,
      '&:hover': {
        background: 'rgba(184, 184, 184, 0.2)',
      },
      '&:last-child': {
        margin: '0',
        borderBottom: 'none',
      },
      borderBottom: '1px solid #ccc',
      padding: 7,
    },
  },
  citiesLinkActive: {
    background: 'rgba(184, 184, 184, 0.5)',
  },
  citiesLink: {},
  citiesListNotFound: {
    position: 'absolute',
    zIndex: 999,
    top: 45,
    left: 0,
    color: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fff',
    border: '2px solid #fa655740',
    boxShadow: '5px 5px 8px 0px rgba(34, 60, 80, 0.2)',
    borderRadius: 5,
    width: 200,
    '& span': {
      margin: '0 10px 0 0',
    },
  },
  headerTopMyCitiesLink: {
    textAlign: 'right',
    flex: '1',
    fontFamily: 'Ubuntu',
    fontSize: 26,
    cursor: 'pointer',

    '&:active': {
      transform: 'translateY(2px)',
    },

    '& a': {
      color: '#000',
      '&:hover': {
        color: MAIN_BLUE,
      },
    },
  },
  worldWrapper: {
    position: 'relative',
    display: 'flex',
    flex: '1 0 auto',
    flexDirection: 'column',
  },

  worldMapTitle: {
    opacity: 0,
    margin: '65px 0 30px 0',
    fontFamily: 'Kanit',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    display: 'flex',
    justifyContent: 'center',
    transition: 'all .2s linear',
    fontSize: 40,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  visibleWorldMapTitle: {
    opacity: 1,
    margin: '65px 0 30px 0',
    fontFamily: 'Kanit',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    display: 'flex',
    justifyContent: 'center',
    transition: 'all .2s linear',
    fontSize: 40,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  worldMapWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1 0 auto',
  },
  northAmerica: {
    '&:hover': {
      '& polygon, path': {
        transition: 'fill .3s linear',
        fill: '#90caf9',
      },
      stroke: 'black',
      cursor: 'pointer',
    },
  },
  southAmerica: {
    '&:hover': {
      '& polygon, path': {
        transition: 'fill .3s linear',
        fill: '#ff7043',
      },
      stroke: 'black',
      cursor: 'pointer',
    },
  },
  asia: {
    '&:hover': {
      '& polygon, path': {
        transition: 'fill .3s linear',
        fill: '#a5d6a7',
      },
      stroke: 'black',
      cursor: 'pointer',
    },
  },
  europe: {
    '&:hover': {
      '& polygon, path': {
        transition: 'fill .3s linear',
        fill: '#f4ff81',
      },
      stroke: 'black',
      cursor: 'pointer',
    },
  },
  africa: {
    '&:hover': {
      '& polygon, path': {
        transition: 'fill .3s linear',
        fill: '#dd2c00',
      },
      stroke: 'black',
      cursor: 'pointer',
    },
  },
  countriesAllContainer: {
    padding: '30px 0 0 20px',
    flex: '1 0 auto',
    marginBottom: '60px',
  },
  countriesNames: {
    '& a': {
      color: '#000',
      fontFamily: 'Ubuntu',
      fontSize: 25,
      marginTop: 20,
      cursor: 'pointer',
      display: 'table',
      '&:hover': {
        fontWeight: 600,
      },
    },
  },
  buttonGoBack: {
    fontFamily: 'Kanit',
    borderRadius: 20,
    padding: '5px 30px',
    marginBottom: 25,
    background: theme.palette.background.default,
  },
  countriesAllTitle: {
    fontFamily: 'Kanit',
    textTransform: 'uppercase',
    fontWeight: 600,
    marginBottom: 15,
    color: MAIN_BLUE,
  },
  countriesAllSelectTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    marginTop: 70,
    '& svg': {
      marginRight: 15,
      animation: '$arrowOffset 1s ease-in-out infinite',
    },
  },

  '@keyframes arrowOffset': {
    '0%': {
      transform: 'translateX(0px)',
    },
    '50%': {
      transform: 'translateX(-10px)',
    },
    '100%': {
      transform: 'translateX(0px)',
    },
  },

  countriesInfoWrapper: {
    background: '#fff',
    marginTop: 12,
    border: '1px solid #ccc',
    borderRadius: 10,
    fontFamily: 'Ubuntu',
    textTransform: 'uppercase',
    '& div': {
      borderRight: 'none',
      borderLeft: 'none',
      borderBottom: 'none',
      '&:first-child': {
        borderTop: 'none',
      },
    },
  },
  countryInfoName: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: 5,
    '& span': {
      display: 'flex',
      alignItems: 'center',
      '& svg': {
        marginRight: 15,
      },
    },
  },
  countriesInfoTitle: {
    fontFamily: 'Ubuntu',
    textTransform: 'uppercase',
  },
  countriesInfoTitleBold: {
    marginTop: 30,
    textAlign: 'center',
    fontWeight: 600,
  },
  countriesInfoTitleMargin: {
    marginTop: 30,
  },
  countriesInfoIcon: {
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  countriesAllSalaryInfo: {
    marginTop: 12,
  },
  countriesAllJobTitle: {
    fontWeight: 600,
  },
  loadingBlockWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1 0 auto',
  },
  loadingBlockCircle: {
    color: MAIN_BLUE,
  },
  footerWrapper: {
    background: '#fff',
    boxShadow: '0px -3px 8px 0px rgba(34, 60, 80, 0.2)',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'ubuntu',
  },
  footerLink: {
    cursor: 'pointer',
    color: 'rgba(0, 0, 0, 1)',
    '&:hover': {
      color: MAIN_BLUE,
    },
  },
}));
