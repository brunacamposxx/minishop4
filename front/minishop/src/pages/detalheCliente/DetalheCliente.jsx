import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { maskCpf, maskPhone, maskPrice } from '../../utils/masks';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import CustomBotao from '../../components/customBotao/CustomBotao';
import PhoneIcon from '@mui/icons-material/Phone';
import SubjectIcon from '@mui/icons-material/Subject';
import { getClienteDetalhes } from '../../services/minishopApiServices';
import styles from './DetalheCliente.module.css';

function DetalheCliente() {
  const { id } = useParams();

  const [cliente, setCliente] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    getClienteDetalhes(id).then((data) => {
      setCliente(data.objetoRetorno);
      setPedidos(data.objetoRetorno.customerOrders);
      setTotal(
        data.objetoRetorno.customerOrders.reduce((acc, currentValue) => {
          return acc + currentValue.totalAmount;
        }, 0),
      );
    });
  }, [id]);

  return (
    <div className={styles.pagina}>
      <div className={styles.cabecalho}>
        <h2>Detalhe do Cliente</h2>
        <div className={styles.linha}></div>
      </div>
      <div className={styles.conteiner}>
        <div className={styles.parteum}>
          <h1>{cliente.firstName + ' ' + cliente.lastName}</h1>
          <h5>
            <PhoneIcon style={{ fontSize: '28', color: '#b07ca3' }} />
            {cliente.phone != null ? maskPhone(cliente.phone) : 'Não informado'}
          </h5>
          <h5>
            <AlternateEmailIcon style={{ fontSize: '28', color: '#b07ca3' }} />
            {cliente.email != null ? cliente.email : 'Não informado'}
          </h5>
          <h5>
            <SubjectIcon style={{ fontSize: '28', color: '#b07ca3' }} />
            {maskCpf(cliente.cpf)}
          </h5>
        </div>
        <div className={styles.linha}></div>

        <div className={styles.partedois}>
          <h4 style={{ fontSize: '40px' }} className={styles.titulo}>
            Pedidos
          </h4>
          <div className={styles.quadro}>
            <div className={styles.linhaquadro}>
              {!!pedidos?.length &&
                pedidos.map((pedido) =>
                  pedido.orders.map((currentOrder) => (
                    <div className={styles.info} key={currentOrder.id}>
                      <div style={{ display: 'flex', columnGap: '25px' }}>
                        <div>{currentOrder.quantity}</div>
                        <div>{currentOrder.productName}</div>
                      </div>
                      <div>{maskPrice(currentOrder.unitPrice)}</div>
                    </div>
                  )),
                )}
            </div>
            <div style={{ fontSize: '35px' }} className={styles.separador}>
              <div>Total</div>
              <div>{maskPrice(total)}</div>
            </div>
          </div>
        </div>
        <div className={styles.lapis}>
          <Link to={`/editarClientes/${id}`} style={{ textDecoration: 'none' }}>
            <Button
              color="inherit"
              style={{ marginLeft: 'auto', marginTop: 'auto' }}
            >
              <CreateIcon style={{ fontSize: '40', color: '#b07ca3' }} />
            </Button>
          </Link>
        </div>
      </div>
      <Link to="/clientes" style={{ textDecoration: 'none' }}>
        <CustomBotao cor="#b07ca3" label="Voltar" />
      </Link>
    </div>
  );
}

export default DetalheCliente;
