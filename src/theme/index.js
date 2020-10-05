import {makeStyles, createStyles, createMuiTheme} from '@material-ui/core/styles';
import {palette} from "./colours";
import {GabriellaRegular} from "./fonts";

export const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

export const theme = createMuiTheme({
  palette,
  typography: {
    fontFamily: 'Gabriella, Arial',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': GabriellaRegular,
      },
    },
  },
})
