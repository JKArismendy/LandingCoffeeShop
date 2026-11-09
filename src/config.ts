export const SITE = {
  name: 'Cafetonato',
  whatsapp: '573002638932',
  whatsappLabel: '300 263 8932',
  email: 'cafetonatoacademy2023@gmail.com',
  instagram: '@cafetonato_oficial',
  address: 'Cra. 24 No. 16-64, segundo piso, Barrio Jardín',
};

export const whatsappLink = (text = 'Hola, quiero información sobre la Academia Cafetonato') =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
