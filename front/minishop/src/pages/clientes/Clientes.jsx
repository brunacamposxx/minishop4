import React, { useEffect, useState } from 'react';
import CardCliente from '../../components/cardCliente/CardCliente';
import styles from './Clientes.module.css';
import CustomFloatingButton from '../../components/customFloatingButton/CustomFloatingButton';
import { Link } from 'react-router-dom';
import { getClientes } from '../../services/minishopApiServices';
import { maskPhone } from '../../utils/masks';

function Clientes() {
  const [listaClientes, setListaClientes] = useState([]);
  const [pagina, setPagina] = useState(0);

  function proximaPagina() {
    setPagina((paginaAtual) => paginaAtual + 1);
  }

  useEffect(() => {
    getClientes(pagina, 12).then((data) => {
      setListaClientes((listaAtual) => [
        ...listaAtual,
        ...data.objetoRetorno.content,
      ]);
    });
  }, [pagina]);

  return (
    <div className={styles.pagina}>
      <div className={styles.cabecalho}>
        <h2>Clientes</h2>
        <div className={styles.linha}></div>
      </div>
      <div className={styles.listacards}>
        {listaClientes.map((cliente) => (
          <CardCliente
            key={cliente.id}
            id={cliente.id}
            nome={cliente.nome}
            phone={maskPhone(cliente.phone)}
            email={cliente.email}
          />
        ))}
      </div>
      <p className={styles.carregar} onClick={() => proximaPagina()}>
        Carregar mais...
      </p>
      <div>
        <Link to="/cadastrarCliente">
          <CustomFloatingButton />
        </Link>
      </div>
    </div>
  );
}

export default Clientes;
