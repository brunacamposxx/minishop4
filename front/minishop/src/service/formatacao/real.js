// export let formatter = new Intl.NumberFormat('pt-BR', {
//   style: 'currency',
//   currency: 'BRL',
//   minimumFractionDigits: 0,
//   maximumFractionDigits: 0,
// });

export const formatter = (valor) => {
  return valor.replaceAll(',', '.');
};
