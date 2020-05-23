import React, { useState, useEffect } from 'react';
import useStyles from '../styles/styles'
import { 
  Container, Typography, Grid, Button, Box
 } from '@material-ui/core'

import Copyright from '../components/page/copyright';
import UserForm from '../components/signup/user';
import AddressForm from '../components/signup/address';

function Signup() {
    
  const { paper } = useStyles();

  

  return (
  <Container component='main' maxWidth='xs' >
    <div className={paper}>
      <Typography variant='h5'>Hello, start your register now! </Typography>
      {/* <UserForm /> */}
      <AddressForm />
      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
    
  </Container>
  );
}

export default Signup;