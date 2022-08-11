import React from 'react';
import Alert from '@mui/material/Alert';
import './CustomAlert.css';

const CustomAlertaErro = ({ mensagem }) => {
  return (
    <div className="custom-alerta-erro">
      <Alert severity="error">{mensagem}</Alert>
    </div>
  );
};

export default CustomAlertaErro;
