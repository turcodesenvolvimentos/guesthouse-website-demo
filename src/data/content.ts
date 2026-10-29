export const WHATSAPP_NUMBER = '5547999999999'

export const brand = {
  name: 'Villa do Farol',
  tagline: 'São Francisco do Sul · Santa Catarina',
  phone: '(47) 99999-9999',
  email: 'reservas@villadofarol.com.br',
  instagram: '@villadofarol',
}

export const accommodations = [
  {
    id: 'suite-farol',
    name: 'Suíte Farol',
    subtitle: 'Vista baía · até 2 hóspedes',
    description:
      'Suíte ampla com varanda privativa, cama king e banheira freestanding. Pensada para casais que buscam silêncio e horizonte.',
    guests: 2,
    size: '42 m²',
    priceFrom: 890,
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80',
    amenities: ['Varanda privativa', 'Banheira', 'Café da manhã'],
  },
  {
    id: 'suite-areia',
    name: 'Suíte Areia',
    subtitle: 'Jardim tropical · até 3 hóspedes',
    description:
      'Ambiente claro com saída para o jardim. Sofá-cama opcional, ideal para quem viaja com criança ou quer espaço extra.',
    guests: 3,
    size: '38 m²',
    priceFrom: 720,
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    amenities: ['Jardim', 'Ar-condicionado', 'Frigobar'],
  },
  {
    id: 'bangalo-mar',
    name: 'Bangalô Mar',
    subtitle: 'Independente · até 4 hóspedes',
    description:
      'Bangalô exclusivo com living, cozinha compacta e deck próprio. O refúgio perfeito para famílias ou longas estadias.',
    guests: 4,
    size: '58 m²',
    priceFrom: 1180,
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    amenities: ['Deck privativo', 'Cozinha', '2 ambientes'],
  },
]

export const experiences = [
  {
    title: 'Baía da Babitonga',
    text: 'Navegue pela maior baía de Santa Catarina, entre ilhas, manguezais e o horizonte do Atlântico.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Centro Histórico',
    text: 'Casarões coloniais, museus e o charme da cidade mais antiga de Santa Catarina a poucos minutos.',
    image:
      'https://images.unsplash.com/photo-1555881403-646f2c3d7c4e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Praias selvagens',
    text: 'Praia Grande, Prainha e enseadas discretas — areia clara, água calma e ritmo de veraneio.',
    image:
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Gastronomia local',
    text: 'Frutos do mar frescos, bares de praia e restaurantes com vista para a baía — indicação exclusiva da casa.',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80',
  },
]

export const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Piscina com vista para o jardim tropical',
  },
  {
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    alt: 'Fachada da pousada ao entardecer',
  },
  {
    src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Área de convivência com decoração boutique',
  },
  {
    src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80',
    alt: 'Café da manhã servido na varanda',
  },
  {
    src: 'https://images.unsplash.com/photo-1501117716987-c8c394bb29df?auto=format&fit=crop&w=1200&q=80',
    alt: 'Detalhe do quarto com luz natural',
  },
  {
    src: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Vista da baía ao amanhecer',
  },
]

export const amenities = [
  { icon: 'pool', label: 'Piscina aquecida' },
  { icon: 'breakfast', label: 'Café da manhã artesanal' },
  { icon: 'wifi', label: 'Wi-Fi de alta velocidade' },
  { icon: 'parking', label: 'Estacionamento privativo' },
  { icon: 'spa', label: 'Massagens sob agendamento' },
  { icon: 'bike', label: 'Bicicletas para hóspedes' },
  { icon: 'concierge', label: 'Concierge local' },
  { icon: 'pets', label: 'Pet friendly (consulta)' },
]

export const reviews = [
  {
    name: 'Mariana & Felipe',
    origin: 'Curitiba, PR',
    text: 'Ambiente impecável, silêncio e café da manhã memorável. Voltamos no mesmo ano.',
    rating: 5,
  },
  {
    name: 'Ana Beatriz Costa',
    origin: 'São Paulo, SP',
    text: 'A Suíte Farol tem a vista mais linda que já dormi. Atendimento discreto e sofisticado.',
    rating: 5,
  },
  {
    name: 'Ricardo Mendes',
    origin: 'Florianópolis, SC',
    text: 'Perfeita para um fim de semana a dois. Dicas locais excelentes — conhecemos praias que não sabíamos existir.',
    rating: 5,
  },
]

export const faqs = [
  {
    q: 'Qual o horário de check-in e check-out?',
    a: 'Check-in a partir das 14h e check-out até as 12h. Early check-in e late check-out sujeitos à disponibilidade.',
  },
  {
    q: 'O café da manhã está incluso?',
    a: 'Sim. Servimos café da manhã artesanal com pães frescos, frutas da estação, sucos e opções quentes, das 7h30 às 10h30.',
  },
  {
    q: 'Aceitam pets?',
    a: 'Sim, em acomodações selecionadas, mediante aviso prévio e taxa simbólica. Consulte-nos no momento da reserva.',
  },
  {
    q: 'Como funciona a reserva?',
    a: 'Escolha o período e a acomodação no formulário. Enviamos a solicitação pelo WhatsApp e confirmamos disponibilidade e valores em minutos.',
  },
  {
    q: 'Fica perto da praia e do centro?',
    a: 'Estamos em São Francisco do Sul, a poucos minutos das principais praias e do centro histórico. Enviamos rota detalhada após a confirmação.',
  },
  {
    q: 'Há estacionamento?',
    a: 'Sim, vagas privativas gratuitas para hóspedes, dentro da propriedade.',
  },
]
