import React, { useEffect, useState } from 'react';
import styles from './DetalheCliente.module.css';
import CreateIcon from '@mui/icons-material/Create';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SubjectIcon from '@mui/icons-material/Subject';
import { Button } from '@mui/material';
import CustomBotao from '../../components/customBotao/CustomBotao';
import { Link, useParams } from 'react-router-dom';
import {
  getClientePorId,
  getProdutoPorId,
} from '../../services/minishopApiServices';

function DetalheCliente() {
  const { id } = useParams();
  const listaIdProdutos = [];
  const listaNomes = [];

  const [cliente, setCliente] = useState({});
  const [pedidos, setPedidos] = useState({});

  useEffect(() => {
    getClientePorId(id).then((data) => {
      setCliente(data.objetoRetorno);
      setPedidos(data.objetoRetorno.customerOrders);
    });
  }, [id]);

  console.log(pedidos);
  for (let i = 0; i < pedidos.length; i++) {
    listaIdProdutos.push(pedidos[i].id);
  }

  async function pegaNomes() {
    for (let n = 0; n < listaIdProdutos.length; n++) {
      await getProdutoPorId(listaIdProdutos[n]).then((data) => {
        listaNomes.push(data.objetoRetorno.productName);
      });
    }
  }

  console.log(listaNomes);
  pegaNomes();

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
            {cliente.phone}
          </h5>
          <h5>
            <AlternateEmailIcon style={{ fontSize: '28', color: '#b07ca3' }} />
            {cliente.email}
          </h5>
          <h5>
            <SubjectIcon style={{ fontSize: '28', color: '#b07ca3' }} />
            {cliente.cpf}
          </h5>
        </div>
        <div className={styles.linha}></div>
        <div className={styles.partedois}>
          <h4 className={styles.titulo}>Pedidos</h4>
          <div className={styles.quadro}>
            <div className={styles.linhaquadro}>
              <span className={styles.produto}>3 Chai Latte</span>
              <span className={styles.produto}>54,00</span>
            </div>
            <div className={styles.linhaquadro}>
              <span className={styles.produto}>3 Chai Latte</span>
              <span className={styles.produto}>54,00</span>
            </div>
            <div className={styles.linhaquadro}>
              <span className={styles.total}>Total</span>
              <span className={styles.total}>189,35</span>
            </div>
          </div>
        </div>
        <Button
          color="inherit"
          style={{ marginLeft: 'auto', marginTop: 'auto' }}
        >
          <CreateIcon style={{ fontSize: '40', color: '#b07ca3' }} />
        </Button>
      </div>
      <Link to="/clientes" style={{ textDecoration: 'none' }}>
        <CustomBotao cor="#b07ca3" label="Voltar" />
      </Link>
    </div>
  );
}

export default DetalheCliente;
