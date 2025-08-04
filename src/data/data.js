export const dentists = [
    {
      name: "Dra. Ana Silva",
      specialty: "Ortodontia",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      experience: "15 anos de experiência",
      description:
        "Especialista em ortodontia com foco em tratamentos invisíveis e estética dental.",
    },
    {
      name: "Dr. Carlos Santos",
      specialty: "Implantodontia",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      experience: "20 anos de experiência",
      description:
        "Especialista em implantes dentários e cirurgias orais complexas.",
    },
    {
      name: "Dra. Maria Oliveira",
      specialty: "Odontopediatria",
      image:
        "https://images.unsplash.com/photo-1594824780348-1143dd608e58?w=300&h=300&fit=crop&crop=face",
      experience: "12 anos de experiência",
      description:
        "Especialista no atendimento odontológico infantil com técnicas lúdicas.",
    },
  ];

export  const services = [
  {
    id: 1,
    title: "Manutenção",
    shortDescription: "Revisão periódica de tratamentos odontológicos.",
    fullDescription: "A manutenção odontológica é indicada para pacientes que utilizam aparelhos ortodônticos, próteses ou realizaram tratamentos como implantes. O objetivo é acompanhar a evolução, ajustar dispositivos e prevenir intercorrências, garantindo a eficácia do tratamento em longo prazo.",
    price: "R$ 90,00",
    duration: "30 minutos",
  },
  {
    id: 2,
    title: "Profilaxia",
    shortDescription: "Limpeza profunda para prevenção de doenças bucais.",
    fullDescription: "A profilaxia dental é uma limpeza realizada no consultório para remoção de placa bacteriana e tártaro, polimento dos dentes e aplicação de flúor. É essencial para a prevenção de cáries, gengivite e mau hálito, sendo recomendada semestralmente.",
    price: "R$ 120,00",
    duration: "45 minutos",
  },
  {
    id: 3,
    title: "Raspagem",
    shortDescription: "Remoção de tártaro subgengival e supragengival.",
    fullDescription: "A raspagem periodontal é indicada para pacientes com acúmulo severo de tártaro abaixo da gengiva. O procedimento remove depósitos que causam inflamação gengival e perda óssea, sendo fundamental no tratamento da doença periodontal.",
    price: "R$ 200,00",
    duration: "1 hora",
  },
  {
    id: 4,
    title: "Instalação Superior",
    shortDescription: "Colocação de aparelho ortodôntico na arcada superior.",
    fullDescription: "A instalação ortodôntica na arcada superior consiste na fixação dos bráquetes, fios e demais componentes necessários para correção dentária. Realizada após planejamento ortodôntico detalhado, visa alinhar e nivelar os dentes superiores.",
    price: "R$ 300,00",
    duration: "1h 30min",
  },
  {
    id: 5,
    title: "Instalação Inferior",
    shortDescription: "Colocação de aparelho ortodôntico na arcada inferior.",
    fullDescription: "Semelhante à instalação superior, essa etapa inclui a aplicação dos bráquetes e fios nos dentes inferiores, completando o processo ortodôntico e permitindo ajustes simultâneos nas duas arcadas.",
    price: "R$ 300,00",
    duration: "1h 30min",
  },
  {
    id: 6,
    title: "Restauração",
    shortDescription: "Tratamento de cáries com materiais restauradores.",
    fullDescription: "A restauração dental recupera a função e estética de dentes danificados por cáries. Utiliza-se resina composta ou outros materiais estéticos para preencher a cavidade após a remoção da lesão cariosa.",
    price: "R$ 150,00",
    duration: "40 minutos",
  },
  {
    id: 7,
    title: "Restauração com Proteção",
    shortDescription: "Restauração com base protetora para a polpa dentária.",
    fullDescription: "Esse procedimento é indicado quando a cárie está próxima da polpa do dente. Utiliza-se uma base protetora (hidróxido de cálcio ou cimento de ionômero de vidro) antes da restauração para preservar a vitalidade pulpar e evitar a necessidade de tratamento de canal.",
    price: "R$ 180,00",
    duration: "50 minutos",
  },
  {
    id: 8,
    title: "Cirurgia Oral",
    shortDescription: "Procedimentos cirúrgicos na cavidade bucal.",
    fullDescription: "Inclui extrações dentárias simples ou complexas (como sisos), remoção de cistos, biópsias e outros procedimentos realizados sob anestesia local. A cirurgia oral é indicada para tratar lesões, dentes impactados ou condições patológicas.",
    price: "A partir de R$ 300,00",
    duration: "1h a 2h",
  },
  {
    id: 9,
    title: "Endodontia",
    shortDescription: "Tratamento de canal para salvar dentes comprometidos.",
    fullDescription: "A endodontia trata a parte interna do dente (polpa), removendo tecido inflamado ou infectado. Após a limpeza e desinfecção dos canais, realiza-se o selamento com material biocompatível, evitando extrações e aliviando dores intensas.",
    price: "R$ 450,00",
    duration: "1h 30min",
  },
  {
    id: 10,
    title: "Implante",
    shortDescription: "Reposição de dentes perdidos com pinos de titânio.",
    fullDescription: "O implante dentário é uma solução fixa para perda dentária, consistindo na instalação cirúrgica de um pino de titânio no osso maxilar, que posteriormente receberá uma prótese. Restaura função mastigatória e estética com alta durabilidade.",
    price: "A partir de R$ 2.000,00",
    duration: "2h (etapa cirúrgica)",
  },
  {
    id: 11,
    title: "Prótese Dentária",
    shortDescription: "Substituição de dentes ausentes com próteses fixas ou removíveis.",
    fullDescription: "As próteses dentárias restauram a função e aparência do sorriso, podendo ser totais, parciais, fixas ou removíveis. O tipo de prótese é definido após avaliação clínica e radiográfica, considerando estética, conforto e funcionalidade.",
    price: "Sob consulta",
    duration: "Variável",
  },
  {
    id: 12,
    title: "Clareamento Dental",
    shortDescription: "Clareamento dos dentes com técnica segura e eficaz.",
    fullDescription: "Procedimento estético que visa remover pigmentações dos dentes, utilizando agentes clareadores como o peróxido de hidrogênio ou carbamida. Pode ser realizado em consultório ou em casa, sempre sob supervisão profissional.",
    price: "R$ 600,00",
    duration: "1h por sessão",
  },
];

export  const testimonials = [
    {
      name: "João Silva",
      text: "Excelente atendimento! Fiz um implante e ficou perfeito. Equipe muito profissional e cuidadosa.",
      rating: 5,
    },
    {
      name: "Maria Santos",
      text: "Melhor clínica da região! Meus filhos adoram vir aqui, a Dra. Maria é muito carinhosa com eles.",
      rating: 5,
    },
    {
      name: "Carlos Oliveira",
      text: "Fiz clareamento e ortodontia. Resultado incrível! Recomendo para todos.",
      rating: 5,
    },
  ];

export const faqData = [
    {
      question: "Quanto tempo dura uma consulta?",
      answer:
        "As consultas têm duração média de 30 a 45 minutos, dependendo do tipo de procedimento. Consultas de avaliação costumam ser mais rápidas, enquanto procedimentos específicos podem levar mais tempo.",
    },
    {
      question: "Vocês atendem convênios?",
      answer:
        "Sim, atendemos os principais convênios odontológicos. Entre em contato conosco para verificar se seu plano está credenciado e quais procedimentos estão cobertos.",
    },
    {
      question: "É possível agendar consulta de emergência?",
      answer:
        "Sim, reservamos horários para emergências odontológicas. Em caso de dor intensa ou trauma dental, entre em contato imediatamente que faremos o possível para atendê-lo no mesmo dia.",
    },
    {
      question: "Oferecem parcelamento dos tratamentos?",
      answer:
        "Sim, oferecemos diversas opções de parcelamento sem juros e também aceitamos cartões de crédito e débito. Consulte nossas condições especiais na recepção.",
    },
  ];

export  const heroImages = [
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1588776814546-1b1b2b4c7b25?w=1200&h=600&fit=crop",
  ];