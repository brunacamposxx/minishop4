import axios from 'axios';

const urlApi = 'process.env.REACT_APP_API_URL/api/products/?paginaAtual=';

export function getProdutos(paginaAtual, qtdPorPagina) {
  return axios
    .get(urlApi + paginaAtual + '&qtdPorPagina=' + qtdPorPagina)
    .then((AxiosResponse) => {
      return AxiosResponse.data;
    });
}

export function getProdutoPorId(id) {
  const urlComId = 'process.env.REACT_APP_API_URL/api/products' + '/' + id;
  return axios.get(urlComId).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

const urlApiC = 'process.env.REACT_APP_API_URL/api/costumers/?paginaAtual=';

export function getClientes(paginaAtual, qtdPorPagina) {
  return axios
    .get(urlApiC + paginaAtual + '&qtdPorPagina=' + qtdPorPagina)
    .then((AxiosResponse) => {
      return AxiosResponse.data;
    });
}

export function getClientePorId(id) {
  const urlComIdCliente = 'process.env.REACT_APP_API_URL/api/CustomerOrder' + '/' + id;
  return axios.get(urlComIdCliente).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

const urlApiF = 'process.env.REACT_APP_API_URL/minishop/supplier/?paginaAtual=';

export function getFornecedores(paginaAtual, qtdPorPagina) {
  return axios
    .get(urlApiF + paginaAtual + '&qtdPorPagina=' + qtdPorPagina)
    .then((AxiosResponse) => {
      return AxiosResponse.data;
    });
}

export function getFornecedorPorId(id) {
  const urlComIdFornecedor =
    'process.env.REACT_APP_API_URL/minishop/supplier' + '/' + id;
  return axios.get(urlComIdFornecedor).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

const urlApiP =
  'process.env.REACT_APP_API_URL/api/OrderItems/?paginaAtual=0&qtdPorPagina=7';

export function getPedidos() {
  return axios.get(urlApiP).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

export function getPedidoPorId(id) {
  const urlComIdPedido = 'process.env.REACT_APP_API_URL/api/OrderItems' + '/' + id;
  return axios.get(urlComIdPedido).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

export function getPedidosDeTodosClientes() {
  const url = `process.env.REACT_APP_API_URL/api/CustomerOrder/?paginaAtual=0&qtdPorPagina=10`;
  return axios.get(url).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

export function getPedidosDeTodosClientesById(id) {
  const url = 'process.env.REACT_APP_API_URL/api/CustomerOrder' + '/' + id;
  return axios.get(url).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

export function getClienteDetalhes(id) {
  const url = 'process.env.REACT_APP_API_URL/api/costumers' + '/' + id;
  return axios.get(url).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}
