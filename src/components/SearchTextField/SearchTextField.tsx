import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField/TextField';

export const SearchTextField = withStyles(() => ({
  root: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 30,
      backgroundColor: '#fff',
      '&.Mui-focused': {
        backgroundColor: '#fff',
        '& fieldset': { borderWidth: 1, borderColor: '#000' },
        '& svg path': {
          fill: '#000',
        },
      },
      '&:hover': {
        '& fieldset': { borderColor: 'transparent' },
      },
      '&:active': {
        borderColor: 'transparent',
      },
      '& fieldset': {
        borderColor: 'transparent',
        borderWidth: 1,
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '5px',
    },
  },
}))(TextField);
