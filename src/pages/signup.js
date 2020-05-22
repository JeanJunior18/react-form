import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './styles'
import { Form } from '@unform/web';
import Input from '../components/Unform/Input'
import cep from 'cep-promise';
import { 
  Container, Typography, Grid, Button, Box
 } from '@material-ui/core'

import Copyright from '../components/page/copyright';

function Signup() {
  
  const dispach = useDispatch();
  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState({});
  const endereco = useSelector(state => state.city);
  const email = useSelector(state => state.email);
  
  const { paper, form, submit } = useStyles();

  useEffect(()=>console.log(address), [address])

  function handleSubmit(data){
    console.log(data)
    dispach({type: 'setFirstName', value: data.firstName})
    dispach({type: 'setLastName', value: data.lastName})
    dispach({type: 'setEmail', value: data.email})
    dispach({type: 'setZipcode', value: data.zipcode})
    dispach({type: 'setState', value:data.state})
    dispach({type: 'setCity', value:data.city})
    dispach({type: 'setNeighborhood', value:data.neighborhood})
    dispach({type: 'setStreet', value:data.street})
    dispach({type: 'setNumber', value:data.number})
    console.log(endereco)
  }

  return (
  <Container component='main' maxWidth='xs' >
    <div className={paper}>
      <Typography variant='h5'>Hello, start your register now! </Typography>
      <Form className={form} onSubmit={handleSubmit}>

        <Grid container spacing={2}>

          <Grid item xs={12} sm={6}>
            <Input
              name='firstName'
              label='First Name'
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Input
              name='lastname'
              label='Last Name'
            />
          </Grid>

          <Grid item xs={12}>
              <Input
                variant="outlined"
                label="Email Address"
                name="email"
              />
          </Grid>

          <Grid item xs={12}>
            <Input
            name='zipcode'
            label='Zipcode'
            onChange={e => setZipcode(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <Input
            name='state'
            label='State'
            />
          </Grid>

          <Grid item xs={12}>
            <Input
            name='city'
            label='City'
            />
          </Grid>

          <Grid item xs={12}>
            <Input
            name='neighborhood'
            label='Neighborhood'
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Input
            name='street'
            label='Street'
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Input
            name='number'
            label='Number'
            />
          </Grid>


          <Button
          type="submit"
          variant="contained"
          color="primary"
          className={submit}
          fullWidth
          >Sign Up 
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