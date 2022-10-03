import axios from 'axios';

// eslint-disable-next-line no-undef
const url = process.env.REACT_APP_API_URL;

const urlC = `${url}/api/costumers`;

export async function postCliente(novoCliente) {
  const clientePost = {
    cpf: novoCliente.cpf,
    email: novoCliente.email,
    firstName: novoCliente.firstName,
    lastName: novoCliente.lastName,
    phone: novoCliente.phone,
  };
  try {
    await axios.post(urlC, clientePost);
    return true;
  } catch (error) {
    alert('Não foi possível cadastrar o cliente.\nTente novamente');
    return false;
  }
}

export async function putClientePorId(id, cliente) {
  try {
    await axios.put(`${urlC}/${id}`, cliente);
    return true;
  } catch (error) {
    alert('Algo inesperado aconteceu, verifique os campos e tente novamente!');
    console.log(error);
    return false;
  }
}
