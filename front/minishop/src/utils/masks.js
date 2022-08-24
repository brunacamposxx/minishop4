export function mask(mask, text) {
  let index = 0;
  return mask.replace(/#/g, () => text[index++] || '');
}

export function maskPhone(phone) {
  if (!phone) {
    return;
  }
  if (phone.length <= 10) {
    return mask('(##) ####-####', phone);
  }

  return mask('(##) # ####-####', phone);
}

export function maskCpf(cpf) {
  if (!cpf) {
    return;
  }
  return mask('###.###.###-##', cpf);
}

export function maskCnpj(cnpj) {
  if (!cnpj) {
    return;
  }
  return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
}

export function numbersOnly(string) {
  return string.replace(/[^0-9]/g, '');
}

export function maskDate(dateString) {
  return new Date(dateString).toLocaleDateString('pt-br');
}

export function maskPrice(price) {
  if (!price) {
    return;
  }
  return price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
}
