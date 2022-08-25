import axios from 'axios';

const urlPaginacao = 'http://localhost:8080/minishop/supplier?paginaAtual=';

const url = 'http://localhost:8080/api/products/';

export function postProduto(novoProduto) {
  const produtoPost = {
    isDiscontinued: novoProduto.isDiscontinued,
    packageName: novoProduto.packageName,
    productName: novoProduto.productName,
    supplierId: novoProduto.supplierId,
    unitPrice: novoProduto.unitPrice,
    urlList: novoProduto.urlList,
  };
  return axios.post(url, produtoPost).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

export function getFornecedor(paginaAtual, qtdPorPagina) {
  return axios
    .get(urlPaginacao + paginaAtual + '&qtdPorPagina=' + qtdPorPagina)
    .then((AxiosResponse) => {
      return AxiosResponse.data;
    });
}

export function getProdutoPorId(id) {
  return axios.get(`${url}${id}`).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

export function putProdutoPorId(id, produto) {
  return axios.put(`${url}${id}`, produto).then((response) => {
    return response.data;
  });
}
