import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Autorenew } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    width:"auto"
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const {image,title,status}=props;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img
          className={classes.media}
          src={image}
          alt=""
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {status}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}

