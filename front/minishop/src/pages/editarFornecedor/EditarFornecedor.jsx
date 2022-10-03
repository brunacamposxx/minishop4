import { useEffect, useState } from 'react';

import CadastrarFornecedor from '../cadastrarFornecedor/CadastrarFornecedor';
import React from 'react';
import { getFornecedorPorId } from '../../service/requisicoesApi/fornecedorApiService';
import { useParams } from 'react-router-dom';

const EditarFornecedor = () => {
  const { id } = useParams();

  const [valorInicial, setValorInicial] = useState(null);

  useEffect(() => {
    getFornecedorPorId(id).then((data) => {
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
