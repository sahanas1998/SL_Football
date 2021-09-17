import React from 'react';
import { Paper, Typography, Grid, Container, Button } from '@material-ui/core';
import SL from '../../asset/flag/SL.png';
import Koria from '../../asset/flag/koria.png';

const MatchDetails = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Container maxWidth='md'>
        <Grid container direction='row'>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <h1>Sri Lanka</h1>
          </Grid>
          <Grid item sm={2} align='center'></Grid>
          <Grid item sm={4}>
            <h1>Koria DPR</h1>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item sm={4}>
            <img src={SL} alt='SL_Flag' height='100px' width='200px' />
          </Grid>
          <Grid item sm={2} align='center'>
            <h1>VS</h1>
          </Grid>
          <Grid item sm={4}>
            <img src={Koria} alt='Koria_Flag' height='100px' width='200px' />
          </Grid>
        </Grid>
      </Container>

      {/* MatchDetailsbody */}
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
              <h2>Date</h2>
            </Grid>
            <Grid item sm={1}>
              <h2>:</h2>
            </Grid>
            <Grid item sm={5}>
              <h2>03/06/2021</h2>
            </Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}>
              <h2>Match status</h2>
            </Grid>
            <Grid item sm={1}>
              <h2>:</h2>
            </Grid>
            <Grid item sm={5}>
              <h2>Not happen</h2>
            </Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}>
              <h2>Match_Type</h2>
            </Grid>
            <Grid item sm={1}>
              <h2>:</h2>
            </Grid>
            <Grid item sm={5}>
              <h2>WQA</h2>
            </Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}>
              <h2>Scroe</h2>
            </Grid>
            <Grid item sm={1}>
              <h2>:</h2>
            </Grid>
            <Grid item sm={5}>
              <h2>0-0</h2>
            </Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}>
              <h2>Match-link</h2>
            </Grid>
            <Grid item sm={1}>
              <h2> :</h2>
            </Grid>
            <Grid item sm={5}>
              <h2>-</h2>
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
          <Button variant='contained' color='primary' onClose={handleClose}>
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

export default MatchDetails;
