import axios from 'axios';
const url = 'http://localhost:8080/minishop/supplier';
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
