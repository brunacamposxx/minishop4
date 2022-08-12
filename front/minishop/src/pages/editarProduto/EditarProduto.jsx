import React from 'react';
import CadastrarProduto from '../cadastrarProduto/CadastrarProduto';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Titulo from '../../components/titulo/Titulo';
import { getProdutoPorId } from '../../service/requisicoesApi/produtoApiService';

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
      <Titulo titulo="Editar Produto" />
      {!!valorInicial && <CadastrarProduto valorInicial={valorInicial} />}
    </div>
  );
};

export default EditarProduto;
