import React from 'react';
import CardFornecedor from '../../components/cardFornecedor/CardFornecedor';
import styles from './Fornecedores.module.css';

function Fornecedores() {
  const lista = [
    {
      id: 0,
      nome: 'Exotic Liquids',
      contato: 'Maria Anders',
      telefone: '(11) 3003 4852',
      local: 'Uberlândia - MG',
      email: 'maria.anders@gmail.com',
    },
    {
      id: 1,
      nome: 'Exotic Liquids',
      contato: 'Maria Anders',
      telefone: '(11) 3003 4852',
      local: 'Uberlândia - MG',
      email: 'maria.anders@gmail.com',
    },
    {
      id: 2,
      nome: 'Exotic Liquids',
      contato: 'Maria Anders',
      telefone: '(11) 3003 4852',
      local: 'Uberlândia - MG',
      email: 'maria.anders@gmail.com',
    },
    {
      id: 3,
      nome: 'Exotic Liquids',
      contato: 'Maria Anders',
      telefone: '(11) 3003 4852',
      local: 'Uberlândia - MG',
      email: 'maria.anders@gmail.com',
    },
    {
      id: 4,
      nome: 'Exotic Liquids',
      contato: 'Maria Anders',
      telefone: '(11) 3003 4852',
      local: 'Uberlândia - MG',
      email: 'maria.anders@gmail.com',
    },
  ];

  return (
    <div className={styles.pagina}>
      <div className={styles.cabecalho}>
        <h2>Fornecedores</h2>
        <div className={styles.linha}></div>
      </div>
      <div className={styles.listacards}>
        {lista.map((fornecedor) => (
          <CardFornecedor
            key={fornecedor.id}
            nome={fornecedor.nome}
            contato={fornecedor.contato}
            telefone={fornecedor.telefone}
            local={fornecedor.local}
            email={fornecedor.email}
          />
        ))}
      </div>
    </div>
  );
}

export default Fornecedores;
