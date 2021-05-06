import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import logo from './img/logo.png'

const useStyles = makeStyles((theme) => ({
  logo : {
    maxWidth : 150,
    marginRight : '10px'
  },
  appBar: {
    backgroundColor: "#000"
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
  },
  postContainer : {
    paddingTop : theme.spacing(3),
  },
  postTittle : {
    fontWeight : 800,
    paddingBottom : theme.spacing(3),
  },
  card : {
    maxWidtih : "100%",
  },
  media : {
    height : 240,
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <img src={logo} alt="Ahí les paro" className={classes.logo} />
        </Toolbar>
      </AppBar>

      <Box className={classes.hero}>
        <Box>Ahí les paro</Box>
      </Box>

      <Container maxWidth="lg" className={classes.postContainer}>
        <Typography variant="h4" className={classes.postTitle}>
          Publicaciones
        </Typography>

        <Grid container spacing={3}>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    alt=""
                    image="https://raw.githubusercontent.com/ahilesparo/web/master/src/img/posts/Post2/182310398_163227658967015_209350030955755181_n.jpg"
                    title="Atención"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Atención
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Somos estudiantes de último semestre de Derecho y abogados grados que estamos dispuestos...
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    publicación completa
                  </Button>
                </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  alt="Instagram nos está censurando"
                  image="https://raw.githubusercontent.com/ahilesparo/web/master/src/img/posts/Post1/181966496_1694397814097034_3527850825263021644_n.jpg"
                  title="Instagram nos está censurando"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Instagram nos está censurando
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Porque sabemos que hay historias que se están censurando...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                publicación completa
                </Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
      </Container>

    </div>
  )
}

export default App
