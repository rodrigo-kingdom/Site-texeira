import type { IconName } from './icons';

// Vitrine de serviços — ver docs/servicos.md
export const servicos: { icon: IconName; title: string; text: string; msg: string }[] = [
  {
    icon: 'transfer',
    title: 'Transferência de veículo',
    text: 'Comprou ou vendeu? A gente passa para o nome certo, com a comunicação de venda inclusa.',
    msg: 'transferência de veículo',
  },
  {
    icon: 'calendar',
    title: 'Licenciamento e CRLV-e',
    text: 'Documento anual em dia e o CRLV digital direto no seu celular.',
    msg: 'licenciamento e CRLV-e',
  },
  {
    icon: 'card',
    title: 'IPVA, multas e débitos',
    text: 'Quite tudo de uma vez e parcele em até 18x no cartão.',
    msg: 'parcelamento de IPVA, multas e débitos',
  },
  {
    icon: 'plate',
    title: 'Primeiro emplacamento',
    text: 'Carro ou moto 0 km saindo da loja já regularizado.',
    msg: 'primeiro emplacamento',
  },
  {
    icon: 'files',
    title: '2ª via de documentos',
    text: 'Perdeu o CRV ou o CRLV? Emitimos a segunda via para você.',
    msg: '2ª via de documentos',
  },
  {
    icon: 'pin',
    title: 'Veículo de outro estado',
    text: 'Trouxe o veículo de fora? Regularizamos tudo no Paraná.',
    msg: 'veículo de outro estado',
  },
  {
    icon: 'bank',
    title: 'Financiamento',
    text: 'Inclusão e baixa de gravame depois da quitação do contrato.',
    msg: 'financiamento / baixa de gravame',
  },
  {
    icon: 'sliders',
    title: 'Regularização e alterações',
    text: 'Mudança de endereço, de cidade ou de características do veículo.',
    msg: 'regularização e alteração de dados do veículo',
  },
];

export const diferenciais: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'award',
    title: '+10 anos de experiência',
    text: 'Conhecemos cada etapa do Detran-PR para fazer certo da primeira vez.',
  },
  {
    icon: 'card',
    title: 'Até 18x no cartão',
    text: 'IPVA, multas e débitos parcelados para caber no seu bolso.',
  },
  {
    icon: 'home',
    title: 'Vamos até você',
    text: 'Atendimento a domicílio para quem não pode parar o dia.',
  },
  {
    icon: 'shield',
    title: 'Aqui em Fazenda Rio Grande',
    text: 'Escritório físico na Av. das Araucárias, perto de você.',
  },
];

export const passos = [
  {
    title: 'Chame no WhatsApp',
    text: 'Conte o que você precisa. Respondemos de forma rápida e sem complicação.',
  },
  {
    title: 'Receba o orçamento',
    text: 'Valor claro, com as taxas e as opções de parcelamento explicadas.',
  },
  {
    title: 'Entregue os documentos',
    text: 'Traga ao escritório ou a gente vai até você. Conferimos tudo antes de dar entrada.',
  },
  {
    title: 'Pronto, sem burocracia',
    text: 'Cuidamos do processo e avisamos assim que o documento estiver liberado.',
  },
];

export const lojistas: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'transfer',
    title: 'Transferências em volume',
    text: 'Fluxo organizado para a documentação não travar suas vendas.',
  },
  {
    icon: 'files',
    title: 'Estoque e RENAVE',
    text: 'Entrada e saída de veículos do estoque registradas corretamente.',
  },
  {
    icon: 'plate',
    title: 'Emplacamento 0 km',
    text: 'Veículo novo entregue ao cliente já regularizado.',
  },
  {
    icon: 'chat',
    title: 'Canal direto',
    text: 'Atendimento dedicado no WhatsApp e acompanhamento de cada processo.',
  },
];

export const faq = [
  {
    q: 'Quanto custa o serviço?',
    a: 'Depende do serviço e da situação do veículo. O valor é formado pelas taxas oficiais (Detran-PR e demais órgãos) mais os honorários do despachante. Chame no WhatsApp e passamos o orçamento certo para o seu caso, sem compromisso.',
  },
  {
    q: 'Posso parcelar?',
    a: 'Sim. IPVA, multas, licenciamento e demais débitos do veículo podem ser parcelados em até 18x no cartão de crédito.',
  },
  {
    q: 'Vocês atendem a domicílio?',
    a: 'Sim. Se você não puder vir até o escritório, a gente vai até você. Consulte pelo WhatsApp a disponibilidade para o seu endereço.',
  },
  {
    q: 'Quais documentos eu preciso separar?',
    a: 'Depende do serviço. Pelo WhatsApp enviamos a lista exata para o seu caso, para você não perder tempo nem viagem.',
  },
  {
    q: 'Preciso ir ao Detran?',
    a: 'Não. Cuidamos do processo junto ao Detran-PR para você. Quando o serviço exige vistoria do veículo, explicamos como e quando fazer.',
  },
  {
    q: 'Vocês atendem lojas e revendas de veículos?',
    a: 'Sim. Temos atendimento dedicado para lojistas, com transferências em volume, emplacamento de 0 km e acompanhamento de cada processo.',
  },
  {
    q: 'Quais são os canais oficiais do Despachante Teixeira?',
    a: 'Nossos canais oficiais são este site, o WhatsApp (41) 3797-8070, o Instagram @despachanteteixeira e a nossa página no Facebook. Desconfie de contatos feitos por outros números em nosso nome.',
  },
];
