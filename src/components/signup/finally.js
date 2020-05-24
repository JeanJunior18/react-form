import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from '../../styles/styles';
import { Form } from '@unform/web';
// import Input from '../Unform/Input';
import { Typography, Button, Grid, Card, CardContent } from '@material-ui/core';
// import sended from '../../assets/orderrequested.gif';


export default function User(){

  const dispach = useDispatch()
  const { form, submit } = useStyles();

  const data = useSelector(state => state)
  const { card } = useStyles()

  return(<>
    {/* <Typography variant='h5'>Jean, we are shipping your order ASAP</Typography> */}
    <Form className={form} >

      <Grid container spacing={2}>

        <Grid item >
          <Typography variant='h5'>{data.firstName}, confirm your details and confirm your order</Typography>
        </Grid>

        <Grid className={card} item xs={12} sm={10} variant='outlined'>
          <Card>
            <CardContent>
              <Typography>Name: {data.firstName} {data.lastName}</Typography>
              <Typography>Address: {data.street}, {data.number} - {data.neighborhood}</Typography>
              <Typography>City: {data.city}, {data.state}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item sm={6}>
          <Button
          type="submit"
          variant="contained"
          color="inherit"
          className={submit}
          fullWidth
          onClick={()=>dispach({type: 'setActiveStep', value: 1})}
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
          > Finish
          </Button>
        </Grid>
      
      </Grid>
    </Form>
  </>)
}