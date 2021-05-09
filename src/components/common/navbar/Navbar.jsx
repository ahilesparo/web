import './Navbar.css';
import logo from '../../../img/logo.png';

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo : {
    maxWidth : 150,
    marginRight : '10px'
  },
  appBar: {
    backgroundColor: "#000"
  },
}));

function Navbar() {
  const classes = useStyles();

  return(
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <a href="http://ahilesparo.github.io/web">
          <img src={logo} alt="Ahí les paro" className={classes.logo} />
        </a>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
