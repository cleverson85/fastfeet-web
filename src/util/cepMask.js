export default function CepMask(value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d{3})/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1');
}
