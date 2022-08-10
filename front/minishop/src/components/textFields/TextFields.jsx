import * as React from 'react';
import TextField from '@mui/material/TextField';
import './TextFields.css';

function TextFields({
  label,
  largura,
  placeholder,
  required,
  value,
  aoAlterado,
}) {
  const width = largura + 'vw';
  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };
  return (
    <div className="textFields">
      <TextField
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
        onChange={aoDigitado}
      />
    </div>
  );
}

export default TextFields;
