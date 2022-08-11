import React, { useEffect, useState } from 'react';
import CardFornecedor from '../../components/cardFornecedor/CardFornecedor';
import styles from './Fornecedores.module.css';
import { getFornecedores } from '../../services/minishopApiServices';

function Fornecedores() {
  const [listaFornecedores, setListaFornecedores] = useState([]);
  const [pagina, setPagina] = useState(0);

  function proximaPagina() {
    setPagina((paginaAtual) => paginaAtual + 1);
  }

  useEffect(() => {
    getFornecedores(pagina, 12).then((data) => {
      setListaFornecedores((listaAtual) => [
        ...listaAtual,
        ...data.objetoRetorno.content,
      ]);
    });
  }, [pagina]);

  return (
    <div className={styles.pagina}>
      <div className={styles.cabecalho}>
        <h2>Fornecedores</h2>
        <div className={styles.linha}></div>
      </div>
      <div className={styles.listacards}>
        {listaFornecedores.map((fornecedor) => (
          <CardFornecedor
            key={fornecedor.id}
            id={fornecedor.id}
            nome={fornecedor.nome}
            contato={fornecedor.contato}
            telefone={fornecedor.telefone}
            cidade={fornecedor.cidade}
            estado={fornecedor.estado}
            email={fornecedor.email}
          />
        ))}
      </div>
      <p className={styles.carregar} onClick={() => proximaPagina()}>
        Carregar mais...
      </p>
    </div>
  );
}

export default Fornecedores;
