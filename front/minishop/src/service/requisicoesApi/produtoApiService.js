import axios from 'axios';

// eslint-disable-next-line no-undef
const url = process.env.REACT_APP_API_URL;

const urlP = `${url}/api/products/`;

const urlPaginacao = `${url}/minishop/supplier?paginaAtual=`;

export function postProduto(novoProduto) {
  const produtoPost = {
    isDiscontinued: novoProduto.isDiscontinued,
    packageName: novoProduto.packageName,
    productName: novoProduto.productName,
    supplierId: novoProduto.supplierId,
    unitPrice: novoProduto.unitPrice,
    urlList: novoProduto.urlList,
  };
  return axios.post(urlP, produtoPost).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

export function getFornecedor(paginaAtual, qtdPorPagina) {
  return axios
    .get(`${urlPaginacao}${paginaAtual}&qtdPorPagina=${qtdPorPagina}`)
    .then((AxiosResponse) => {
      return AxiosResponse.data;
    });
}

export function getProdutoPorId(id) {
  return axios.get(`${urlP}${id}`).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

export function putProdutoPorId(id, produto) {
  return axios.put(`${urlP}${id}`, produto).then((response) => {
    return response.data;
  });
}
