import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getClientePorId } from '../../services/minishopApiServices';
import CadastrarCliente from '../cadastrarCliente/CadastrarCliente';

const EditarCliente = () => {
  const { id } = useParams();

  const [valorInicial, setValorInicial] = useState(null);

  useEffect(() => {
    getClientePorId(id).then((data) => {
      console.log(data);
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
