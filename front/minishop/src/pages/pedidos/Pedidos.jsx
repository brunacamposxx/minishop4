import React, { useEffect, useState } from 'react';
import styles from './Pedidos.module.css';
import { getPedidos } from '../../services/minishopApiServices';

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
        {listaPedidos.map((pedido) => (
          <div key={pedido.id}>
            <span>{pedido.quantity} </span>
            <span>R${pedido.unitPrice * pedido.quantity} </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pedidos;
