import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useStyles from '../../styles/styles';
import { Form } from '@unform/web';
import Input from '../Unform/Input';
import Select from '../Unform/Select'
import cep from 'cep-promise';
import { Button, Grid } from '@material-ui/core'
import geoapi from '../../services/geoapi';


export default function User(){

  const { form, submit } = useStyles();
  const [estado, setEstado] = useState([]);
  const [cities, setCities] = useState([])
  const UF = useSelector(state => state.state)
  

  useEffect(()=>{
      geoapi.get('/estados').then(estados => {
        const options = estados.data.map(item => item.sigla)
        setEstado(options)
      })
      getCity(UF)
  },[])

  function getCity(UF){
    console.log(UF)
    console.log('pegando cidades')
    geoapi.get(`/estados/${UF}/municipios`).then(cities => {
      const options = cities.data.map(item => item.nome)
      setCities(options)
    })
  }

  const address = {
    state: useSelector(state => state.state),
    city: useSelector(state=> state.city),
    neighborhood: useSelector(state => state.neighborhood),
    street: useSelector(state => state.street),
  }

  function handleSubmit(data){console.log(data)}

  return(
    <Form className={form} onSubmit={handleSubmit} initialData={address}>

      <Grid container spacing={2}>

        <Grid item xs={12}>
          <Select
          onChange={e=>getCity(e.target.value)}
          options={estado}
          name='state'
          label='State'
          />
        </Grid>

        <Grid item xs={12}>
          <Select
          name='city'
          label='City'
          options={cities}
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
  )
}