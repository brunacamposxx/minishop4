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
// import QuadroCliente from './QuadroCliente';
import { maskPhone, maskCpf } from '../../utils/masks';

function DetalheCliente() {
  const { id } = useParams();

  const [cliente, setCliente] = useState({});
  const [pedidos, setPedidos] = useState({});

  useEffect(() => {
    getClientePorId(id).then((data) => {
      setCliente(data.objetoRetorno);
      setPedidos(data.objetoRetorno.customerOrders);
    });
  }, [id]);

  console.log(pedidos);

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
            {maskPhone(cliente.phone)}
          </h5>
          <h5>
            <AlternateEmailIcon style={{ fontSize: '28', color: '#b07ca3' }} />
            {cliente.email}
          </h5>
          <h5>
            <SubjectIcon style={{ fontSize: '28', color: '#b07ca3' }} />
            {maskCpf(cliente.cpf)}
          </h5>
        </div>
        <div className={styles.linha}></div>
        <div className={styles.partedois}>
          <h4 className={styles.titulo}>Pedidos</h4>
          <div className={styles.quadro}>
            <div className={styles.linhaquadro}>
              {/* {pedidos.map((pedido) => (
                <QuadroCliente key={pedido.id} nome={pedido.id} />
              ))} */}
            </div>
          </div>
        </div>
        <Link to={`/editarClientes/${id}`} style={{ textDecoration: 'none' }}>
          <Button
            color="inherit"
            style={{ marginLeft: 'auto', marginTop: 'auto' }}
          >
            <CreateIcon style={{ fontSize: '40', color: '#b07ca3' }} />
          </Button>
        </Link>
      </div>
      <Link to="/clientes" style={{ textDecoration: 'none' }}>
        <CustomBotao cor="#b07ca3" label="Voltar" />
      </Link>
    </div>
  );
}

export default DetalheCliente;
