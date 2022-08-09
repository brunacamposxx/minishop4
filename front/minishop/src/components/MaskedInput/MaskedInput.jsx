import InputMask from 'react-input-mask';
import TextField from '@mui/material/TextField';
import React from 'react';
import './MaskedInput.css';

const MaskedInput = ({
  mascara,
  required,
  largura,
  placeholder,
  label,
  value,
  erro,
  aoAlterado,
}) => {
  const width = largura + 'vw';
  // const onChangeFunction = (event) => {
  //   emMudanca(event.target.value);
  // };

  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <InputMask
      className="input"
      mask={mascara}
      maskChar={null}
      onChange={aoDigitado}
      style={{ width: width }}
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
      {(inputProps) => <TextField {...inputProps} />}
    </InputMask>
  );
};

export default MaskedInput;
