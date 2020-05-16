import { createStore } from 'redux';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  zipcode: '',
  address: {},
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
    case 'setAddress':
      return {...state, address: action.value,}
    default:
      return state
  }
}

const store = createStore(change_form);

export default store;