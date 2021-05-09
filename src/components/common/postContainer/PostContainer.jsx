import {Navbar, Footer} from '../../../components/common';

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ReactDOM from 'react-dom';
import theme from '../../../Theme';
import { ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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

function PostContainer() {
  const classes = useStyles();
  
  return(
    <Router>
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
                    image="https://raw.githubusercontent.com/ahilesparo/web/master/src/img/posts/Post2/SAVE_20210508_111547.jpg"
                    title="¿Y afuera nos están escuchando?"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    ¿Y afuera nos están escuchando?
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    ¿Y afuera nos están escuchando?
                    <br />
                    Sí, y en varios países y ciudades extranjeras se ha dado apoyo a...
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link to="/post2">publicación completa</Link>
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
                  image="https://raw.githubusercontent.com/ahilesparo/web/master/src/img/posts/Post1/photo_2021-05-08_17-05-03.jpg"
                  title="¿Cómo actuar ante situaciones de censura en Instagram?"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Instagram nos está censurando
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Porque sabemos que hay posts e historias que se están censurando...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link to="/post1">publicación completa</Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
        <Switch>
          <Route path="/post1">
            <Post1 />
          </Route>

          <Route path="/post2">
            <Post2 />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

function Post1() {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <div styles="margin:0">
      <Navbar />
      <h1>Post 2</h1>

      <br/>
      <br/>
      <Footer />
    </div>
    </ThemeProvider>
    ,
    document.getElementById("root")
  );
};

function Post2() {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <div styles="margin:0">
      <Navbar />
      <h1>Post 2</h1>

      <br/>
      <br/>
      <Footer />
    </div>
    </ThemeProvider>
    ,
    document.getElementById("root")
  );
};

export default PostContainer;
