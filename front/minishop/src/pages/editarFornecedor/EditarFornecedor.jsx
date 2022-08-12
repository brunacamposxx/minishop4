import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFornecedorPorId } from '../../service/requisicoesApi/fornecedorApiService';
import CadastrarFornecedor from '../cadastrarFornecedor/CadastrarFornecedor';

const EditarFornecedor = () => {
  const { id } = useParams();

  const [valorInicial, setValorInicial] = useState(null);

  useEffect(() => {
    getFornecedorPorId(id).then((data) => {
      console.log(data);
      setValorInicial(data.objetoRetorno);
    });
  }, [id]);
  return (
    <div>
      {!!valorInicial && <CadastrarFornecedor valorInicial={valorInicial} />}
    </div>
  );
};

export default EditarFornecedor;
