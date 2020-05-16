import React, {useEffect, useRef} from 'react';
import { TextField } from '@material-ui/core';
import { useField } from '@unform/core'


function UnformInput({name, label, ...rest}) {
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField(name)
  
  useEffect(()=>{
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    },[fieldName, registerField])
  });

  return (
    <TextField
      inputRef={inputRef}
      name={name}
      label={label}
      variant='outlined'
      {...rest}
    />
  );
}

export default UnformInput;