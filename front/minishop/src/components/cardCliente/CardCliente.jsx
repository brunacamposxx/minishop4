import React from 'react';
import styles from './CardCliente.module.css';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function CardCliente(props) {
  return (
    <div>
      <div className={styles.card}>
        <p className={styles.nome}>
          {props.nome ? props.nome : 'Nome do cliente'}
        </p>
        <p className={styles.dados}>
          <PhoneIcon style={{ fontSize: '28', color: '#b07ca3' }} />
          {props.phone !== null ? props.phone : ' '}
        </p>
        <p className={styles.dados}>
          <AlternateEmailIcon style={{ fontSize: '28', color: '#b07ca3' }} />
          {props.email ? props.email : 'maria.anders@gmail.com'}
        </p>
        <div className={styles.icones}>
          <Link to={`/clientes/${props.id}`} style={{ textDecoration: 'none' }}>
            <Button>
              <RemoveRedEyeIcon
                style={{ fontSize: '30', color: '#b07ca3', margin: '5px' }}
              />
            </Button>
          </Link>
          <Link
            to={`/editarClientes/${props.id}`}
            style={{ textDecoration: 'none' }}
          >
            <Button>
              <CreateIcon
                style={{ fontSize: '30', color: '#b07ca3', margin: '5px' }}
              />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
