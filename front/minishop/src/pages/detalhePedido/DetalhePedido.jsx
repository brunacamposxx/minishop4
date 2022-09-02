import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { maskDate, maskPrice } from '../../utils/masks';

import CustomBotao from '../../components/customBotao/CustomBotao';
import { getPedidosDeTodosClientesById } from '../../services/minishopApiServices';
import styles from './DetalhePedido.module.css';

// import CreateIcon from '@mui/icons-material/Create';
// import { Button } from '@mui/material';
// import CustomBotao from '../../components/customBotao/CustomBotao';
// import { Link } from 'react-router-dom';

// import { maskPrice } from '../../utils/masks';

function DetalhePedido() {
  const [pedidos, setPedidos] = useState([]);
  const [customer, setCustomers] = useState([]);
  const [total, setTotal] = useState([]);
  const [idPedido, setIdPedido] = useState([]);
  const [dataPedido, setdataPedido] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getPedidosDeTodosClientesById(id).then((data) => {
      const customer = data.objetoRetorno.customer;
      const orders = data.objetoRetorno.orders;
      const total = data.objetoRetorno.totalAmount;
      const idPedido = data.objetoRetorno.id;
      const dataPedido = data.objetoRetorno.orderDate;
      setPedidos(orders);
      setCustomers(customer);
      setTotal(total);
      setIdPedido(idPedido);
      setdataPedido(dataPedido);
    });
  }, []);

  return (
    <>
      <div className={styles.pagina}>
        <div className={styles.cabecalho}>
          <h2>Detalhe do Pedido</h2>
          <div className={styles.linha}></div>
        </div>
        <div className={styles.conteiner}>
          <div className={styles.pedidoEdata}>
            <div className={styles.pedido}>
              <h1 style={{ fontSize: '60px' }}>Pedido {idPedido}</h1>
            </div>
            <div className={styles.data}>
              <h1 style={{ fontSize: '50px' }}>{maskDate(dataPedido)}</h1>
            </div>
          </div>
          <div className={styles.linha2}></div>
          <h4
            style={{
              marginTop: '10px',
              marginBottom: '20px',
              fontSize: '50px',
            }}
            className={styles.nome}
          >
            {customer.firstName} {customer.lastName}
          </h4>
          <div className={styles.conteudo}>
            <div className={styles.titles}>
              <div
                style={{ display: 'flex', columnGap: '40px' }}
                className={styles.quantEprod}
              >
                <div className={styles.colunaum}>
                  <h4 className={styles.titulos}>Qnt.</h4>
                </div>
                <div className={styles.colunadois}>
                  <h4 className={styles.titulos}>Produto</h4>
                </div>
              </div>
              <div className={styles.colunaum}>
                <h4 className={styles.titulos}>Valor Unitário</h4>
              </div>
            </div>
            <div className={styles.infos}>
              {pedidos?.map((pedido) => {
                return (
                  <div
                    className={styles.infos2}
                    style={{ display: 'flex' }}
                    key={pedido.id}
                  >
                    <div style={{ display: 'flex', columnGap: '60px' }}>
                      <div>{pedido.quantity}</div>
                      <div>{pedido.productName}</div>
                    </div>
                    <div>{maskPrice(pedido.unitPrice)}</div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div className={styles.linhaTotal}> */}
          <div className={styles.totais}>
            <div style={{ fontSize: '35px' }}>Total</div>
            <div style={{ fontSize: '35px' }}>{maskPrice(total)}</div>
          </div>
          {/* </div> */}
        </div>
        <Link to="/pedidos" style={{ textDecoration: 'none' }}>
          <CustomBotao cor="#b07ca3" label="Voltar" />
        </Link>
      </div>
    </>
  );
}

export default DetalhePedido;
