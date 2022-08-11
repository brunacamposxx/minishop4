export const unmaskCPF = (valor) => {
  return valor.replaceAll('.', '').replace('-', '');
};
