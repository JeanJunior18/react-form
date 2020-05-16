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
  const [StatusAddress, setStatusAddress] = useState(false);
  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState({});
  const endereco = useSelector(state => state.address);
  
  const { paper, form, submit } = useStyles();
  
  useEffect(()=>{
    console.log(zipcode)
    if(zipcode.length>=8){
      cep(zipcode).then(res => {
        console.log(res)
        setAddress({
          state: res.state,
          city: res.city,
          neighborhood: res.neighborhood,
          street: res.street,
        })
      })
    }
  },[zipcode])

  function handleSubmit(data){
    console.log(data)
    dispach({type: 'setFirstName', value: data.firstName})
    dispach({type: 'setLastName', value: data.lastName})
    dispach({type: 'setEmail', value: data.email})
    dispach({type: 'setZipcode', value: data.zipcode})
    dispach({type: 'setAddress', value:address})
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
              variant='outlined'
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              name='lastname'
              label='Last Name'
              variant='outlined'
              
            />
          </Grid>
          <Grid item xs={12}>
              <Input
                variant="outlined"
                fullWidth
                label="Email Address"
                name="email"
                
              />
            </Grid>
          <Grid item xs={12}>
            <Input
            name='zipcode'
            fullWidth
            label='Zipcode'
            variant='outlined'
            onChange={e => setZipcode(e.target.value)}
            />
          </Grid>
          {StatusAddress ? (
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={submit}
          >
            Sign Up
          </Button>
          ):(
          <Button
          onClick={()=>{}}
          fullWidth
          variant='contained'
          color='inherit'  
          >Next</Button>)}
          
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