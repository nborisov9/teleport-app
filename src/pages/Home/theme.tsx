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

    '& a': {
      color: '#000',
    },
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
    width: 200,
    overflowY: 'auto',
    background: '#fff',
    border: '1px solid #ccc',
    boxShadow: '5px 5px 8px 0px rgba(34, 60, 80, 0.2)',
    '& li': {
      '&:last-child': {
        margin: '0',
        borderBottom: 'none',
      },
      borderBottom: '1px solid #ccc',
      padding: 7,
    },
  },
  citiesListNotFound: {
    position: 'absolute',
    top: 45,
    left: 0,
    color: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fff',
    border: '2px solid #fa655780',
    boxShadow: '5px 5px 8px 0px rgba(34, 60, 80, 0.2)',
    borderRadius: 5,
    width: 200,
    '& span': {
      margin: '0 10px 0 0',
    },
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

    '& a': {
      color: '#000',
    },
  },
  worldMapTitle: {
    marginTop: 40,
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Ubuntu',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    color: 'rgba(29, 29, 29, 0.8)',
  },
  worldMapWrapper: {
    marginTop: 25,
    display: 'flex',
    justifyContent: 'center',
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
    borderRadius: 20,
    padding: '5px 30px',
    marginBottom: 30,
    background: theme.palette.background.default,
  },
  countriesAllTitle: {
    textTransform: 'uppercase',
    fontWeight: 600,
    marginBottom: 15,
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
    marginTop: 170,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingBlockCircle: {
    color: 'rgb(0, 103, 238)',
  },
}));
