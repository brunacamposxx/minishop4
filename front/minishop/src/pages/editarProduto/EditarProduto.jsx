import React from 'react';
import CadastrarProduto from '../cadastrarProduto/CadastrarProduto';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditarProduto = () => {
  const { id } = useParams();

  const [initialValue, setInitialValue] = useState();
  useEffect(() => {
    if (id >= 1) {
      getProdutoPorId(id).then((data) => {
        setNovoProduto(data.objetoRetorno);
      });
    }
  }, [id]);
  return <CadastrarProduto />;
};

export default EditarProduto;
