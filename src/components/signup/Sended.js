import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useStyles from '../../styles/styles';
import { Typography, Grid, Card, CardContent, Fade } from '@material-ui/core';


export default function User(){

  const email = useSelector(state => state.email)
  const { text } = useStyles()
  const [check, setCheck] = useState();

  useEffect(()=>{
    setTimeout(()=>{setCheck(true)}
    ,100)
  })

  return(<>
    <Fade in={check}>
      <Grid container spacing={2}>
        <Grid item>
          <Card>
            <CardContent>
              <Typography className={text} variant='h4' align='center'>Thanks You</Typography>
              <Typography className={text} variant='h6' align='center'>We sent an email with the tracking code to {email}</Typography>
              </CardContent>
            </Card>
          </Grid>
      </Grid>
    </Fade>
  </>)
}