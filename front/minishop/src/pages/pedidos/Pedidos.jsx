import React, { useEffect, useState } from 'react';
import styles from './Pedidos.module.css';
import { getPedidos } from '../../services/minishopApiServices';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Pedidos() {
  const [listaPedidos, setListaPedidos] = useState([]);

  useEffect(() => {
    getPedidos().then((data) => {
      setListaPedidos(data.objetoRetorno.content);
    });
  }, []);

  return (
    <div className={styles.pagina}>
      <div className={styles.cabecalho}>
        <h2>Pedidos</h2>
        <div className={styles.linha}></div>
      </div>
      <div className={styles.quadro}>
        <div className={styles.tituloquadro}>
          <span className={styles.subtitulos}>Cliente</span>
          <span className={styles.subtitulos}>Qnt. Produtos</span>
          <span className={styles.subtitulos}>Data</span>
          <span className={styles.subtitulos}>Total</span>
          <span className={styles.subtitulos}>Ação</span>
        </div>
        <div className={styles.conteudoquadro}>
          {listaPedidos.map((pedido) => (
            <div key={pedido.id}>
              <span className={styles.dados}>
                {pedido.cliente ? pedido.cliente : ''}
              </span>
              <span className={styles.dados}>{pedido.quantity} </span>
              <span className={styles.dadosdata}>
                {pedido.data ? pedido.data : ''}
              </span>
              <span className={styles.dados}>
                R${pedido.unitPrice * pedido.quantity}
              </span>
              <Link
                to={`/pedidos/${pedido.id}`}
                style={{ textDecoration: 'none' }}
              >
                <Button>
                  <RemoveRedEyeIcon
                    style={{
                      fontSize: '30',
                      color: '#b07ca3',
                      margin: '5px',
                      marginLeft: '200px',
                    }}
                  />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pedidos;
