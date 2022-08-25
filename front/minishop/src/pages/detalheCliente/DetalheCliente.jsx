import React, { useEffect, useState } from 'react';
import styles from './DetalheCliente.module.css';
import CreateIcon from '@mui/icons-material/Create';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SubjectIcon from '@mui/icons-material/Subject';
import { Button } from '@mui/material';
import CustomBotao from '../../components/customBotao/CustomBotao';
import { Link, useParams } from 'react-router-dom';
import { getClientePorId } from '../../services/minishopApiServices';
import { maskPhone, maskCpf, maskPrice } from '../../utils/masks';

function DetalheCliente() {
  const { id } = useParams();

  const [cliente, setCliente] = useState({});
  const [pedidos, setPedidos] = useState({});
  const [total, setTotal] = useState([]);

  useEffect(() => {
    getClientePorId(id).then((data) => {
      console.log(data);
      setCliente(data.objetoRetorno.customer);
      setPedidos(data.objetoRetorno.orders);
      setTotal(data.objetoRetorno.totalAmount);
      console.log(cliente);
      console.log(pedidos);
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
                pedidos.map((pedido) => (
                  <div className={styles.info} key={pedido.id}>
                    <div style={{ display: 'flex', columnGap: '25px' }}>
                      <div>{pedido.quantity}</div>
                      <div>{pedido.productName}</div>
                    </div>
                    <div>{maskPrice(pedido.unitPrice)}</div>
                  </div>
                ))}
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
