import gabriellaRegular from './Gabriela-Regular.ttf';

console.log(gabriellaRegular);
export const GabriellaRegular = {
  fontFamily: 'Gabriela',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Gabriela'),
    local('Gabriela-Regular'),
    url(/${gabriellaRegular}) format('ttf')
  `,
};
