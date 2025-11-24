export interface CitizenshipLesson {
  id: number;
  level: 1 | 2 | 3;
  title: string;
  titlePronunciation: string;
  objective: string;
  objectivePronunciation?: string;
  content: {
    portuguese: string;
    english: string;
    pronunciation: string;
  }[];
  quiz: {
    question: string;
    questionPronunciation: string;
    options: {
      portuguese: string;
      english: string;
      pronunciation: string;
      correct: boolean;
    }[];
  };
  summary: string;
  summaryPronunciation?: string;
}

export const citizenshipLessons: CitizenshipLesson[] = [
  {
    id: 1,
    level: 1,
    title: "Os Três Poderes do Governo / The Three Branches of Government",
    titlePronunciation: "Dhi Thrí Brênchis âv Guvérnmênt",
    objective: "Entender os três poderes e suas funções / Understand the three branches and their functions",
    content: [
      {
        portuguese: "Legislativo: cria as leis",
        english: "Legislative: makes laws",
        pronunciation: "Lédjislâtiv"
      },
      {
        portuguese: "Executivo: aplica as leis",
        english: "Executive: enforces laws",
        pronunciation: "Igzékutiv"
      },
      {
        portuguese: "Judiciário: interpreta as leis",
        english: "Judicial: interprets laws",
        pronunciation: "Djúdishal"
      }
    ],
    quiz: {
      question: "Qual poder é responsável por criar as leis? / Which branch makes the laws?",
      questionPronunciation: "Uíchi brênchi méiks dhi lóz?",
      options: [
        {
          portuguese: "Executivo",
          english: "Executive",
          pronunciation: "Igzékutiv",
          correct: false
        },
        {
          portuguese: "Legislativo",
          english: "Legislative",
          pronunciation: "Lédjislâtiv",
          correct: true
        },
        {
          portuguese: "Judiciário",
          english: "Judicial",
          pronunciation: "Djúdishal",
          correct: false
        }
      ]
    },
    summary: "Acrônimo para memorizar: L-E-J → Legislativo, Executivo, Judiciário / L-E-J → Legislative, Executive, Judicial",
    summaryPronunciation: "Lédjislâtiv, Igzékutiv, Djúdishal"
  },
  {
    id: 2,
    level: 1,
    title: "Direitos do Cidadão / Citizens' Rights",
    titlePronunciation: "Sítizens Raíts",
    objective: "Conhecer os direitos básicos de um cidadão / Know the basic rights of a citizen",
    content: [
      {
        portuguese: "Direito ao voto",
        english: "Right to vote",
        pronunciation: "Ráit tu vóut"
      },
      {
        portuguese: "Direito à educação",
        english: "Right to education",
        pronunciation: "Ráit tu édjukeishân"
      },
      {
        portuguese: "Liberdade de expressão",
        english: "Freedom of speech",
        pronunciation: "Frídum âv spíitch"
      },
      {
        portuguese: "Direito à segurança",
        english: "Right to safety",
        pronunciation: "Ráit tu séifti"
      }
    ],
    quiz: {
      question: "Verdadeiro ou falso: Todo cidadão tem direito ao voto / True or False: Every citizen has the right to vote",
      questionPronunciation: "Tru or fóls: Évri sítizen rás dhi ráit tu vóut",
      options: [
        {
          portuguese: "Verdadeiro",
          english: "True",
          pronunciation: "Tru",
          correct: true
        },
        {
          portuguese: "Falso",
          english: "False",
          pronunciation: "Fóls",
          correct: false
        }
      ]
    },
    summary: "Todos os cidadãos têm direitos fundamentais protegidos pela Constituição / All citizens have fundamental rights protected by the Constitution"
  },
  {
    id: 3,
    level: 1,
    title: "Deveres do Cidadão / Citizens' Duties",
    titlePronunciation: "Sítizens Djútis",
    objective: "Aprender as responsabilidades de um cidadão americano / Learn the responsibilities of an American citizen",
    content: [
      {
        portuguese: "Pagar impostos",
        english: "Pay taxes",
        pronunciation: "Pêi téixiz"
      },
      {
        portuguese: "Obedecer às leis",
        english: "Obey the laws",
        pronunciation: "Óbêi dhi lóz"
      },
      {
        portuguese: "Servir em júri quando chamado",
        english: "Serve on a jury when called",
        pronunciation: "Sérv ón â djúri uén kóld"
      },
      {
        portuguese: "Defender o país se necessário",
        english: "Defend the country if needed",
        pronunciation: "Difénd dhi kântri if níded"
      }
    ],
    quiz: {
      question: "Qual é um dever de todos os cidadãos? / What is one duty of all citizens?",
      questionPronunciation: "Uát iz uân djúti óv ól sítizens?",
      options: [
        {
          portuguese: "Votar nas eleições",
          english: "Vote in elections",
          pronunciation: "Vóut in ilékshons",
          correct: false
        },
        {
          portuguese: "Pagar impostos",
          english: "Pay taxes",
          pronunciation: "Pêi téixiz",
          correct: true
        },
        {
          portuguese: "Ir à igreja",
          english: "Go to church",
          pronunciation: "Gôu tu tchôrch",
          correct: false
        }
      ]
    },
    summary: "Cidadãos têm deveres que mantêm o país funcionando / Citizens have duties that keep the country running"
  },
  {
    id: 4,
    level: 1,
    title: "Sistema de Votação / Voting System",
    titlePronunciation: "Vóuting Sístem",
    objective: "Entender como funciona o processo eleitoral / Understand how the electoral process works",
    content: [
      {
        portuguese: "Eleições presidenciais a cada 4 anos",
        english: "Presidential elections every 4 years",
        pronunciation: "Prézidénshâl ilékshons évri fór yírz"
      },
      {
        portuguese: "Votação é um direito e responsabilidade",
        english: "Voting is a right and responsibility",
        pronunciation: "Vóuting iz â ráit ând rispónsibíliti"
      },
      {
        portuguese: "Voto secreto e confidencial",
        english: "Secret and confidential vote",
        pronunciation: "Síkret ând kônfidénshâl vóut"
      },
      {
        portuguese: "Idade mínima para votar: 18 anos",
        english: "Minimum voting age: 18 years",
        pronunciation: "Mínimum vóuting êidj: êitín yírz"
      }
    ],
    quiz: {
      question: "Com que idade você pode votar nos EUA? / At what age can you vote in the U.S.?",
      questionPronunciation: "Ât uát êidj kén yu vóut in dhi Iú.És.?",
      options: [
        {
          portuguese: "16 anos",
          english: "16 years old",
          pronunciation: "Síkstín yírz ôuld",
          correct: false
        },
        {
          portuguese: "18 anos",
          english: "18 years old",
          pronunciation: "Êitín yírz ôuld",
          correct: true
        },
        {
          portuguese: "21 anos",
          english: "21 years old",
          pronunciation: "Tuénti-uân yírz ôuld",
          correct: false
        }
      ]
    },
    summary: "Votar é fundamental para a democracia americana / Voting is fundamental to American democracy"
  },
  {
    id: 5,
    level: 1,
    title: "Primeira Emenda / First Amendment",
    titlePronunciation: "Fôrst Âméndment",
    objective: "Conhecer as cinco liberdades da Primeira Emenda / Know the five freedoms of the First Amendment",
    content: [
      {
        portuguese: "Liberdade de religião",
        english: "Freedom of religion",
        pronunciation: "Frídum óv rilídjon"
      },
      {
        portuguese: "Liberdade de expressão",
        english: "Freedom of speech",
        pronunciation: "Frídum óv spích"
      },
      {
        portuguese: "Liberdade de imprensa",
        english: "Freedom of the press",
        pronunciation: "Frídum óv dhi prés"
      },
      {
        portuguese: "Liberdade de reunião",
        english: "Freedom of assembly",
        pronunciation: "Frídum óv âsémbli"
      },
      {
        portuguese: "Direito de petição ao governo",
        english: "Right to petition the government",
        pronunciation: "Ráit tu pêtíshon dhi gávérnment"
      }
    ],
    quiz: {
      question: "Qual é uma liberdade garantida pela Primeira Emenda? / What is one freedom guaranteed by the First Amendment?",
      questionPronunciation: "Uát iz uân frídum gârântíd bai dhi Fôrst Âméndment?",
      options: [
        {
          portuguese: "Direito de portar armas",
          english: "Right to bear arms",
          pronunciation: "Ráit tu bér ármz",
          correct: false
        },
        {
          portuguese: "Liberdade de expressão",
          english: "Freedom of speech",
          pronunciation: "Frídum óv spích",
          correct: true
        },
        {
          portuguese: "Direito a um advogado",
          english: "Right to a lawyer",
          pronunciation: "Ráit tu â lóier",
          correct: false
        }
      ]
    },
    summary: "A Primeira Emenda protege liberdades fundamentais / The First Amendment protects fundamental freedoms"
  },
  {
    id: 6,
    level: 1,
    title: "Governo Federal vs Estado / Federal vs State Government",
    titlePronunciation: "Fédêrâl vérsus Stêit Gávérnment",
    objective: "Diferenciar poderes federais e estaduais / Differentiate federal and state powers",
    content: [
      {
        portuguese: "Governo Federal: moeda, defesa, relações exteriores",
        english: "Federal Government: currency, defense, foreign relations",
        pronunciation: "Fédêrâl Gávérnment: kârênsi, diféns, fórein rilêishons"
      },
      {
        portuguese: "Governo Estadual: educação, polícia local, licenças",
        english: "State Government: education, local police, licenses",
        pronunciation: "Stêit Gávérnment: édjukêishon, lóukâl pôlís, láisênsiz"
      },
      {
        portuguese: "Poderes compartilhados: impostos, leis",
        english: "Shared powers: taxes, laws",
        pronunciation: "Shérd páuêrs: téixiz, lóz"
      }
    ],
    quiz: {
      question: "Quem é responsável pela educação pública? / Who is responsible for public education?",
      questionPronunciation: "Rú iz rispónsibôl fór pâblik édjukêishon?",
      options: [
        {
          portuguese: "Governo Federal",
          english: "Federal Government",
          pronunciation: "Fédêrâl Gávérnment",
          correct: false
        },
        {
          portuguese: "Governo Estadual",
          english: "State Government",
          pronunciation: "Stêit Gávérnment",
          correct: true
        },
        {
          portuguese: "Governo Municipal",
          english: "City Government",
          pronunciation: "Síti Gávérnment",
          correct: false
        }
      ]
    },
    summary: "Federal e estadual têm responsabilidades diferentes / Federal and state have different responsibilities"
  },
  {
    id: 7,
    level: 1,
    title: "A Constituição / The Constitution",
    titlePronunciation: "Dhi Kónstityúshon",
    objective: "Entender o documento mais importante dos EUA / Understand the most important document of the U.S.",
    content: [
      {
        portuguese: "Lei suprema do país",
        english: "Supreme law of the land",
        pronunciation: "Suprím ló óv dhi lénd"
      },
      {
        portuguese: "Estabelece o governo e direitos",
        english: "Establishes government and rights",
        pronunciation: "Istéblishiz gávérnment ând ráits"
      },
      {
        portuguese: "Escrita em 1787",
        english: "Written in 1787",
        pronunciation: "Ríten in séventin êiti-séven"
      },
      {
        portuguese: "Pode ser emendada",
        english: "Can be amended",
        pronunciation: "Kén bí âménded"
      }
    ],
    quiz: {
      question: "O que é a Constituição? / What is the Constitution?",
      questionPronunciation: "Uát iz dhi Kónstityúshon?",
      options: [
        {
          portuguese: "Um livro de história",
          english: "A history book",
          pronunciation: "Â rístori búk",
          correct: false
        },
        {
          portuguese: "A lei suprema do país",
          english: "The supreme law of the land",
          pronunciation: "Dhi suprím ló óv dhi lénd",
          correct: true
        },
        {
          portuguese: "Uma declaração de guerra",
          english: "A declaration of war",
          pronunciation: "Â dêklarêishon óv uór",
          correct: false
        }
      ]
    },
    summary: "A Constituição é a base do governo americano / The Constitution is the foundation of American government"
  },
  {
    id: 8,
    level: 1,
    title: "O Presidente / The President",
    titlePronunciation: "Dhi Prézident",
    objective: "Aprender sobre o papel do Presidente / Learn about the President's role",
    content: [
      {
        portuguese: "Líder do Poder Executivo",
        english: "Leader of the Executive Branch",
        pronunciation: "Líder óv dhi Igzékiutiv Brénch"
      },
      {
        portuguese: "Comandante-chefe das Forças Armadas",
        english: "Commander in Chief of the Armed Forces",
        pronunciation: "Kômánder in Chíf óv dhi Ármd Fórsis"
      },
      {
        portuguese: "Mandato de 4 anos",
        english: "4-year term",
        pronunciation: "Fór-yír térm"
      },
      {
        portuguese: "Máximo de 2 mandatos",
        english: "Maximum of 2 terms",
        pronunciation: "Méksimum óv tú términz"
      }
    ],
    quiz: {
      question: "Por quantos anos o Presidente é eleito? / For how many years is the President elected?",
      questionPronunciation: "Fór ráu méni yírz iz dhi Prézident iléktid?",
      options: [
        {
          portuguese: "2 anos",
          english: "2 years",
          pronunciation: "Tú yírz",
          correct: false
        },
        {
          portuguese: "4 anos",
          english: "4 years",
          pronunciation: "Fór yírz",
          correct: true
        },
        {
          portuguese: "6 anos",
          english: "6 years",
          pronunciation: "Síks yírz",
          correct: false
        }
      ]
    },
    summary: "O Presidente lidera o país e as Forças Armadas / The President leads the country and the Armed Forces"
  },
  {
    id: 9,
    level: 1,
    title: "O Congresso / The Congress",
    titlePronunciation: "Dhi Kóngres",
    objective: "Conhecer as duas câmaras do Congresso / Know the two chambers of Congress",
    content: [
      {
        portuguese: "Senado: 100 senadores (2 por estado)",
        english: "Senate: 100 senators (2 per state)",
        pronunciation: "Sénit: uân rândred sénêtorz (tú pér stêit)"
      },
      {
        portuguese: "Câmara dos Representantes: 435 membros",
        english: "House of Representatives: 435 members",
        pronunciation: "Ráus óv Rêprizéntetivz: fór thôrti-fáiv mémbêrz"
      },
      {
        portuguese: "Senadores: mandato de 6 anos",
        english: "Senators: 6-year term",
        pronunciation: "Sénêtorz: síks-yír térm"
      },
      {
        portuguese: "Representantes: mandato de 2 anos",
        english: "Representatives: 2-year term",
        pronunciation: "Rêprizéntetivz: tú-yír térm"
      }
    ],
    quiz: {
      question: "Quantos senadores os EUA têm? / How many senators does the U.S. have?",
      questionPronunciation: "Ráu méni sénêtorz dâz dhi Iú.És. ráv?",
      options: [
        {
          portuguese: "50",
          english: "50",
          pronunciation: "Fífti",
          correct: false
        },
        {
          portuguese: "100",
          english: "100",
          pronunciation: "Uân rândred",
          correct: true
        },
        {
          portuguese: "435",
          english: "435",
          pronunciation: "Fór thôrti-fáiv",
          correct: false
        }
      ]
    },
    summary: "O Congresso tem duas câmaras: Senado e Câmara / Congress has two chambers: Senate and House"
  },
  {
    id: 10,
    level: 1,
    title: "Símbolos Americanos / American Symbols",
    titlePronunciation: "Âmérikân Símbôlz",
    objective: "Reconhecer símbolos nacionais importantes / Recognize important national symbols",
    content: [
      {
        portuguese: "Bandeira: 50 estrelas (estados), 13 listras (colônias)",
        english: "Flag: 50 stars (states), 13 stripes (colonies)",
        pronunciation: "Flég: fífti stárz (stêits), thôrtín stráips (kólonis)"
      },
      {
        portuguese: "Estátua da Liberdade: símbolo de liberdade",
        english: "Statue of Liberty: symbol of freedom",
        pronunciation: "Stétchu óv Líbêrti: símbôl óv frídum"
      },
      {
        portuguese: "Águia americana: força e liberdade",
        english: "Bald Eagle: strength and freedom",
        pronunciation: "Bóld Ígôl: stréngth ând frídum"
      },
      {
        portuguese: "Hino Nacional: The Star-Spangled Banner",
        english: "National Anthem: The Star-Spangled Banner",
        pronunciation: "Náshônâl Énthêm: Dhi Stár-Spéngôld Bénêr"
      }
    ],
    quiz: {
      question: "Quantas estrelas tem a bandeira americana? / How many stars are on the American flag?",
      questionPronunciation: "Ráu méni stárz ár ón dhi Âmérikân flég?",
      options: [
        {
          portuguese: "13",
          english: "13",
          pronunciation: "Thôrtín",
          correct: false
        },
        {
          portuguese: "50",
          english: "50",
          pronunciation: "Fífti",
          correct: true
        },
        {
          portuguese: "100",
          english: "100",
          pronunciation: "Uân rândred",
          correct: false
        }
      ]
    },
    summary: "Símbolos nacionais representam valores americanos / National symbols represent American values"
  },
  // Level 2 - Interview Procedures
  {
    id: 3,
    level: 2,
    title: "Chegando para a Entrevista / Arriving for the Interview",
    titlePronunciation: "Arráiving fór dhi Ínterviú",
    objective: "Saber como se preparar e o que esperar no dia da entrevista / Know how to prepare and what to expect on interview day",
    content: [
      {
        portuguese: "Chegar com antecedência",
        english: "Arrive early",
        pronunciation: "Arráiv ârli"
      },
      {
        portuguese: "Trazer documentos importantes",
        english: "Bring important documents",
        pronunciation: "Bríng ímpórtant dâkiuments"
      },
      {
        portuguese: "Cumprimentar com educação",
        english: "Greet politely",
        pronunciation: "Grít pólaitli"
      }
    ],
    quiz: {
      question: "O que você deve fazer ao chegar? / What should you do when you arrive?",
      questionPronunciation: "Uát shúd yu dú uén yu arráiv?",
      options: [
        {
          portuguese: "Chegar atrasado",
          english: "Arrive late",
          pronunciation: "Arráiv léit",
          correct: false
        },
        {
          portuguese: "Trazer documentos",
          english: "Bring documents",
          pronunciation: "Bríng dâkiuments",
          correct: true
        },
        {
          portuguese: "Ignorar o oficial",
          english: "Ignore the officer",
          pronunciation: "Ígnór dhi ófísêr",
          correct: false
        }
      ]
    },
    summary: "Chegar preparado = menos estresse / Being prepared = less stress",
    summaryPronunciation: "Bíing pripérd = lés stress"
  },
  {
    id: 4,
    level: 2,
    title: "Primeiras Perguntas / Initial Questions",
    titlePronunciation: "Íníshal Kwéstchans",
    objective: "Conhecer perguntas básicas feitas no início da entrevista / Know basic questions asked at the start",
    content: [
      {
        portuguese: "Nome completo",
        english: "Full name",
        pronunciation: "Fúl néim"
      },
      {
        portuguese: "Endereço atual",
        english: "Current address",
        pronunciation: "Kárent âdrés"
      },
      {
        portuguese: "Data de nascimento",
        english: "Date of birth",
        pronunciation: "Dêit âv bórth"
      }
    ],
    quiz: {
      question: "Qual pergunta é feita primeiro? / What is usually asked first?",
      questionPronunciation: "Uát iz yúzhuâli áskt fôrst?",
      options: [
        {
          portuguese: "Nome completo",
          english: "Full name",
          pronunciation: "Fúl néim",
          correct: true
        },
        {
          portuguese: "Ocupação",
          english: "Occupation",
          pronunciation: "Ákupéishân",
          correct: false
        },
        {
          portuguese: "Nacionalidade",
          english: "Nationality",
          pronunciation: "Náshonalité",
          correct: false
        }
      ]
    },
    summary: "Responda com clareza e calma / Answer clearly and calmly",
    summaryPronunciation: "Ánsêr clíerli ând câmli"
  },
  {
    id: 5,
    level: 2,
    title: "Perguntas sobre Viagens / Travel Questions",
    titlePronunciation: "Trável Kwéstchans",
    objective: "Saber como responder sobre viagens e tempo fora dos EUA / Know how to answer about trips and time abroad",
    content: [
      {
        portuguese: "Contar viagens fora do país",
        english: "Report trips abroad",
        pronunciation: "Ríport tríps âbród"
      },
      {
        portuguese: "Explicar ausências longas",
        english: "Explain long absences",
        pronunciation: "Ikspléin lóng ábsénsis"
      }
    ],
    quiz: {
      question: "O que é considerado uma ausência longa? / What is considered a long absence?",
      questionPronunciation: "Uát iz kônsíderd â lóng ábsêns?",
      options: [
        {
          portuguese: "Menos de 6 meses",
          english: "Less than 6 months",
          pronunciation: "Lés dhén siks mónths",
          correct: false
        },
        {
          portuguese: "Mais de 6 meses",
          english: "More than 6 months",
          pronunciation: "Mór dhén siks mónths",
          correct: true
        },
        {
          portuguese: "Uma viagem de final de semana",
          english: "A weekend trip",
          pronunciation: "Â uíkênd tríp",
          correct: false
        }
      ]
    },
    summary: "Documente todas as viagens longas / Document all long trips"
  },
  {
    id: 6,
    level: 2,
    title: "Trabalho e Educação / Employment and Education",
    titlePronunciation: "Implóiment ând Édjukeishân",
    objective: "Responder perguntas sobre empregos, estudos e experiência / Answer questions about jobs, education, and experience",
    content: [
      {
        portuguese: "Nome do empregador atual",
        english: "Name of current employer",
        pronunciation: "Nêim âv kárent implóier"
      },
      {
        portuguese: "Escolaridade",
        english: "Education level",
        pronunciation: "Édjukeishân lével"
      },
      {
        portuguese: "Experiência profissional anterior",
        english: "Previous work experience",
        pronunciation: "Prívíus wérk ikspíriens"
      }
    ],
    quiz: {
      question: "Como dizer 'empregador atual' em inglês? / How do you say 'current employer' in English?",
      questionPronunciation: "Ráu dú yu sêi kárent implóier in ínglish?",
      options: [
        {
          portuguese: "Chefe presente",
          english: "Present boss",
          pronunciation: "Prézent bóss",
          correct: false
        },
        {
          portuguese: "Empregador atual",
          english: "Current employer",
          pronunciation: "Kárent implóier",
          correct: true
        },
        {
          portuguese: "Título do trabalho",
          english: "Job title",
          pronunciation: "Djób táitl",
          correct: false
        }
      ]
    },
    summary: "Tenha informações sobre seu emprego atual e histórico / Have information about your current job and history ready"
  },
  {
    id: 7,
    level: 2,
    title: "Família e Estado Civil / Family and Marital Status",
    titlePronunciation: "Fémili ând Mèritâl Státus",
    objective: "Responder perguntas sobre estado civil e membros da família / Answer questions about marital status and family members",
    content: [
      {
        portuguese: "Cônjuge",
        english: "Spouse",
        pronunciation: "Spáus"
      },
      {
        portuguese: "Filhos",
        english: "Children",
        pronunciation: "Tchíldren"
      },
      {
        portuguese: "Casado(a), divorciado(a), viúvo(a)",
        english: "Married, divorced, widow/widower",
        pronunciation: "Mérid, divórst, uído/uídôuer"
      }
    ],
    quiz: {
      question: "Quem é viúvo? / Who is a widow?",
      questionPronunciation: "Rú iz â uído?",
      options: [
        {
          portuguese: "Uma pessoa divorciada",
          english: "A divorced person",
          pronunciation: "Â divórst pêrsan",
          correct: false
        },
        {
          portuguese: "Cônjuge que faleceu",
          english: "A spouse who passed away",
          pronunciation: "Â spáus rú pásd âwé",
          correct: true
        },
        {
          portuguese: "Pessoa solteira",
          english: "A single person",
          pronunciation: "Â síngl pêrsan",
          correct: false
        }
      ]
    },
    summary: "Conheça os termos de estado civil em inglês / Know marital status terms in English"
  },
  {
    id: 8,
    level: 2,
    title: "Termos Legais e Criminais / Legal and Criminal Terms",
    titlePronunciation: "Lígal ând Kríminal Térms",
    objective: "Saber termos legais usados no teste / Know legal terms used in the test",
    content: [
      {
        portuguese: "Prisão",
        english: "Arrest",
        pronunciation: "Arést"
      },
      {
        portuguese: "Condenação",
        english: "Conviction",
        pronunciation: "Kânvíkshân"
      },
      {
        portuguese: "Tribunal",
        english: "Court",
        pronunciation: "Córt"
      },
      {
        portuguese: "Multa",
        english: "Fine",
        pronunciation: "Fáin"
      },
      {
        portuguese: "Liberdade condicional",
        english: "Probation",
        pronunciation: "Prôbéishân"
      }
    ],
    quiz: {
      question: "O que é uma condenação? / What is a conviction?",
      questionPronunciation: "Uát iz â kânvíkshân?",
      options: [
        {
          portuguese: "Ir ao tribunal",
          english: "Going to court",
          pronunciation: "Góing tu córt",
          correct: false
        },
        {
          portuguese: "Considerado culpado de um crime",
          english: "Found guilty of a crime",
          pronunciation: "Fáund gílti óv â kráim",
          correct: true
        },
        {
          portuguese: "Pagar uma multa",
          english: "Paying a fine",
          pronunciation: "Péing â fáin",
          correct: false
        }
      ]
    },
    summary: "Termos legais são importantes para o N-400 / Legal terms are important for N-400"
  },
  {
    id: 9,
    level: 2,
    title: "Status de Imigração / Immigration Status",
    titlePronunciation: "Ímigreichân Státus",
    objective: "Responder sobre visto, green card e naturalização / Answer about visa, green card, and naturalization",
    content: [
      {
        portuguese: "Visto",
        english: "Visa",
        pronunciation: "Víza"
      },
      {
        portuguese: "Green Card",
        english: "Green Card",
        pronunciation: "Grín Kárd"
      },
      {
        portuguese: "Ajuste de Status",
        english: "Adjustment of Status",
        pronunciation: "Adjâstment âv Státus"
      },
      {
        portuguese: "Naturalização",
        english: "Naturalization",
        pronunciation: "Nâtchuralâizêishân"
      },
      {
        portuguese: "USCIS",
        english: "USCIS",
        pronunciation: "Iú-Es-Sí-Ai-Es"
      }
    ],
    quiz: {
      question: "Qual termo significa tornar-se cidadão americano? / Which term means becoming a U.S. citizen?",
      questionPronunciation: "Uích térm míns bikâming â Iú.És. sítizen?",
      options: [
        {
          portuguese: "Ajuste de Status",
          english: "Adjustment of Status",
          pronunciation: "Adjâstment âv Státus",
          correct: false
        },
        {
          portuguese: "Naturalização",
          english: "Naturalization",
          pronunciation: "Nâtchuralâizêishân",
          correct: true
        },
        {
          portuguese: "Visto",
          english: "Visa",
          pronunciation: "Víza",
          correct: false
        }
      ]
    },
    summary: "Naturalização é o processo de se tornar cidadão / Naturalization is the process of becoming a citizen"
  },
  {
    id: 10,
    level: 2,
    title: "Juramentos e Testes de Civismo / Oaths and Civics",
    titlePronunciation: "Óuths ând Sívics",
    objective: "Preparar para o teste de civismo e juramento / Prepare for civics test and oath",
    content: [
      {
        portuguese: "Juramento de fidelidade",
        english: "Oath of Allegiance",
        pronunciation: "Óuth óv Alígêns"
      },
      {
        portuguese: "Constituição",
        english: "Constitution",
        pronunciation: "Kónstichushân"
      },
      {
        portuguese: "Teste de civismo",
        english: "Civics Test",
        pronunciation: "Sívics Tést"
      },
      {
        portuguese: "Entrevista com USCIS",
        english: "Immigration Interview",
        pronunciation: "Ímigreichân Ínterviú"
      }
    ],
    quiz: {
      question: "O que é o Oath of Allegiance? / What is the Oath of Allegiance?",
      questionPronunciation: "Uát iz dhi Óuth óv Alígêns?",
      options: [
        {
          portuguese: "Teste sobre história",
          english: "Test about history",
          pronunciation: "Tést âbáut hístory",
          correct: false
        },
        {
          portuguese: "Promessa de apoiar os EUA",
          english: "Promise to support the U.S.",
          pronunciation: "Prómis tu supôrt dhi iú-Es",
          correct: true
        },
        {
          portuguese: "Entrevista",
          english: "Interview",
          pronunciation: "Ínterviú",
          correct: false
        }
      ]
    },
    summary: "O juramento é o passo final para cidadania / The oath is the final step to citizenship"
  }
];
