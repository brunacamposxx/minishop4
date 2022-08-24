import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import styles from './DetalhePedido.module.css';
// import CreateIcon from '@mui/icons-material/Create';
// import { Button } from '@mui/material';
// import CustomBotao from '../../components/customBotao/CustomBotao';
// import { Link } from 'react-router-dom';
import { getPedidosDeTodosClientesById } from '../../services/minishopApiServices';
import { maskDate, maskPrice } from '../../utils/masks';
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
      console.log(data);
      console.log(orders);
      console.log(customer);
      setPedidos(orders);
      setCustomers(customer);
      setTotal(total);
      setIdPedido(idPedido);
      setdataPedido(dataPedido);
    });
  }, []);

  return (
    <>
      <div>
        Pedido {idPedido} .......... {maskDate(dataPedido)}
      </div>
      <div>
        {customer.firstName} {customer.lastName}
      </div>
      {pedidos?.map((pedido) => {
        return (
          <div key={pedido.id}>
            {pedido.quantity} - Nome do produto - {maskPrice(pedido.unitPrice)}
          </div>
        );
      })}
      <div>Total ........ {maskPrice(total)}</div>
    </>
    // <div className={styles.pagina}>
    //   <div className={styles.cabecalho}>
    //     <h2>Detalhe do Pedido</h2>
    //     <div className={styles.linha}></div>
    //   </div>
    //   <div className={styles.conteiner}>
    //     <div className={styles.parteum}>
    //       <h1>Pedido {pedido.id}</h1>
    //     </div>
    //     <div className={styles.linha}></div>
    //     <div className={styles.conteudo}>
    //       <div className={styles.colunaum}>
    //         <h4 className={styles.titulos}>Qnt.</h4>
    //         <h4 className={styles.total}>{pedido.quantity}</h4>
    //       </div>
    //       <div className={styles.colunadois}>
    //         <h4 className={styles.titulos}>Produto</h4>
    //         <h4 className={styles.total}>{pedido.productName}</h4>
    //       </div>
    //       <div className={styles.colunaum}>
    //         <h4 className={styles.titulos}>Valor Unitário</h4>
    //         <h4 className={styles.total}>R${pedido.unitPrice}</h4>
    //       </div>
    //     </div>
    //     <div className={styles.linhaTotal}>
    //       <span style={{ fontSize: '40px' }}>Total</span>
    //       <span style={{ fontSize: '40px' }}>
    //         {maskPrice(pedido.unitPrice * pedido.quantity)}
    //       </span>
    //     </div>
    //   </div>
    //   <Link to="/pedidos" style={{ textDecoration: 'none' }}>
    //     <CustomBotao cor="#b07ca3" label="Voltar" />
    //   </Link>
    // </div>
  );
}

export default DetalhePedido;
