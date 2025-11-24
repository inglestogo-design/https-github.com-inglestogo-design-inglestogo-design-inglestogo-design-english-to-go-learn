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
  }
];
