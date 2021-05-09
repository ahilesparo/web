import {Navbar, Footer} from '../../../components/common';
import './PostContainer.css'

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
import Carousel from 'react-bootstrap/Carousel'

const useStyles = makeStyles((theme) => ({
  postContainer : {
    paddingTop : theme.spacing(3),
  },
  postTittle : {
    fontWeight : 800,
    paddingBottom : theme.spacing(3),
    color: "white",
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
                    <Link to="/afuera-nos-estan-escuchando">publicación completa</Link>
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
                  <Link to="/instagram-nos-censura">publicación completa</Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
        <Switch>
          <Route path="/instagram-nos-censura">
            <Post1 />
          </Route>

          <Route path="/afuera-nos-estan-escuchando">
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
      <div className="Post">
        <div className="content-wrap">
          <Navbar />
          
          <div className="show-images">
            <h1 className="post-title">Instagram nos está censurando</h1>
            <Carousel interval={100000000} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />} nextLabel="Sig" prevLabel="Ant">
              <Carousel.Item>
                <img
                className="d-block w-100"
                alt=""
                src="https://raw.githubusercontent.com/ahilesparo/web/master/src/img/posts/Post1/photo_2021-05-08_17-05-03.jpg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                className="d-block w-100"
                alt=""
                src="https://raw.githubusercontent.com/ahilesparo/web/master/src/img/posts/Post1/photo_2021-05-08_17-05-08.jpg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                className="d-block w-100"
                alt=""
                src="https://raw.githubusercontent.com/ahilesparo/web/master/src/img/posts/Post1/photo_2021-05-08_17-05-06.jpg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                className="d-block w-100"
                alt=""
                src="https://raw.githubusercontent.com/ahilesparo/web/master/src/img/posts/Post1/photo_2021-05-08_17-05-02.jpg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                className="d-block w-100"
                alt=""
                src="https://raw.githubusercontent.com/ahilesparo/web/master/src/img/posts/Post1/photo_2021-05-08_17-05-00.jpg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                className="d-block w-100"
                alt=""
                src="https://raw.githubusercontent.com/ahilesparo/web/master/src/img/posts/Post1/photo_2021-05-08_17-04-57.jpg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                className="d-block w-100"
                alt=""
                src="https://raw.githubusercontent.com/ahilesparo/web/master/src/img/posts/Post1/photo_2021-05-08_17-05-12.jpg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                className="d-block w-100"
                alt=""
                src="https://raw.githubusercontent.com/ahilesparo/web/master/src/img/posts/Post1/photo_2021-05-08_17-05-09.jpg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                className="d-block w-100"
                alt=""
                src="https://raw.githubusercontent.com/ahilesparo/web/master/src/img/posts/Post1/photo_2021-05-08_17-05-11.jpg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                className="d-block w-100"
                alt=""
                src="https://raw.githubusercontent.com/ahilesparo/web/master/src/img/posts/Post1/photo_2021-05-08_17-05-05.jpg"
                />
              </Carousel.Item>
            </Carousel>
          </div>

          <p className="post-text">
            Porque sabemos que hay post e historias que se están censurando, les compartimos estas recomendaciones para que puedan seguir apoyando en redes sociales, la situación Nacional.<br/>
            Cuéntenos si les han servido y si tienen más tips para recomendar a nuestros compañeros.</p>

          <br/>
          <br/>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
    ,
    document.getElementById("root")
  );
};

function Post2() {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <div className="Post">
        <div className="content-wrap">
          <Navbar />
          
          <div className="show-images">
            <h1 className="post-title">¿Y afuera nos están escuchando?</h1>
            <Carousel interval={100000000} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />} nextLabel="Sig" prevLabel="Ant">
              <Carousel.Item>
                <img
                className="d-block w-100"
                alt=""
                src="https://raw.githubusercontent.com/ahilesparo/web/master/src/img/posts/Post2/SAVE_20210508_111547.jpg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                className="d-block w-100"
                alt=""
                src="https://raw.githubusercontent.com/ahilesparo/web/master/src/img/posts/Post2/SAVE_20210508_111554.jpg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                className="d-block w-100"
                alt=""
                src="https://raw.githubusercontent.com/ahilesparo/web/master/src/img/posts/Post2/SAVE_20210508_111600.jpg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                className="d-block w-100"
                alt=""
                src="https://raw.githubusercontent.com/ahilesparo/web/master/src/img/posts/Post2/SAVE_20210508_111606.jpg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                className="d-block w-100"
                alt=""
                src="https://raw.githubusercontent.com/ahilesparo/web/master/src/img/posts/Post2/SAVE_20210508_111612.jpg"
                />
              </Carousel.Item>
            </Carousel>
          </div>

          <p className="post-text">
            Sí, y en varios países y ciudades extranjeras se ha dado apoyo a todas las personas que han sufrido de tratos desmedidos de la fuerza pública y detenciones ilegales . La situación en Colombia es muy delicada y se hace todo lo posible por mostrar afuera lo que aqueja a nuestro pueblo.<br />

            ¿Cuéntanos, qué otros apoyos internacionales has visto?
          </p>

          <br/>
          <br/>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
    ,
    document.getElementById("root")
  );
};

export default PostContainer;
