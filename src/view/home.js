import React from 'react';
import { Grid, Container } from '@material-ui/core';
import Card2 from '../compoents/card_man';
import '../home.css';
import Data from '../data/details';

function Home() {
  return (
    <div>
      <div className='home-bg'></div>
      <br />
      {/* <h2>Home</h2> */}

      <Container maxWidth='lg'>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={4}
        >
          {Data.map((Data) => (
            <Grid item xl={3} lg={4} md={4} sm={12} xs={12}>
              <Card2 {...Data} />
            </Grid>
          ))}
          {/* <Grid item xl={3} lg={4} md={4} sm={12} xs={12}><Card/></Grid>
    <Grid item xl={3} lg={4} md={4} sm={12} xs={12}><Card/></Grid>
    <Grid item xl={3} lg={4} md={4} sm={12} xs={12}><Card/></Grid>
    <Grid item xl={3} lg={4} md={4} sm={12} xs={12}><Card/></Grid>
    <Grid item xl={3} lg={4} md={4} sm={12} xs={12}><Card/></Grid>
    <Grid item xl={3} lg={4} md={4} sm={12} xs={12}><Card/></Grid>
    <Grid item xl={3} lg={4} md={4} sm={12} xs={12}><Card/></Grid>
    <Grid item xl={3} lg={4} md={4} sm={12} xs={12}><Card/></Grid>
    <Grid item xl={3} lg={4} md={4} sm={12} xs={12}><Card/></Grid> */}
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
