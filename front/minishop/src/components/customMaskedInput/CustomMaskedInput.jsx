import './CustomMaskedInput.css';

import InputMask from 'react-input-mask';
import React from 'react';
import TextField from '@mui/material/TextField';

const CustomMaskedInput = ({
  mascara,
  required,
  largura,
  placeholder,
  label,
  value,
  erro,
  aoAlterado,
  isDisabled = false,
}) => {
  const width = largura + 'vw';
  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <InputMask
      className="input"
      disabled={isDisabled}
      mask={mascara}
      maskChar={null}
      onChange={aoDigitado}
      style={{ width: width, marginTop: 20 }}
      id="outlined-read-only-input"
      label={label}
      type="text"
      margin="dense"
      size="small"
      fullWidth
      placeholder={placeholder}
      required={required}
      value={value}
      error={erro}
    >
      {(inputProps) => <TextField {...inputProps} disabled={isDisabled} />}
    </InputMask>
  );
};

export default CustomMaskedInput;
