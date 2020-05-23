import React, { useEffect, useRef } from 'react';
import { TextField, MenuItem } from '@material-ui/core'
import { useField } from '@unform/core';

export default function UnformSelect({name, options, ...rest}){
  
  const inputRef = useRef(null)
  const { fieldName, registerField, defaultValue } = useField(name)

  useEffect(()=>{
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  },[registerField, fieldName])

  return (<>
    <TextField 
    defaultValue={defaultValue} 
    variant='outlined'
    fullWidth
    {...rest} 
    select>
      {options.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)}
    </TextField>
  </>)
}