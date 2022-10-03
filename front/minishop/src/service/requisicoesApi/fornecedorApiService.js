import axios from 'axios';

// eslint-disable-next-line no-undef
const url = process.env.REACT_APP_API_URL;

const urlS = `${url}/minishop/supplier`;

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
  return axios.post(urlS, fornecedorPost).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

export function getFornecedorPorId(id) {
  return axios.get(`${urlS}/${id}`).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

export function putFornecedorPorId(id, fornecedor) {
  return axios.put(`${urlS}/${id}`, fornecedor).then((response) => {
    return response.data;
  });
}
