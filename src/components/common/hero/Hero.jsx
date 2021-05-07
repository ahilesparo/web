import './Hero.css';
import logoHero from '../../../img/logoHero.png';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  logoHero : {
    maxWidth : 400,
    filter : 'drop-shadow(5px 5px 5px #222)',
  },
  hero : {
    //backgroundImage :  `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://raw.githubusercontent.com/ahilesparo/web/master/src/img/heroLand.jpg')`,
    //backgroundImage :  `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://raw.githubusercontent.com/ahilesparo/web/master/src/img/heroLand1.jpg')`,
    backgroundImage :  `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://raw.githubusercontent.com/ahilesparo/web/master/src/img/heroe.png')`,
    height : "550px",
    backgroundPosition : "center",
    backgroundRepeat : "no-repeat",
    backgroundSize : "cover",
    position : "relative",
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    color : "#fff",
    fontSize : "4rem"
  }
}));

function Hero() {
  const classes = useStyles();

  return(
    <Box className={classes.hero}>
      <img src={logoHero} alt="Ahí les paro" className={classes.logoHero} />
    </Box>
  );
}

export default Hero;
