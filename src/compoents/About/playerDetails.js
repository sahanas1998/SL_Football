import React from 'react';
import { Paper, Typography, Grid, Container, Button } from '@material-ui/core';
import Img1 from '../../asset/fb/1.png';

const PlayerDetails = () => {
  return (
    <div>
      <Container maxWidth='md'>
        <Grid container direction='row'>
          <Grid item sm={2}></Grid>
          <Grid item sm={10}>
            <img src={Img1} alt='P1' height='200px' align='center' />
          </Grid>
        </Grid>
      </Container>

      {/* Detailsbody */}
      <div elevation={2}>
        <Container maxWidth='sm'>
          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
          >
            <Grid item sm={3}></Grid>
            <Grid item sm={3}>
              <h2>Name</h2>
            </Grid>
            <Grid item sm={1}>
              <h2>:</h2>
            </Grid>
            <Grid item sm={5}>
              <h2>Sujan Perera</h2>
            </Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}>
              <h2>Number</h2>
            </Grid>
            <Grid item sm={1}>
              <h2>:</h2>
            </Grid>
            <Grid item sm={5}>
              <h2>1</h2>
            </Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}>
              <h2>Posision</h2>
            </Grid>
            <Grid item sm={1}>
              <h2>:</h2>
            </Grid>
            <Grid item sm={5}>
              <h2>Goalkeeper</h2>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* <Button variant='contained' color='primary'>
        Closed
      </Button> */}
      <div>
        <Grid align='end'>
          <Button variant='contained' color='primary'>
            Edit
          </Button>
          &nbsp; &nbsp;&nbsp;
          <Button variant='contained' color='primary'>
            Closed
          </Button>
          &nbsp; &nbsp;&nbsp;
        </Grid>
        <Grid>
          <hr />
        </Grid>
      </div>
    </div>
  );
};

export default PlayerDetails;
