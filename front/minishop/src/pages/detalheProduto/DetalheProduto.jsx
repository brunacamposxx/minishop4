import React from 'react';
import styles from './DetalheProduto.module.css';
import CreateIcon from '@mui/icons-material/Create';
import { Button } from '@mui/material';
import CustomBotao from '../../components/customBotao/CustomBotao';
import { Link } from 'react-router-dom';

function DetalheProduto(props) {
  return (
    <div className={styles.pagina}>
      <div className={styles.cabecalho}>
        <h2>Detalhe do Produto</h2>
        <div className={styles.linha}></div>
      </div>
      <div className={styles.conteiner}>
        <div className={styles.esquerda}>
          <img
            src={props.imagem ? props.imagem : '/organic.jpg'}
            alt="produto"
            className={styles.foto}
          />
        </div>
        <div className={styles.direita}>
          <h1 className={styles.nome}>
            {props.nome ? props.nome : 'Nome do produto'}
          </h1>
          <h1
            style={{
              color: '#808080',
              fontSize: '50px',
              padding: '0px',
              margin: '0px',
            }}
          >
            {props.preco ? props.preco : 'R$00,00'}
          </h1>
          <span className={styles.dados}>
            Fornecedor: {props.fornecedor ? props.fornecedor : 'Exemplo'}
          </span>
          <span style={{ fontSize: '20px' }}>
            Quantidade: {props.quantidade ? props.quantidade : 'Exemplo'}
          </span>
          <span className={styles.dados}>
            {props.status ? props.status : 'Status'}
          </span>
          <Button
            color="inherit"
            style={{ marginLeft: 'auto', marginTop: 'auto' }}
          >
            <CreateIcon style={{ fontSize: '40', color: '#b07ca3' }} />
          </Button>
        </div>
      </div>
      <Link to="/produtos" style={{ textDecoration: 'none' }}>
        <CustomBotao cor="#b07ca3" label="Voltar" />
      </Link>
    </div>
  );
}

export default DetalheProduto;
