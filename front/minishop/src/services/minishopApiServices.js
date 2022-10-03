import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export function getProdutos(paginaAtual, qtdPorPagina) {
  const urlApi = `${url}/api/products/?paginaAtual=`;
  return axios
    .get(`${urlApi}${paginaAtual}&qtdPorPagina=${qtdPorPagina}`)
    .then((AxiosResponse) => {
      return AxiosResponse.data;
    });
}

export function getProdutoPorId(id) {
  const urlComId = `${url}/api/products/${id}`;
  return axios.get(urlComId).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

export function getClientes(paginaAtual, qtdPorPagina) {
  const urlApiC = `${url}/api/costumers/?paginaAtual=`;
  return axios
    .get(`${urlApiC}${paginaAtual}&qtdPorPagina=${qtdPorPagina}`)
    .then((AxiosResponse) => {
      return AxiosResponse.data;
    });
}

export function getClientePorId(id) {
  const urlComIdCliente = `${url}/api/CustomerOrder/${id}`;
  return axios.get(urlComIdCliente).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

export function getFornecedores(paginaAtual, qtdPorPagina) {
  const urlApiF = `${url}/minishop/supplier/?paginaAtual=`;
  return axios
    .get(`${urlApiF}${paginaAtual}&qtdPorPagina=${qtdPorPagina}`)
    .then((AxiosResponse) => {
      return AxiosResponse.data;
    });
}

export function getFornecedorPorId(id) {
  const urlComIdFornecedor = `${url}/minishop/supplier/${id}`;
  return axios.get(urlComIdFornecedor).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

export function getPedidos() {
  const urlApiP = `${url}/api/OrderItems/?paginaAtual=0&qtdPorPagina=7`;
  return axios.get(urlApiP).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

export function getPedidoPorId(id) {
  const urlComIdPedido = `${url}/api/OrderItems/${id}`;
  return axios.get(urlComIdPedido).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

export function getPedidosDeTodosClientes() {
  const urlA = `${url}/api/CustomerOrder/?paginaAtual=0&qtdPorPagina=10`;
  return axios.get(urlA).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

export function getPedidosDeTodosClientesById(id) {
  const urlA = `${url}/api/CustomerOrder/${id}`;
  return axios.get(urlA).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

export function getClienteDetalhes(id) {
  const urlA = `${url}/api/costumers/${id}`;
  return axios.get(urlA).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}
