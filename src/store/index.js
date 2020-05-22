import { createStore } from 'redux';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: 'Email',
  zipcode: '',
  state: '',
  city: 'Cidade',
  neighborhood: '',
  number: '',
}

function change_form(state = INITIAL_STATE, action){
  switch(action.type){
    case 'setFirstName':
      return {...state, firstName: action.value};
    case 'setLastName':
      return {...state, lastName: action.value};
    case 'setEmail':
      return {...state, email: action.value};
    case 'setZipcode':
      return {...state, zipcode: action.value}
    case 'setState':
      return {...state, state: action.value}
    case 'setCity':
      return {...state, city: action.value}
    case 'setNeighborhood':
      return {...state, neighborhood: action.value}
    case 'setNumber':
      return {...state, number: action.value}
    default:
      return state
  }
}

const store = createStore(change_form);

export default store;