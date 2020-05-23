import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from '../../styles/styles';
import { Form } from '@unform/web';
import Input from '../Unform/Input';
import cep from 'cep-promise';
import { Typography, Button, Grid } from '@material-ui/core'


export default function User(){

  const dispach = useDispatch()
  const { form, submit } = useStyles();

  const data = {
    firstName: useSelector(state => state.firstName),
    lastName: useSelector(state=> state.lastName),
    email: useSelector(state => state.email),
    zipcode: useSelector(state => state.zipcode),
  }

  function handleSubmit(data){
    console.log(data)
    cep(data.zipcode).then(address => {
      dispach({type: 'setState', value:address.state})
      dispach({type: 'setCity', value:address.city})
      dispach({type: 'setNeighborhood', value:address.neighborhood})
      dispach({type: 'setStreet', value:address.street})
      dispach({type: 'setNumber', value:address.number})
    }).then(()=>{
      dispach({type: 'setFirstName', value: data.firstName})
      dispach({type: 'setLastName', value: data.lastName})
      dispach({type: 'setEmail', value: data.email})
      dispach({type: 'setZipcode', value: data.zipcode})
      dispach({type: 'setActiveStep', value: 1})
      console.log('Deu bom')
    }).catch(err => console.log('deu ruim'))
    
    
  }

  return(<>
    <Typography variant='h5'>Hello, start your register now! </Typography>
    <Form className={form} onSubmit={handleSubmit} initialData={data}>

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
            name='lastName'
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
          />
        </Grid>

        <Button
        type="submit"
        variant="contained"
        color="primary"
        className={submit}
        fullWidth
        >Next 
        </Button>
        
      
      </Grid>
    </Form>
  </>)
}