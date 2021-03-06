import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from '../../styles/styles';
import { Form } from '@unform/web';
import Input from '../Unform/Input';
import Select from '../Unform/Select'
import { Button, Grid, Typography, CircularProgress } from '@material-ui/core'
import geoapi from '../../services/geoapi';


export default function User(){

  const { form, submit } = useStyles();
  const [estado, setEstado] = useState([]);
  const [cities, setCities] = useState([]);
  const dispach = useDispatch();
  const UF = useSelector(state => state.state);
  const [loading, setLoading] = useState(false);

  

  useEffect(()=>{
      geoapi.get('/estados').then(estados => {
        const options = estados.data.map(item => item.sigla)
        setEstado(options)
      })
      getCity(UF)
  },[UF])

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
    number: useSelector(state => state.number)
  }

  function handleSubmit(data){
    setLoading(true)
    dispach({type: 'setState', value:data.state})
    dispach({type: 'setCity', value:data.city})
    dispach({type: 'setNeighborhood', value:data.neighborhood})
    dispach({type: 'setStreet', value:data.street})
    dispach({type: 'setNumber', value:data.number})
    dispach({type: 'setActiveStep', value: 2})
  }

  return(<>
    <Typography variant='h5' align='center'>Enter your address</Typography>
    <Form className={form} onSubmit={handleSubmit} initialData={address}>
      
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <Select
          onChange={e=>getCity(e.target.value)}
          options={estado}
          name='state'
          label='State'
          required
          />
        </Grid>

        <Grid item xs={12}>
          <Select
          name='city'
          label='City'
          options={cities}
          required
          />
        </Grid>

        <Grid item xs={12}>
          <Input
          name='neighborhood'
          label='Neighborhood'
          required
          />
        </Grid>

        <Grid item xs={12} sm={9}>
          <Input
          name='street'
          label='Street'
          required
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <Input
          name='number'
          label='Number'
          required
          />
        </Grid>

        <Grid item sm={6}>
          <Button
          type="submit"
          variant="contained"
          color="inherit"
          className={submit}
          fullWidth
          onClick={()=>dispach({type: 'setActiveStep', value: 0})}
          >Back
          </Button>
        </Grid>

        <Grid item sm={6}>
          <Button
          type="submit"
          variant="contained"
          color="primary"
          className={submit}
          fullWidth
          disabled={loading}
          > {loading ? (<CircularProgress size={24} />):(<>Next</>)}
          </Button>
        </Grid>
        
        
      
      </Grid>
    </Form>
  </>)
}