import React from 'react';
import styles from './CardProduto.module.css';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CardProduto(props) {
  return (
    <div>
      <div className={styles.card}>
        <p className={styles.dados}>
          {props.productName ? props.productName : 'Nome do produto'}
        </p>
        <img
          src={props.imagem ? props.imagem : '/organic.jpg'}
          alt="produto"
          className={styles.imagem}
        />
        <p className={styles.dados}>
          {props.unitPrice ? props.unitPrice : 'R$00,00'}
        </p>
        <p className={styles.status}>
          {props.isDiscontinued ? props.isDiscontinued : 'Status'}
        </p>
        <div className={styles.icones}>
          <Link to={`/produtos/${props.id}`} style={{ textDecoration: 'none' }}>
            <Button>
              <RemoveRedEyeIcon
                style={{ fontSize: '30', color: '#b07ca3', margin: '5px' }}
              />
            </Button>
          </Link>
          <Link to="/editarproduto" style={{ textDecoration: 'none' }}>
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
