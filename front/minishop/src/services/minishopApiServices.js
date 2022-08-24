import axios from 'axios';

const urlApi = 'http://localhost:8080/api/products/?paginaAtual=';

export function getProdutos(paginaAtual, qtdPorPagina) {
  return axios
    .get(urlApi + paginaAtual + '&qtdPorPagina=' + qtdPorPagina)
    .then((AxiosResponse) => {
      return AxiosResponse.data;
    });
}

export function getProdutoPorId(id) {
  const urlComId = 'http://localhost:8080/api/products' + '/' + id;
  return axios.get(urlComId).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

const urlApiC = 'http://localhost:8080/api/costumers/?paginaAtual=';

export function getClientes(paginaAtual, qtdPorPagina) {
  return axios
    .get(urlApiC + paginaAtual + '&qtdPorPagina=' + qtdPorPagina)
    .then((AxiosResponse) => {
      return AxiosResponse.data;
    });
}

export function getClientePorId(id) {
  const urlComIdCliente = 'http://localhost:8080/api/costumers' + '/' + id;
  return axios.get(urlComIdCliente).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

const urlApiF = 'http://localhost:8080/minishop/supplier/?paginaAtual=';

export function getFornecedores(paginaAtual, qtdPorPagina) {
  return axios
    .get(urlApiF + paginaAtual + '&qtdPorPagina=' + qtdPorPagina)
    .then((AxiosResponse) => {
      return AxiosResponse.data;
    });
}

export function getFornecedorPorId(id) {
  const urlComIdFornecedor =
    'http://localhost:8080/minishop/supplier' + '/' + id;
  return axios.get(urlComIdFornecedor).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

const urlApiP =
  'http://localhost:8080/api/OrderItems/?paginaAtual=0&qtdPorPagina=7';

export function getPedidos() {
  return axios.get(urlApiP).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

export function getPedidoPorId(id) {
  const urlComIdPedido = 'http://localhost:8080/api/OrderItems' + '/' + id;
  return axios.get(urlComIdPedido).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

export function getPedidosDeTodosClientes() {
  const url = `http://localhost:8080/api/CustomerOrder/?paginaAtual=0&qtdPorPagina=10`;
  return axios.get(url).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

export function getPedidosDeTodosClientesById(id) {
  const url = 'http://localhost:8080/api/CustomerOrder' + '/' + id;
  return axios.get(url).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}
