import React from 'react';
import CadastrarProduto from '../cadastrarProduto/CadastrarProduto';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProdutoPorId } from '../../service/requisicoesApi/produtoApiService';
// import { maskPrice } from './../../utils/masks';

const EditarProduto = () => {
  const { id } = useParams();

  const [valorInicial, setValorInicial] = useState(null);

  useEffect(() => {
    getProdutoPorId(id).then((data) => {
      console.log(data);
      setValorInicial(data.objetoRetorno);
    });
  }, [id]);
  return (
    <div>
      {!!valorInicial && <CadastrarProduto valorInicial={valorInicial} />}
    </div>
  );
};

export default EditarProduto;
