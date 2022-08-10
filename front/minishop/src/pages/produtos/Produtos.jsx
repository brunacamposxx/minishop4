import React from 'react';
import CardProduto from '../../components/cardProduto/CardProduto';
import styles from './Produtos.module.css';

function Produtos() {
  const lista = [
    {
      id: 0,
      nome: 'Chai Latte',
      imagem: '/organic.jpg',
      preco: 'R$18,00',
      status: 'Ativo',
    },
    {
      id: 0,
      nome: 'Aniseed Syrup',
      imagem: '/organic.jpg',
      preco: 'R$12,00',
      status: 'Inativo',
    },
    {
      id: 0,
      nome: 'Chai Latte',
      imagem: '/organic.jpg',
      preco: 'R$18,00',
      status: 'Ativo',
    },
    {
      id: 0,
      nome: 'Aniseed Syrup',
      imagem: '/organic.jpg',
      preco: 'R$24,00',
      status: 'Ativo',
    },
    {
      id: 0,
      nome: 'Chai Latte',
      imagem: '/organic.jpg',
      preco: 'R$19,00',
      status: 'Inativo',
    },
  ];

  return (
    <div className={styles.pagina}>
      <div className={styles.cabecalho}>
        <h2>Produtos</h2>
        <div className={styles.linha}></div>
      </div>
      <div className={styles.listacards}>
        {lista.map((produto) => (
          <CardProduto
            key={produto.id}
            nome={produto.nome}
            imagem={produto.imagem}
            preco={produto.preco}
            status={produto.status}
          />
        ))}
      </div>
    </div>
  );
}

export default Produtos;
