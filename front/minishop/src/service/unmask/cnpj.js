export const unmaskCnpj = (valor) => {
  return valor.replace('-', '').replaceAll('.', '').replace('/', '');
};
