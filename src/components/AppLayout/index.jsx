import React from "react";
import PropTypes from "prop-types";
import {Grid, AppBar, Toolbar, IconButton, Typography, CssBaseline, Button} from "@material-ui/core";
import {BubbleChart, Menu} from "@material-ui/icons";
import {useStyles} from "./styles";
import {ThemeProvider} from "@material-ui/core";
import SideMenu from "./components/SideMenu";
import {theme} from "../../theme";
import Logo from "../Logo";
import {useHistory} from "react-router";


const AppLayout = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setMenuOpen(open);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline/>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <Button color="inherit" onClick={() => history.push('/')}>
              <Logo className={classes.logo}/>
              <Typography variant="h6" color="inherit">
                Restify
              </Typography>
            </Button>

            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <Menu variant="dense"/>
            </IconButton>
          </Toolbar>
        </AppBar>
        {props.children}

        <SideMenu open={isMenuOpen} onClose={toggleDrawer(false)}/>
      </div>
    </ThemeProvider>
  );
}

AppLayout.propTypes = {
  Logo: PropTypes.elementType,
}

export default AppLayout;
