import axios from 'axios';

const urlApi = 'http://localhost:8080/api/products';

export function getProdutos() {
  return axios.get(urlApi).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

export function getProdutoPorId(id) {
  const urlComId = urlApi + '/' + id;
  return axios.get(urlComId).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}
