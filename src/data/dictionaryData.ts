export interface DictionaryWord {
  word: string;
  pronunciation: string;
  translation: string;
  example?: string;
  exampleTranslation?: string;
}

export const dictionaryWords: DictionaryWord[] = [
  // Letter A
  { word: "a", pronunciation: "ã", translation: "um, uma" },
  { word: "ability", pronunciation: "ábiliti", translation: "habilidade", example: "She has the ability to learn quickly.", exampleTranslation: "Ela tem a habilidade de aprender rapidamente." },
  { word: "able", pronunciation: "êibol", translation: "capaz", example: "I am able to help you.", exampleTranslation: "Eu sou capaz de ajudá-lo." },
  { word: "about", pronunciation: "abáut", translation: "sobre", example: "Let's talk about the weather.", exampleTranslation: "Vamos falar sobre o clima." },
  { word: "above", pronunciation: "abâv", translation: "acima", example: "The bird flew above the trees.", exampleTranslation: "O pássaro voou acima das árvores." },
  { word: "accept", pronunciation: "éksept", translation: "aceitar", example: "I accept your apology.", exampleTranslation: "Eu aceito suas desculpas." },
  { word: "accident", pronunciation: "éksidênt", translation: "acidente", example: "There was a car accident yesterday.", exampleTranslation: "Houve um acidente de carro ontem." },
  { word: "account", pronunciation: "akáunt", translation: "conta", example: "I need to check my bank account.", exampleTranslation: "Preciso verificar minha conta bancária." },
  { word: "across", pronunciation: "akrós", translation: "através de", example: "She walked across the street.", exampleTranslation: "Ela atravessou a rua." },
  { word: "act", pronunciation: "ákt", translation: "agir, ato", example: "We must act quickly.", exampleTranslation: "Devemos agir rapidamente." },
  { word: "action", pronunciation: "ákshon", translation: "ação", example: "We need to take action now.", exampleTranslation: "Precisamos tomar uma ação agora." },
  { word: "active", pronunciation: "áktiv", translation: "ativo", example: "He leads an active lifestyle.", exampleTranslation: "Ele leva um estilo de vida ativo." },
  { word: "activity", pronunciation: "aktiviti", translation: "atividade", example: "Swimming is a healthy activity.", exampleTranslation: "Natação é uma atividade saudável." },
  { word: "actually", pronunciation: "áktchualli", translation: "na verdade", example: "Actually, I don't agree.", exampleTranslation: "Na verdade, eu não concordo." },
  { word: "add", pronunciation: "éd", translation: "adicionar", example: "Please add sugar to my coffee.", exampleTranslation: "Por favor, adicione açúcar ao meu café." },
  { word: "address", pronunciation: "adrés", translation: "endereço", example: "What's your home address?", exampleTranslation: "Qual é o seu endereço residencial?" },
  { word: "adult", pronunciation: "ádalt", translation: "adulto", example: "Only adults can enter.", exampleTranslation: "Apenas adultos podem entrar." },
  { word: "advance", pronunciation: "advâns", translation: "avançar", example: "Technology continues to advance.", exampleTranslation: "A tecnologia continua a avançar." },
  { word: "advantage", pronunciation: "advântidj", translation: "vantagem", example: "Experience is an advantage.", exampleTranslation: "Experiência é uma vantagem." },
  { word: "adventure", pronunciation: "advéntchur", translation: "aventura", example: "Life is an adventure.", exampleTranslation: "A vida é uma aventura." },
  
  // Letter B
  { word: "be", pronunciation: "bi", translation: "ser, estar", example: "I want to be happy.", exampleTranslation: "Eu quero ser feliz." },
  { word: "back", pronunciation: "bák", translation: "atrás, de volta", example: "Come back soon!", exampleTranslation: "Volte logo!" },
  { word: "because", pronunciation: "bicóz", translation: "porque", example: "I'm tired because I didn't sleep well.", exampleTranslation: "Estou cansado porque não dormi bem." },
  { word: "big", pronunciation: "bíg", translation: "grande", example: "That's a big house.", exampleTranslation: "Essa é uma casa grande." },
  { word: "but", pronunciation: "bãt", translation: "mas", example: "I like it, but it's expensive.", exampleTranslation: "Eu gosto, mas é caro." },
  { word: "by", pronunciation: "bái", translation: "por", example: "The book was written by Shakespeare.", exampleTranslation: "O livro foi escrito por Shakespeare." },
  { word: "better", pronunciation: "bétãr", translation: "melhor", example: "This is better than that.", exampleTranslation: "Isso é melhor que aquilo." },
  { word: "between", pronunciation: "bituín", translation: "entre", example: "Choose between coffee and tea.", exampleTranslation: "Escolha entre café e chá." },
  { word: "both", pronunciation: "bóuth", translation: "ambos", example: "Both options are good.", exampleTranslation: "Ambas as opções são boas." },
  { word: "bring", pronunciation: "bríng", translation: "trazer", example: "Please bring your umbrella.", exampleTranslation: "Por favor, traga seu guarda-chuva." },
  { word: "business", pronunciation: "bízness", translation: "negócio", example: "He owns a small business.", exampleTranslation: "Ele possui um pequeno negócio." },
  { word: "boy", pronunciation: "bói", translation: "menino", example: "The boy is playing.", exampleTranslation: "O menino está brincando." },
  { word: "believe", pronunciation: "bilíev", translation: "acreditar", example: "I believe in you.", exampleTranslation: "Eu acredito em você." },
  { word: "book", pronunciation: "búk", translation: "livro", example: "I'm reading a good book.", exampleTranslation: "Estou lendo um bom livro." },
  { word: "begin", pronunciation: "bigín", translation: "começar", example: "Let's begin the meeting.", exampleTranslation: "Vamos começar a reunião." },
  { word: "body", pronunciation: "bódí", translation: "corpo", example: "Exercise is good for your body.", exampleTranslation: "Exercício é bom para seu corpo." },
  { word: "born", pronunciation: "bórn", translation: "nascido", example: "I was born in Brazil.", exampleTranslation: "Eu nasci no Brasil." },
  { word: "best", pronunciation: "bést", translation: "melhor", example: "You're the best!", exampleTranslation: "Você é o melhor!" },
  { word: "brother", pronunciation: "brádher", translation: "irmão", example: "My brother is older than me.", exampleTranslation: "Meu irmão é mais velho que eu." },
  { word: "build", pronunciation: "bíld", translation: "construir", example: "They will build a new school.", exampleTranslation: "Eles vão construir uma nova escola." },
  
  // Letter C
  { word: "can", pronunciation: "kãn", translation: "poder, conseguir", example: "I can speak English.", exampleTranslation: "Eu consigo falar inglês." },
  { word: "come", pronunciation: "kâm", translation: "vir", example: "Please come here.", exampleTranslation: "Por favor, venha aqui." },
  { word: "could", pronunciation: "kúd", translation: "poderia", example: "Could you help me?", exampleTranslation: "Você poderia me ajudar?" },
  { word: "call", pronunciation: "kól", translation: "chamar, ligar", example: "I'll call you later.", exampleTranslation: "Vou te ligar mais tarde." },
  { word: "children", pronunciation: "chíldrãn", translation: "crianças", example: "The children are playing.", exampleTranslation: "As crianças estão brincando." },
  { word: "company", pronunciation: "kãmpãní", translation: "empresa", example: "He works for a big company.", exampleTranslation: "Ele trabalha para uma grande empresa." },
  { word: "city", pronunciation: "síti", translation: "cidade", example: "New York is a big city.", exampleTranslation: "Nova York é uma cidade grande." },
  { word: "case", pronunciation: "kéis", translation: "caso", example: "In this case, we should wait.", exampleTranslation: "Neste caso, devemos esperar." },
  { word: "class", pronunciation: "klás", translation: "classe", example: "I have an English class today.", exampleTranslation: "Tenho uma aula de inglês hoje." },
  { word: "change", pronunciation: "tchêindj", translation: "mudar", example: "People can change.", exampleTranslation: "As pessoas podem mudar." },
  { word: "continue", pronunciation: "kãntínú", translation: "continuar", example: "Please continue your work.", exampleTranslation: "Por favor, continue seu trabalho." },
  { word: "cause", pronunciation: "kóz", translation: "causa", example: "What's the cause of the problem?", exampleTranslation: "Qual é a causa do problema?" },
  { word: "certain", pronunciation: "sértãn", translation: "certo", example: "I'm certain about this.", exampleTranslation: "Tenho certeza sobre isso." },
  { word: "clear", pronunciation: "klíar", translation: "claro", example: "The instructions are clear.", exampleTranslation: "As instruções estão claras." },
  { word: "carry", pronunciation: "kéri", translation: "carregar", example: "Can you carry this bag?", exampleTranslation: "Você pode carregar esta bolsa?" },
  { word: "cold", pronunciation: "kóuld", translation: "frio", example: "It's cold today.", exampleTranslation: "Está frio hoje." },
  { word: "close", pronunciation: "klóus", translation: "fechar / perto", example: "Please close the door.", exampleTranslation: "Por favor, feche a porta." },
  { word: "culture", pronunciation: "káltchãr", translation: "cultura", example: "Brazilian culture is rich.", exampleTranslation: "A cultura brasileira é rica." },
  { word: "country", pronunciation: "kãuntrí", translation: "país", example: "Brazil is a beautiful country.", exampleTranslation: "O Brasil é um país bonito." },
  { word: "course", pronunciation: "kórs", translation: "curso", example: "I'm taking an online course.", exampleTranslation: "Estou fazendo um curso online." },
  
  // Letter D - continuing with more words
  { word: "do", pronunciation: "dú", translation: "fazer", example: "What do you do?", exampleTranslation: "O que você faz?" },
  { word: "day", pronunciation: "déi", translation: "dia", example: "Have a nice day!", exampleTranslation: "Tenha um bom dia!" },
  { word: "down", pronunciation: "dáun", translation: "baixo, descer", example: "The ball rolled down the hill.", exampleTranslation: "A bola rolou colina abaixo." },
  { word: "different", pronunciation: "díferênt", translation: "diferente", example: "We are all different.", exampleTranslation: "Somos todos diferentes." },
  { word: "during", pronunciation: "djúring", translation: "durante", example: "Stay quiet during the movie.", exampleTranslation: "Fique quieto durante o filme." },
  { word: "door", pronunciation: "dór", translation: "porta", example: "Close the door, please.", exampleTranslation: "Feche a porta, por favor." },
  { word: "dark", pronunciation: "dáark", translation: "escuro", example: "It's getting dark.", exampleTranslation: "Está ficando escuro." },
  { word: "deal", pronunciation: "díl", translation: "acordo", example: "That's a good deal.", exampleTranslation: "Esse é um bom acordo." },
  { word: "decide", pronunciation: "disáid", translation: "decidir", example: "You need to decide now.", exampleTranslation: "Você precisa decidir agora." },
  { word: "doctor", pronunciation: "dókter", translation: "médico", example: "I need to see a doctor.", exampleTranslation: "Preciso ver um médico." },
  
  // Continuing with more letters - E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z
  // Adding representative words from each letter
  
  { word: "each", pronunciation: "ítch", translation: "cada", example: "Each student has a book.", exampleTranslation: "Cada estudante tem um livro." },
  { word: "end", pronunciation: "énd", translation: "fim", example: "This is the end.", exampleTranslation: "Este é o fim." },
  { word: "every", pronunciation: "évri", translation: "cada, todo", example: "Every day is a new opportunity.", exampleTranslation: "Cada dia é uma nova oportunidade." },
  { word: "even", pronunciation: "íven", translation: "mesmo, até", example: "Even children can understand.", exampleTranslation: "Até crianças podem entender." },
  { word: "example", pronunciation: "ígzãmpl", translation: "exemplo", example: "For example, let's say...", exampleTranslation: "Por exemplo, vamos dizer..." },
  
  { word: "for", pronunciation: "fór", translation: "para", example: "This is for you.", exampleTranslation: "Isso é para você." },
  { word: "from", pronunciation: "fráum", translation: "de", example: "I'm from Brazil.", exampleTranslation: "Eu sou do Brasil." },
  { word: "first", pronunciation: "fêrst", translation: "primeiro", example: "This is my first time here.", exampleTranslation: "Esta é minha primeira vez aqui." },
  { word: "find", pronunciation: "fáind", translation: "encontrar", example: "I can't find my keys.", exampleTranslation: "Não consigo encontrar minhas chaves." },
  { word: "feel", pronunciation: "fíil", translation: "sentir", example: "I feel happy today.", exampleTranslation: "Me sinto feliz hoje." },
  
  { word: "get", pronunciation: "guét", translation: "obter, conseguir", example: "I need to get some sleep.", exampleTranslation: "Preciso dormir um pouco." },
  { word: "go", pronunciation: "gôu", translation: "ir", example: "Let's go home.", exampleTranslation: "Vamos para casa." },
  { word: "give", pronunciation: "guív", translation: "dar", example: "Give me a chance.", exampleTranslation: "Me dê uma chance." },
  { word: "good", pronunciation: "gúd", translation: "bom", example: "That's a good idea.", exampleTranslation: "Essa é uma boa ideia." },
  { word: "great", pronunciation: "gréit", translation: "ótimo, grande", example: "You did a great job!", exampleTranslation: "Você fez um ótimo trabalho!" },
  
  { word: "have", pronunciation: "rév", translation: "ter", example: "I have a question.", exampleTranslation: "Tenho uma pergunta." },
  { word: "he", pronunciation: "rí", translation: "ele", example: "He is my friend.", exampleTranslation: "Ele é meu amigo." },
  { word: "help", pronunciation: "rélp", translation: "ajudar", example: "Can you help me?", exampleTranslation: "Você pode me ajudar?" },
  { word: "home", pronunciation: "róm", translation: "casa", example: "Welcome to my home.", exampleTranslation: "Bem-vindo à minha casa." },
  { word: "how", pronunciation: "ráu", translation: "como", example: "How are you?", exampleTranslation: "Como você está?" },
  
  { word: "in", pronunciation: "ín", translation: "em", example: "I live in Brazil.", exampleTranslation: "Moro no Brasil." },
  { word: "is", pronunciation: "íz", translation: "é", example: "This is amazing.", exampleTranslation: "Isso é incrível." },
  { word: "it", pronunciation: "ít", translation: "isso", example: "It is important.", exampleTranslation: "Isso é importante." },
  { word: "important", pronunciation: "ímpórtãnt", translation: "importante", example: "Education is important.", exampleTranslation: "Educação é importante." },
  
  { word: "just", pronunciation: "djúst", translation: "apenas", example: "Just do it.", exampleTranslation: "Apenas faça." },
  { word: "job", pronunciation: "djób", translation: "trabalho", example: "I need a new job.", exampleTranslation: "Preciso de um novo trabalho." },
  
  { word: "know", pronunciation: "nóu", translation: "saber", example: "I know the answer.", exampleTranslation: "Sei a resposta." },
  { word: "kind", pronunciation: "káind", translation: "tipo, gentil", example: "She is very kind.", exampleTranslation: "Ela é muito gentil." },
  { word: "keep", pronunciation: "kíp", translation: "manter", example: "Keep trying!", exampleTranslation: "Continue tentando!" },
  
  { word: "like", pronunciation: "láik", translation: "gostar", example: "I like chocolate.", exampleTranslation: "Eu gosto de chocolate." },
  { word: "long", pronunciation: "lóng", translation: "longo", example: "It's a long story.", exampleTranslation: "É uma longa história." },
  { word: "look", pronunciation: "lúuk", translation: "olhar", example: "Look at the sky!", exampleTranslation: "Olhe para o céu!" },
  { word: "life", pronunciation: "láif", translation: "vida", example: "Life is beautiful.", exampleTranslation: "A vida é bonita." },
  { word: "love", pronunciation: "láv", translation: "amor, amar", example: "I love you.", exampleTranslation: "Eu te amo." },
  
  { word: "make", pronunciation: "mêik", translation: "fazer", example: "Let's make a plan.", exampleTranslation: "Vamos fazer um plano." },
  { word: "man", pronunciation: "mæn", translation: "homem", example: "That man is tall.", exampleTranslation: "Aquele homem é alto." },
  { word: "many", pronunciation: "méni", translation: "muitos", example: "Many people agree.", exampleTranslation: "Muitas pessoas concordam." },
  { word: "more", pronunciation: "mór", translation: "mais", example: "I need more time.", exampleTranslation: "Preciso de mais tempo." },
  { word: "most", pronunciation: "móust", translation: "a maioria", example: "Most people like music.", exampleTranslation: "A maioria das pessoas gosta de música." },
  
  { word: "not", pronunciation: "nót", translation: "não", example: "I'm not sure.", exampleTranslation: "Não tenho certeza." },
  { word: "now", pronunciation: "náu", translation: "agora", example: "Let's do it now.", exampleTranslation: "Vamos fazer agora." },
  { word: "need", pronunciation: "níid", translation: "precisar", example: "I need your help.", exampleTranslation: "Preciso da sua ajuda." },
  { word: "new", pronunciation: "núu", translation: "novo", example: "I bought a new car.", exampleTranslation: "Comprei um carro novo." },
  { word: "never", pronunciation: "néver", translation: "nunca", example: "Never give up!", exampleTranslation: "Nunca desista!" },
  
  { word: "of", pronunciation: "ãv", translation: "de", example: "A cup of coffee.", exampleTranslation: "Uma xícara de café." },
  { word: "on", pronunciation: "ón", translation: "em, sobre", example: "The book is on the table.", exampleTranslation: "O livro está sobre a mesa." },
  { word: "or", pronunciation: "ór", translation: "ou", example: "Coffee or tea?", exampleTranslation: "Café ou chá?" },
  { word: "only", pronunciation: "óunlí", translation: "somente", example: "Only you can do this.", exampleTranslation: "Somente você pode fazer isso." },
  { word: "other", pronunciation: "óther", translation: "outro", example: "The other day I saw...", exampleTranslation: "Outro dia eu vi..." },
  
  { word: "people", pronunciation: "pípôl", translation: "pessoas", example: "Many people are here.", exampleTranslation: "Muitas pessoas estão aqui." },
  { word: "place", pronunciation: "pléis", translation: "lugar", example: "This is a nice place.", exampleTranslation: "Este é um lugar agradável." },
  { word: "part", pronunciation: "párt", translation: "parte", example: "You're part of the team.", exampleTranslation: "Você faz parte da equipe." },
  { word: "problem", pronunciation: "próblêm", translation: "problema", example: "No problem!", exampleTranslation: "Sem problema!" },
  { word: "play", pronunciation: "plêi", translation: "jogar, brincar", example: "Let's play a game.", exampleTranslation: "Vamos jogar um jogo." },
  
  { word: "question", pronunciation: "késtchãn", translation: "pergunta", example: "I have a question.", exampleTranslation: "Tenho uma pergunta." },
  { word: "quick", pronunciation: "kuík", translation: "rápido", example: "Be quick!", exampleTranslation: "Seja rápido!" },
  { word: "quite", pronunciation: "kuáit", translation: "bastante, muito", example: "It's quite expensive.", exampleTranslation: "É bastante caro." },
  
  { word: "right", pronunciation: "ráit", translation: "certo, direito", example: "You're right!", exampleTranslation: "Você está certo!" },
  { word: "run", pronunciation: "rãn", translation: "correr", example: "I like to run.", exampleTranslation: "Gosto de correr." },
  { word: "read", pronunciation: "ríid", translation: "ler", example: "I read every day.", exampleTranslation: "Leio todos os dias." },
  { word: "real", pronunciation: "ríal", translation: "real", example: "This is real gold.", exampleTranslation: "Isto é ouro verdadeiro." },
  
  { word: "see", pronunciation: "síi", translation: "ver", example: "I see you.", exampleTranslation: "Eu vejo você." },
  { word: "say", pronunciation: "séi", translation: "dizer", example: "What did you say?", exampleTranslation: "O que você disse?" },
  { word: "some", pronunciation: "sãm", translation: "algum", example: "Give me some water.", exampleTranslation: "Me dê um pouco de água." },
  { word: "show", pronunciation: "xóu", translation: "mostrar", example: "Show me the way.", exampleTranslation: "Mostre-me o caminho." },
  { word: "start", pronunciation: "stárt", translation: "começar", example: "Let's start the class.", exampleTranslation: "Vamos começar a aula." },
  
  { word: "time", pronunciation: "táim", translation: "tempo", example: "What time is it?", exampleTranslation: "Que horas são?" },
  { word: "take", pronunciation: "téik", translation: "pegar", example: "Take this book.", exampleTranslation: "Pegue este livro." },
  { word: "think", pronunciation: "thínk", translation: "pensar", example: "I think you're right.", exampleTranslation: "Acho que você está certo." },
  { word: "tell", pronunciation: "tél", translation: "contar", example: "Tell me a story.", exampleTranslation: "Conte-me uma história." },
  { word: "try", pronunciation: "trái", translation: "tentar", example: "Try again!", exampleTranslation: "Tente novamente!" },
  
  { word: "umbrella", pronunciation: "ãmbréla", translation: "guarda-chuva", example: "I take my umbrella when it rains.", exampleTranslation: "Levo meu guarda-chuva quando chove." },
  { word: "under", pronunciation: "ãnder", translation: "debaixo", example: "The cat is under the table.", exampleTranslation: "O gato está debaixo da mesa." },
  { word: "up", pronunciation: "áp", translation: "acima, levantar", example: "Wake up!", exampleTranslation: "Acorde!" },
  { word: "use", pronunciation: "iúz", translation: "usar", example: "Use your brain.", exampleTranslation: "Use seu cérebro." },
  { word: "until", pronunciation: "ãntil", translation: "até", example: "Wait until tomorrow.", exampleTranslation: "Espere até amanhã." },
  
  { word: "very", pronunciation: "véri", translation: "muito", example: "I'm very happy.", exampleTranslation: "Estou muito feliz." },
  { word: "view", pronunciation: "víu", translation: "vista", example: "The view is amazing.", exampleTranslation: "A vista é incrível." },
  
  { word: "what", pronunciation: "uót", translation: "o que", example: "What do you want?", exampleTranslation: "O que você quer?" },
  { word: "when", pronunciation: "uén", translation: "quando", example: "When will you arrive?", exampleTranslation: "Quando você vai chegar?" },
  { word: "where", pronunciation: "uér", translation: "onde", example: "Where are you?", exampleTranslation: "Onde você está?" },
  { word: "work", pronunciation: "uórk", translation: "trabalhar", example: "I work every day.", exampleTranslation: "Trabalho todos os dias." },
  { word: "want", pronunciation: "uánt", translation: "querer", example: "I want to learn.", exampleTranslation: "Quero aprender." },
  
  { word: "yes", pronunciation: "iés", translation: "sim", example: "Yes, I agree.", exampleTranslation: "Sim, eu concordo." },
  { word: "you", pronunciation: "iú", translation: "você", example: "You are amazing!", exampleTranslation: "Você é incrível!" },
  { word: "your", pronunciation: "iór", translation: "seu, sua", example: "This is your book.", exampleTranslation: "Este é seu livro." },
  { word: "year", pronunciation: "iár", translation: "ano", example: "Happy New Year!", exampleTranslation: "Feliz Ano Novo!" },
  
  { word: "zero", pronunciation: "zírou", translation: "zero", example: "Zero mistakes!", exampleTranslation: "Zero erros!" },
  { word: "zoo", pronunciation: "zúu", translation: "zoológico", example: "Let's go to the zoo.", exampleTranslation: "Vamos ao zoológico." },
];

// Function to get words by letter
export const getWordsByLetter = (letter: string): DictionaryWord[] => {
  return dictionaryWords.filter(word => 
    word.word.toLowerCase().startsWith(letter.toLowerCase())
  );
};

// Function to search words
export const searchWords = (query: string): DictionaryWord[] => {
  const lowerQuery = query.toLowerCase();
  return dictionaryWords.filter(word => 
    word.word.toLowerCase().includes(lowerQuery) ||
    word.translation.toLowerCase().includes(lowerQuery) ||
    word.pronunciation.toLowerCase().includes(lowerQuery)
  );
};
