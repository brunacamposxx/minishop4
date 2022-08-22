import React, { useEffect, useState } from 'react';
import CardProduto from '../../components/cardProduto/CardProduto';
import styles from './Produtos.module.css';
import { getProdutos } from '../../services/minishopApiServices';
import CustomFloatingButton from '../../components/customFloatingButton/CustomFloatingButton';
import { Link } from 'react-router-dom';
import { maskPrice } from '../../utils/masks';

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

  const handleProductsName = (props) => {
    const reticencias = '...';
    if (props.length > 17) {
      return props.slice(0, 17).concat(reticencias);
    } else {
      return props;
    }
  };

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
            productName={handleProductsName(produto.productName)}
            imagem={produto.imagem}
            unitPrice={maskPrice(produto.unitPrice)}
            isDiscontinued={produto.isDiscontinued}
          />
        ))}
      </div>
      <div>
        <Link to="/cadastrarProduto">
          <CustomFloatingButton />
        </Link>
      </div>
      <p className={styles.carregar} onClick={() => proximaPagina()}>
        Carregar mais...
      </p>
    </div>
  );
}

export default Produtos;
