import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { Button } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import CreateIcon from '@mui/icons-material/Create';
import CustomBotao from '../../components/customBotao/CustomBotao';
import { getProdutoPorId } from '../../services/minishopApiServices';
import { maskPrice } from '../../utils/masks';
import styles from './DetalheProduto.module.css';

function DetalheProduto() {
  const { id } = useParams();

  const [produto, setProduto] = useState({});
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    getProdutoPorId(id).then((data) => {
      setProduto(data.objetoRetorno);
      setImgs(data.objetoRetorno.imagens);
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
          {imgs.length === 0 ? (
            <img src={'/sem-foto.jpg'} alt="produto" className={styles.foto} />
          ) : (
            imgs.map((img) => (
              <img
                style={{
                  maxHeight: '400px',
                  maxWidth: '450px',
                  marginTop: '20px',
                  border: 'none',
                }}
                key={img.id}
                src={img.url}
              />
            ))
          )}
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
            {produto.unitPrice ? maskPrice(produto.unitPrice) : 'R$00,00'}
          </h1>
          <span className={styles.dados}>
            Fornecedor:{' '}
            {produto.supplierId == 3 ? 'Boa Comida' : 'Função enfeites'}
          </span>
          <span style={{ fontSize: '24px' }}>
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
          <div className={styles.lapis} style={{ display: 'flex' }}>
            <Link
              to={`/editarProduto/${id}`}
              style={{ textDecoration: 'none' }}
            >
              <Button
                color="inherit"
                style={{ marginLeft: 'auto', marginTop: 'auto' }}
              >
                <CreateIcon style={{ fontSize: '40', color: '#b07ca3' }} />
              </Button>
            </Link>
          </div>
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
