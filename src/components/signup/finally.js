import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from '../../styles/styles';
import { Form } from '@unform/web';
import { Typography, Button, Grid, Card, CardContent, Box, Fade } from '@material-ui/core';


export default function User(){

  const dispach = useDispatch()
  const { form, submit } = useStyles();

  const data = useSelector(state => state)

  return(<Fade in={true}>
    <Form className={form} >

      <Grid container spacing={2}>

        <Grid item >
          <Typography variant='h5'>{data.firstName}, confirm your details and confirm your order</Typography>
        </Grid>

        <Box width='100%' >
          <Card variant='outlined'>
            <CardContent>
              <Typography>Name: {data.firstName} {data.lastName}</Typography>
              <Typography>Address: {data.street}, {data.number} - {data.neighborhood}</Typography>
              <Typography>City: {data.city}, {data.state}</Typography>
            </CardContent>
          </Card>
        </Box>

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
          onClick={()=>dispach({type: 'setActiveStep', value: 3})}
          fullWidth
          > Finish
          </Button>
        </Grid>
      
      </Grid>
    </Form>
  </Fade>)
}