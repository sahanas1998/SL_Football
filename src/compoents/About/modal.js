import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import rows1 from '../../data/Mathch_details';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    
  },
});



export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
         
      <Table className={classes.table} aria-label="simple table">
    
        <TableHead>      
          <TableRow>
            <TableCell align="center" >{rows1.name}</TableCell>
            <TableCell align="center">{rows1.value}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {/* {row1.map((row1)=>(<Grid item xl={3} lg={4} md={4} sm={12} xs={12}><match_details{...match_details}/></Grid>))} */}
          {rows1.map((rows1) => (
            <TableRow >
                <TableCell align="center">{rows1.name}</TableCell>
                <TableCell align="center">{rows1.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}