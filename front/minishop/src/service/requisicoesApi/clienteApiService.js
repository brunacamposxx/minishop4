import axios from 'axios';

const url = 'http://localhost:8080/api/costumers';

export async function postCliente(novoCliente) {
  const clientePost = {
    cpf: novoCliente.cpf,
    email: novoCliente.email,
    firstName: novoCliente.firstName,
    lastName: novoCliente.lastName,
    phone: novoCliente.phone,
  };
  try {
    await axios.post(url, clientePost);
    return true;
  } catch (error) {
    alert('Não foi possível cadastrar o cliente.\nTente novamente');
    return false;
  }
}

export async function putClientePorId(id, cliente) {
  try {
    await axios.put(`${url}/${id}`, cliente);
    alert('Cliente atualizado com sucesso!');
    return true;
  } catch (error) {
    alert('Algo inesperado aconteceu, verifique os campos e tente novamente!');
    console.log(error);
    return false;
  }
}
