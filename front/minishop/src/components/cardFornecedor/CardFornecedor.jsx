import React from 'react';
import styles from './CardFornecedor.module.css';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PlaceIcon from '@mui/icons-material/Place';
import PersonIcon from '@mui/icons-material/Person';

export default function CardFornecedor(props) {
  return (
    <div>
      <div className={styles.card}>
        <p className={styles.nome}>
          {props.nome ? props.nome : 'Nome do fornecedor'}
        </p>
        <p className={styles.dados}>
          <PersonIcon style={{ fontSize: '28', color: '#b07ca3' }} />
          {props.contato ? props.contato : 'Charlotte Cooper'}
        </p>
        <p className={styles.dados}>
          <PhoneIcon style={{ fontSize: '28', color: '#b07ca3' }} />
          {props.telefone ? props.telefone : '(11) 9999 9999'}
        </p>
        <p className={styles.dados}>
          <PlaceIcon style={{ fontSize: '28', color: '#b07ca3' }} />
          {props.local ? props.local : 'Uberlândia - MG'}
        </p>
        <p className={styles.dados}>
          <AlternateEmailIcon style={{ fontSize: '28', color: '#b07ca3' }} />
          {props.email ? props.email : 'exoticliquids@gmail.com'}
        </p>
        <div className={styles.icones}>
          <Link to="/detalhefornecedor" style={{ textDecoration: 'none' }}>
            <Button>
              <RemoveRedEyeIcon
                style={{ fontSize: '30', color: '#b07ca3', margin: '5px' }}
              />
            </Button>
          </Link>
          <Link to="/editarfornecedor" style={{ textDecoration: 'none' }}>
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
