import React from 'react';
import useStyles from './styles'
import { Form } from '@unform/web';
import Input from '../components/Unform/Input'
import { 
  Container, Typography, Grid, Button, Box
 } from '@material-ui/core'

import Copyright from '../components/page/copyright';

function Signup() {

  const { paper, form, submit } = useStyles();

  function handleSubmit(data){
    console.log(data)
  }

  return (
  <Container component='main' maxWidth='xs' >
    <div className={paper}>
      <Typography variant='h5'>Hello, start your register now!</Typography>
      <Form className={form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Input
              name='firstName'
              label='First Name'
              variant='outlined'
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              name='lastname'
              label='Last Name'
              variant='outlined'
              required
            />
          </Grid>
          <Grid item xs={12}>
              <Input
                variant="outlined"
                fullWidth
                label="Email Address"
                name="email"
                required
              />
            </Grid>
          <Grid item xs={12}>
            <Input
            name='zipcode'
            fullWidth
            label='Zipcode'
            variant='outlined'
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={submit}
          >
            Sign Up
          </Button>
        </Grid>
      </Form>
      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
    
  </Container>
  );
}

export default Signup;