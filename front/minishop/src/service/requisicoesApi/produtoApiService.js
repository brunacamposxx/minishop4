import axios from 'axios';
const url = 'http://localhost:8080/api/products';

export function postFornecedor(novoProduto) {
  const produtoPost = {
    isDiscontinued: novoProduto.isDiscontinued,
    packageName: novoProduto.cnpj,
    email: novoProduto.packageName,
    productName: novoProduto.productName,
    supplierId: novoProduto.supplierId,
    unitPrice: novoProduto.unitPrice,
  };
  return axios.post(url, produtoPost).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}
