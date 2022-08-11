import React, { useEffect, useState } from 'react';
import styles from './DetalheProduto.module.css';
import CreateIcon from '@mui/icons-material/Create';
import { Button } from '@mui/material';
import CustomBotao from '../../components/customBotao/CustomBotao';
import { useParams, Link } from 'react-router-dom';
import { getProdutoPorId } from '../../services/minishopApiServices';
import CircleIcon from '@mui/icons-material/Circle';

function DetalheProduto() {
  const { id } = useParams();

  const [produto, setProduto] = useState({});

  useEffect(() => {
    getProdutoPorId(id).then((data) => {
      setProduto(data.objetoRetorno);
    });
  }, [id]);

  return (
    <div className={styles.pagina}>
      <div className={styles.cabecalho}>
        <h2>Detalhe do Produto</h2>
        <div className={styles.linha}></div>
      </div>
      <div className={styles.conteiner}>
        <div className={styles.esquerda}>
          <img src={'/sem-foto.jpg'} alt="produto" className={styles.foto} />
        </div>
        <div className={styles.direita}>
          <h1 className={styles.nome}>
            {produto.productName ? produto.productName : 'Nome do produto'}
          </h1>
          <h1
            style={{
              color: '#808080',
              fontSize: '50px',
              padding: '0px',
              margin: '0px',
            }}
          >
            {produto.unitPrice ? 'R$' + produto.unitPrice : 'R$00,00'}
          </h1>
          <span className={styles.dados}>
            Fornecedor:{' '}
            {produto.supplierId == 3 ? 'Boa Comida' : 'Função enfeites'}
          </span>
          <span style={{ fontSize: '20px' }}>
            {produto.packageName ? 'Pacotes:' + produto.packageName : ''}
          </span>
          <span className={styles.dados}>
            {produto.isDiscontinued == false ? (
              <CircleIcon style={{ fontSize: '25', color: 'green' }} />
            ) : (
              <CircleIcon style={{ fontSize: '25', color: 'red' }} />
            )}
            {produto.isDiscontinued == false ? 'Ativo' : 'Inativo'}
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
        <CustomBotao
          cor="#b07ca3"
          label="Voltar"
          style={{ marginLeft: 'auto' }}
        />
      </Link>
    </div>
  );
}

export default DetalheProduto;
