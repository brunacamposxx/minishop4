import axios from 'axios';
const url = 'http://localhost:8080/api/costumers';

export function postCliente(novoCliente) {
  const clientePost = {
    cpf: novoCliente.cpf,
    email: novoCliente.email,
    firstName: novoCliente.firstName,
    lastName: novoCliente.lastName,
    phone: novoCliente.phone,
  };
  return axios.post(url, clientePost).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}
