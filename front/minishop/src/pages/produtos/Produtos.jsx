import React, { useEffect, useState } from 'react';
import CardProduto from '../../components/cardProduto/CardProduto';
import styles from './Produtos.module.css';
import { getProdutos } from '../../services/minishopApiServices';

function Produtos() {
  const [listaProdutos, setListaProdutos] = useState([]);

  useEffect(() => {
    getProdutos().then((data) => {
      setListaProdutos(data);
    });
  }, []);

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
            productName={produto.productName}
            imagem={produto.imagem}
            unitPrice={produto.unitPrice}
            isDiscontinued={produto.isDiscontinued}
          />
        ))}
      </div>
    </div>
  );
}

export default Produtos;
