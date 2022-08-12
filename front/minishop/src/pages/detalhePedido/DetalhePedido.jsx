import React, { useEffect, useState } from 'react';
import styles from './DetalhePedido.module.css';
// import CreateIcon from '@mui/icons-material/Create';
// import { Button } from '@mui/material';
import CustomBotao from '../../components/customBotao/CustomBotao';
import { Link, useParams } from 'react-router-dom';
import { getPedidoPorId } from '../../services/minishopApiServices';

function DetalhePedido() {
  const { id } = useParams();

  const [pedido, setPedido] = useState({});

  useEffect(() => {
    getPedidoPorId(id).then((data) => {
      setPedido(data.objetoRetorno);
    });
  }, [id]);

  return (
    <div className={styles.pagina}>
      <div className={styles.cabecalho}>
        <h2>Detalhe do Pedido</h2>
        <div className={styles.linha}></div>
      </div>
      <div className={styles.conteiner}>
        <div className={styles.parteum}>
          <h1>Pedido {pedido.id}</h1>
        </div>
        <div className={styles.linha}></div>
        <div className={styles.conteudo}>
          <div className={styles.colunaum}>
            <h4 className={styles.titulos}>Qnt.</h4>
            <h4 className={styles.total}>{pedido.quantity}</h4>
          </div>
          <div className={styles.colunadois}>
            <h4 className={styles.titulos}>Produto</h4>
            <h4 className={styles.total}>{pedido.productName}</h4>
          </div>
          <div className={styles.colunaum}>
            <h4 className={styles.titulos}>Valor Unitário</h4>
            <h4 className={styles.total}>R${pedido.unitPrice}</h4>
          </div>
        </div>
        <div className={styles.linhaTotal}>
          <span style={{ fontSize: '40px' }}>Total</span>
          <span style={{ fontSize: '40px' }}>
            R${pedido.unitPrice * pedido.quantity}
          </span>
        </div>
      </div>
      <Link to="/pedidos" style={{ textDecoration: 'none' }}>
        <CustomBotao cor="#b07ca3" label="Voltar" />
      </Link>
    </div>
  );
}

export default DetalhePedido;
