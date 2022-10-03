export const unmaskTelefone = (valor) => {
  return valor.replace('-', '').replace('(', '').replace(')', '');
};
