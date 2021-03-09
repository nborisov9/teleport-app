import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField/TextField';

export const SearchTextField = withStyles(() => ({
  root: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 30,
      backgroundColor: '#fff',
      '&.Mui-focused': {
        backgroundColor: '#fff',
        '& fieldset': { borderWidth: 1, borderColor: 'rgb(19, 163, 247)' },
        '& svg path': {
          fill: '#000',
        },
      },
      '&:hover': {
        '& fieldset': { borderColor: 'rgb(19, 163, 247)' },
      },
      '&:active': {
        borderColor: 'rgb(19, 163, 247)',
      },
      '& fieldset': {
        borderColor: 'rgb(226, 226, 226)',
        borderWidth: 1,
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '5px',
    },
  },
}))(TextField);
