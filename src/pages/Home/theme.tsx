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

    '& a': {
      color: '#000',
    },
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
    fontFamily: 'Ubuntu',
    fontSize: 24,
    marginTop: 20,
    cursor: 'pointer',
    display: 'table',
    '&:hover': {
      fontWeight: 600,
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
}));
