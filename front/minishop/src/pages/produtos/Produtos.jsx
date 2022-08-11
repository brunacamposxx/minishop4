import React, { useEffect, useState } from 'react';
import CardProduto from '../../components/cardProduto/CardProduto';
import styles from './Produtos.module.css';
import { getProdutos } from '../../services/minishopApiServices';

function Produtos() {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [pagina, setPagina] = useState(0);

  function proximaPagina() {
    setPagina((paginaAtual) => paginaAtual + 1);
  }

  useEffect(() => {
    getProdutos(pagina, 8).then((data) => {
      setListaProdutos((listaAtual) => [
        ...listaAtual,
        ...data.objetoRetorno.content,
      ]);
    });
  }, [pagina]);

  return (
    <div className={styles.pagina}>
      <div className={styles.cabecalho}>
        <h2>Produtos</h2>
        <div className={styles.linha}></div>
      </div>
      <div className={styles.listacards}>
        {listaProdutos.map((produto) => (
          <CardProduto
            key={produto.id}
            id={produto.id}
            productName={produto.productName}
            imagem={produto.imagem}
            unitPrice={produto.unitPrice}
            isDiscontinued={produto.isDiscontinued}
          />
        ))}
      </div>
      <p className={styles.carregar} onClick={() => proximaPagina()}>
        Carregar mais...
      </p>
    </div>
  );
}

export default Produtos;
