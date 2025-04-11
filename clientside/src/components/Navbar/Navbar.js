import React from 'react';
import { AppBar, Typography } from '@mui/material';
import useStyles from './styles';
import memories from '../../images/memoriesLogoish.png';

const Navbar = () => {
const classes = useStyles();

  return (
   <AppBar className={classes.appBar} posiion="static" color="inherit">
    <div className={classes.brandContainer}>
    <Typography className={classes.heading} variant="h1" align="center">
          <img src={memories} alt="Memories Logo" />
        </Typography>
    </div>
    </AppBar>
  )
}

export default Navbar;