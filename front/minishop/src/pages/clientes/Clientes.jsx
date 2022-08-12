import React from 'react';
import CardCliente from '../../components/cardCliente/CardCliente';
import styles from './Clientes.module.css';
import CustomFloatingButton from '../../components/customFloatingButton/CustomFloatingButton';
import { Link } from 'react-router-dom';

function Clientes() {
  const lista = [
    {
      id: 0,
      nome: 'Maria Anders',
      telefone: '(11) 3003 4852',
      email: 'maria.anders@gmail.com',
    },
    {
      id: 1,
      nome: 'Maria Anders',
      telefone: '(11) 3003 4852',
      email: 'maria.anders@gmail.com',
    },
    {
      id: 2,
      nome: 'Maria Anders',
      telefone: '(11) 3003 4852',
      email: 'maria.anders@gmail.com',
    },
    {
      id: 3,
      nome: 'Maria Anders',
      telefone: '(11) 3003 4852',
      email: 'maria.anders@gmail.com',
    },
    {
      id: 4,
      nome: 'Maria Anders',
      telefone: '(11) 3003 4852',
      email: 'maria.anders@gmail.com',
    },
    {
      id: 5,
      nome: 'Maria Anders',
      telefone: '(11) 3003 4852',
      email: 'maria.anders@gmail.com',
    },
    {
      id: 6,
      nome: 'Maria Anders',
      telefone: '(11) 3003 4852',
      email: 'maria.anders@gmail.com',
    },
    {
      id: 7,
      nome: 'Maria Anders',
      telefone: '(11) 3003 4852',
      email: 'maria.anders@gmail.com',
    },
  ];

  return (
    <div className={styles.pagina}>
      <div className={styles.cabecalho}>
        <h2>Clientes</h2>
        <div className={styles.linha}></div>
      </div>
      <div className={styles.listacards}>
        {lista.map((cliente) => (
          <CardCliente
            key={cliente.id}
            nome={cliente.nome}
            telefone={cliente.telefone}
            email={cliente.email}
          />
        ))}
      </div>
      <div>
        <Link to="/cadastrarCliente">
          <CustomFloatingButton />
        </Link>
      </div>
    </div>
  );
}

export default Clientes;
