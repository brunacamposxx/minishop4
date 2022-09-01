import axios from 'axios';

const url = 'process.env.REACT_APP_API_URL/minishop/supplier';
export function postFornecedor(novoFornecedor) {
  const fornecedorPost = {
    cidade: novoFornecedor.cidade,
    estado: novoFornecedor.estado,
    cnpj: novoFornecedor.cnpj,
    email: novoFornecedor.email,
    contato: novoFornecedor.contato,
    nome: novoFornecedor.nome,
    telefone: novoFornecedor.telefone,
  };
  return axios.post(url, fornecedorPost).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

export function getFornecedorPorId(id) {
  return axios.get(`${url}/${id}`).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

export function putFornecedorPorId(id, fornecedor) {
  return axios.put(`${url}/${id}`, fornecedor).then((response) => {
    return response.data;
  });
}
