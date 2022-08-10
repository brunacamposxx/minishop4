import React from 'react';
import styles from './DetalheCliente.module.css';
import CreateIcon from '@mui/icons-material/Create';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SubjectIcon from '@mui/icons-material/Subject';
import { Button } from '@mui/material';
import Botao from '../../components/botao/Botao';
import { Link } from 'react-router-dom';

function DetalheCliente() {
  return (
    <div className={styles.pagina}>
      <div className={styles.cabecalho}>
        <h2>Detalhe do Cliente</h2>
        <div className={styles.linha}></div>
      </div>
      <div className={styles.conteiner}>
        <div className={styles.parteum}>
          <h1>Maria</h1>
          <h5>
            <PhoneIcon style={{ fontSize: '28', color: '#b07ca3' }} />
            (37)998187879
          </h5>
          <h5>
            <AlternateEmailIcon style={{ fontSize: '28', color: '#b07ca3' }} />
            maria.anders@gmail.com
          </h5>
          <h5>
            <SubjectIcon style={{ fontSize: '28', color: '#b07ca3' }} />
            458.990.339-22
          </h5>
        </div>
        <div className={styles.linha}></div>
        <div className={styles.partedois}>
          <h4 className={styles.titulo}>Pedidos</h4>
          <div className={styles.quadro}>
            <div className={styles.linhaquadro}>
              <span className={styles.produto}>3 Chai Latte</span>
              <span className={styles.produto}>54,00</span>
            </div>
            <div className={styles.linhaquadro}>
              <span className={styles.produto}>3 Chai Latte</span>
              <span className={styles.produto}>54,00</span>
            </div>
            <div className={styles.linhaquadro}>
              <span className={styles.total}>Total</span>
              <span className={styles.total}>189,35</span>
            </div>
          </div>
        </div>
        <Button
          color="inherit"
          style={{ marginLeft: 'auto', marginTop: 'auto' }}
        >
          <CreateIcon style={{ fontSize: '40', color: '#b07ca3' }} />
        </Button>
      </div>
      <Link to="/clientes" style={{ textDecoration: 'none' }}>
        <Botao cor="#b07ca3" label="Voltar" />
      </Link>
    </div>
  );
}

export default DetalheCliente;
