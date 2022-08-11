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
