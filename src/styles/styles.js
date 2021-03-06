import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  rpaper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  card: {
    alignSelf: 'center',
    justifyItems: 'center'
  },
  text: {
    margin: '100px',
  }
}));

export default useStyles;