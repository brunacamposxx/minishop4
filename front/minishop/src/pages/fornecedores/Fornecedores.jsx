import React, { useEffect, useState } from 'react';

import CardFornecedor from '../../components/cardFornecedor/CardFornecedor';
import CustomFloatingButton from '../../components/customFloatingButton/CustomFloatingButton';
import { Link } from 'react-router-dom';
import { getFornecedores } from '../../services/minishopApiServices';
import styles from './Fornecedores.module.css';
import { maskPhone } from '../../utils/masks';

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
            contato={
              fornecedor.contato != null ? fornecedor.contato : 'Não informado'
            }
            telefone={
              fornecedor.telefone != null
                ? maskPhone(fornecedor.telefone)
                : 'Não informado'
            }
            cidade={fornecedor.cidade}
            estado={fornecedor.estado}
            email={fornecedor.email}
          />
        ))}
      </div>
      <p className={styles.carregar} onClick={() => proximaPagina()}>
        Carregar mais...
      </p>
      <div>
        <Link to="/cadastrarFornecedor">
          <CustomFloatingButton />
        </Link>
      </div>
    </div>
  );
}

export default Fornecedores;
