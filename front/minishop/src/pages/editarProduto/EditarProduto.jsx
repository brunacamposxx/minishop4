import { useEffect, useState } from 'react';

import CadastrarProduto from '../cadastrarProduto/CadastrarProduto';
import React from 'react';
import { getProdutoPorId } from '../../service/requisicoesApi/produtoApiService';
import { useParams } from 'react-router-dom';

// import { maskPrice } from './../../utils/masks';

const EditarProduto = () => {
  const { id } = useParams();

  const [valorInicial, setValorInicial] = useState(null);

  useEffect(() => {
    getProdutoPorId(id).then((data) => {
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
