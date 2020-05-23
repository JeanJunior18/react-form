import React from 'react';
import { useSelector } from 'react-redux'
import useStyles from '../styles/styles'
import { Container, Box, Stepper, Step, StepLabel } from '@material-ui/core'
import Copyright from '../components/page/copyright';
import UserForm from '../components/signup/user';
import AddressForm from '../components/signup/address';


function getSteps(){
  return ['Informações do Usuário', 'Informações de Endereço', 'Finalizar']
}
  
function getStepContent(stepIndex){
  switch (stepIndex) {
    case 0:
      return <UserForm />
    case 1: 
      return <AddressForm />
    default:
      return 'Não encontrado'
  }
}

export default function Signup() {
  
  const { paper } = useStyles();
  const activeStep = useSelector(state => state.activeStep)
  const steps = getSteps()

  return (
  <Container component='main' maxWidth='xs' >
    <div className={paper}>

      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map( label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ) )}
      </Stepper>
      {getStepContent(activeStep)}

      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
    
  </Container>
  );
}
