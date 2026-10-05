// Dados oficiais do cliente — fonte: CLAUDE.md
export const site = {
  name: 'Despachante Teixeira',
  legalName: 'Teixeira Administradora de Serviços LTDA',
  cnpj: '43.610.174/0001-89',
  url: 'https://despachanteteixeira.com.br',
  email: 'teixeiradespachantefrg@gmail.com',
  phoneDisplay: '(41) 3797-8070',
  phoneE164: '+554137978070',
  whatsapp: '554137978070',
  address: {
    street: 'Av. das Araucárias, 264',
    district: 'Eucaliptos',
    city: 'Fazenda Rio Grande',
    state: 'PR',
    zip: '83820-071',
  },
  geo: { lat: -25.6445001, lng: -49.3097545 },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Despachante+Teixeira+Av.+das+Arauc%C3%A1rias+264+Fazenda+Rio+Grande+PR',
  instagram: 'https://www.instagram.com/despachanteteixeira/',
  instagramHandle: '@despachanteteixeira',
  facebook: 'https://www.facebook.com/p/Despachante-Teixeira-100077034463156/',
  // TODO: confirmar horário de atendimento com o cliente antes de exibir
  hours: null as string | null,
};

/** Link do WhatsApp com mensagem pré-preenchida, para medir a origem do contato. */
export function waLink(message = 'Olá! Vim pelo site e gostaria de um atendimento.') {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
