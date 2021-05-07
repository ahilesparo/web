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
  );
}

export default PostContainer;
