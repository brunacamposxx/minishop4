import SimpleMaskMoney from './SimpleMaskMoney';
export function teste(input) {
  SimpleMaskMoney.setMask(input, {
    prefix: 'R$',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    cursor: 'end',
  });
}
