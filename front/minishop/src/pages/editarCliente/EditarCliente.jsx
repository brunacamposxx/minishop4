import { useEffect, useState } from 'react';

import CadastrarCliente from '../cadastrarCliente/CadastrarCliente';
import React from 'react';
import { getClientePorId } from '../../services/minishopApiServices';
import { useParams } from 'react-router-dom';

const EditarCliente = () => {
  const { id } = useParams();

  const [valorInicial, setValorInicial] = useState(null);

  useEffect(() => {
    getClientePorId(id).then((data) => {
      setValorInicial(data.objetoRetorno);
    });
  }, [id]);
  return (
    <div>
      {!!valorInicial && <CadastrarCliente valorInicial={valorInicial} />}
    </div>
  );
};

export default EditarCliente;
