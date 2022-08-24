import React, { useEffect, useState } from 'react';
import styles from './Pedidos.module.css';
import { getPedidosDeTodosClientes } from '../../services/minishopApiServices';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { maskDate, maskPrice } from '../../utils/masks';

function Pedidos() {
  const [listaPedidos, setListaPedidos] = useState([]);
  const [pagina, setPagina] = useState(0);

  function proximaPagina() {
    setPagina((paginaAtual) => paginaAtual + 1);
  }

  useEffect(() => {
    getPedidosDeTodosClientes().then((data) => {
      setListaPedidos((listaAtual) => [
        ...listaAtual,
        ...data.objetoRetorno.content,
      ]);
    });
  }, [pagina]);

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
                {pedido.firstName + ' ' + pedido.lastName
                  ? pedido.firstName + ' ' + pedido.lastName
                  : ''}
              </span>
              <span className={styles.dados}>{pedido.totalQuantity} </span>
              <span className={styles.dadosdata}>
                {pedido.orderDate ? maskDate(pedido.orderDate) : ''}
              </span>
              <span className={styles.dados}>
                {maskPrice(pedido.totalAmount)}
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
      <p className={styles.carregar} onClick={() => proximaPagina()}>
        Carregar mais...
      </p>
    </div>
  );
}

export default Pedidos;
