import React from 'react';
import { useDispatch } from 'react-redux';
import useStyles from '../../styles/styles';
import { Form } from '@unform/web';
import Input from '../Unform/Input';
import cep from 'cep-promise';
import { Button, Grid } from '@material-ui/core'


export default function User(){

  const dispach = useDispatch()
  const { paper, form, submit } = useStyles();

  function handleSubmit(data){
    console.log(data)
    dispach({type: 'setFirstName', value: data.firstName})
    dispach({type: 'setLastName', value: data.lastName})
    dispach({type: 'setEmail', value: data.email})
    dispach({type: 'setZipcode', value: data.zipcode})
    // dispach({type: 'setState', value:data.state})
    // dispach({type: 'setCity', value:data.city})
    // dispach({type: 'setNeighborhood', value:data.neighborhood})
    // dispach({type: 'setStreet', value:data.street})
    // dispach({type: 'setNumber', value:data.number})
  }

  return(
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
          // onChange={e => setZipcode(e.target.value)}
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
  )
}