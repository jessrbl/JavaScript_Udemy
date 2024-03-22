
/* const numeros = [1, 50, 80, 2, 8, 75, 10, 65, 3, 4, 5, 100]

const numerosFiltrados = numeros.filter(valor => valor > 10)

console.log(numerosFiltrados)

*/

/* 
const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
]

const pessoasComNomeGrande = pessoas.filter(function(obj) {
    return obj.nome.length >= 5
}) 

console.log(pessoasComNomeGrande)

*/ 


const videos = [
    {
      id:'gNnZYjs1wVM',
      titulo:'Quando comecei a estudar programação…',
      views:46234,
      impressoes:433356
    },
    {
      id:'DJEuZPJ0QXA',
      titulo:'Como me tornei desenvolvedora de software depois dos 30 anos e vindo de outra área',
      views:8587,
      impressoes:59207
    },
    {
      id:'P6PpbIRRKqY',
      titulo:'Como encarar o medo da migração de carreira para tecnologia',
      views:1663,
      impressoes:19921
    },
    {
      id:'O2gRrWEAs9I',
      titulo:'Você conhece a história real que o filme Estrelas Além do Tempo conta?',
      views:1562,
      impressoes:40125
    },
    {
      id:'jg95bu7vVCc',
      titulo:'Nem só de código vive essa dev. #fortnite #ps5 🎮💁🏾‍♀️',
      views:1434,
      impressoes:983
    },
    {
      id:'d9Nca5yXZ5Q',
      titulo:'O que é JavaScript?',
      views:1410,
      impressoes:11557
    },
    {
      id:'ojJe10iWHZk',
      titulo:'Trilha de estudos para ser dev front-end',
      views:1254,
      impressoes:16233
    },
    {
      id:'89doSNYkQE8',
      titulo:'4 habilidades que toda dev jr. precisa dominar',
      views:1112,
      impressoes:12123
    },
    {
      id:'pLfdbpkl3iM',
      titulo:'Como iniciar nos testes de componentes ReactJS: Jest e React Testing Library para iniciantes',
      views:1102,
      impressoes:11458
    },
    {
      id:'RQZzLrYImIM',
      titulo:'O que é ser dev e por que você ia querer se tornar uma?',
      views:1063,
      impressoes:12320
    },
    {
      id:'BJKIuQYhxL4',
      titulo:'Conhece alguma pessoa que começou os estudos de programação? Envia esse vídeo pra ela!',
      views:1012,
      impressoes:4969
    },
    {
      id:'KSBT9gwRMIA',
      titulo:'3 mulheres pretas brasileiras pra se inspirar',
      views:927,
      impressoes:4464
    },
    {
      id:'RHwDGtW-RKY',
      titulo:'Quem é você na planning? Só se aprende a estimar, estimando!',
      views:870,
      impressoes:6534
    },
    {
      id:'nObZXzIYPlg',
      titulo:'Lancei meu canal! Vem se inscrever e acompanhar! 👩🏾‍💻💁🏾‍♀️💜',
      views:864,
      impressoes:4209
    },
    {
      id:'944PhSyOnPM',
      titulo:'O que é algoritmo?',
      views:807,
      impressoes:6097
    },
    {
      id:'Gzgq0h4r-Zg',
      titulo:'O podcast Quero Ser Dev voltou com uma temporada super especial de 6 episódios.👩🏾‍💻☕️💜',
      views:802,
      impressoes:1632
    },
    {
      id:'1_C24wLx6gY',
      titulo:'3 problemas reais que uma dev iniciante enfrenta',
      views:798,
      impressoes:9420
    },
    {
      id:'LVvYcpBHhoI',
      titulo:'O que estudar para ser dev backend?',
      views:774,
      impressoes:8277
    },
    {
      id:'F6P6l1hUwAc',
      titulo:'Vamboraaaa? Inscreva-se até 29/01 aqui no link: https://lnkd.in/dHP6VFng',
      views:662,
      impressoes:3760
    },
    {
      id:'C5bK81kQ0eA',
      titulo:'Migração de carreira é pra mim?',
      views:582,
      impressoes:7225
    },
    {
      id:'ydtYhAaBzsQ',
      titulo:'👩🏾‍💻Vem: https://www.sympla.com.br/oficina-de-tdd-com-nodejs-e-jest---primeiros-passos__2063779',
      views:522,
      impressoes:2700
    },
    {
      id:'RiqW2-iWcYM',
      titulo:'1 coisa que eu mudaria e 1 coisa que eu faria igual na migração de carreira pra tecnologia',
      views:519,
      impressoes:4294
    },
    {
      id:'0ACRHekipdI',
      titulo:'Como pensam que é trabalhar com tecnologia em 2023👩🏾‍💻🤣 #queroserdev #humor #developers',
      views:505,
      impressoes:1439
    },
    {
      id:'bxBP1ikBmGE',
      titulo:'5 dicas práticas que podem te ajudar a conquistar sua vaga como dev iniciante',
      views:503,
      impressoes:5557
    },
    {
      id:'5xwiTW9kcss',
      titulo:'Transição para tecnologia: mulheres inspiradoras',
      views:499,
      impressoes:4520
    },
    {
      id:'tx_Q-CVRaHQ',
      titulo:'Isso vai te ajudar a conseguir seu primeiro emprego como dev - sem experiência',
      views:497,
      impressoes:8475
    },
    {
      id:'sYcVLJdh9Uo',
      titulo:'Depois de um ano estudando programação parecia que eu não sabia nada',
      views:480,
      impressoes:8291
    },
    {
      id:'aztjCAjJ_Qs',
      titulo:'Aprendendo Python com Luciano Ramalho',
      views:471,
      impressoes:1923
    },
    {
      id:'YIxEnxuedZc',
      titulo:'Ainda vale a pena ser dev? #queroserdev',
      views:469,
      impressoes:973
    },
    {
      id:'E2OP67eJcXM',
      titulo:'Como otimizar o pouco tempo que tenho pra estudar programação?',
      views:440,
      impressoes:6969
    },
    {
      id:'6dDbwwsygLU',
      titulo:'IA não vai roubar teu emprego de dev e eu posso provar',
      views:427,
      impressoes:5103
    },
    {
      id:'m9w1r0W9G78',
      titulo:'Papo de carreira na tecnologia. #queroserdev',
      views:385,
      impressoes:1576
    },
    {
      id:'CnB0LqTRAsI',
      titulo:'Live coding: Primeiro CRUD',
      views:380,
      impressoes:4066
    },
    {
      id:'IJGbyrPA4Pc',
      titulo:'Decidi estudar programação. Por onde devo começar?',
      views:365,
      impressoes:4421
    },
    {
      id:'hXwhEsfvJjE',
      titulo:'Vídeo 1 | O que é JavaScript?',
      views:347,
      impressoes:5203
    },
    {
      id:'S4dT5pleupo',
      titulo:'👩🏾‍💻INDICAÇÃO DE EVENTO GRÁTIS PARA DEVS - Innovators Hive, inscreva-se: https://lnkd.in/d78rbTkU',
      views:344,
      impressoes:693
    },
    {
      id:'Z9RzEyNwICg',
      titulo:'O que é TDD?',
      views:343,
      impressoes:5637
    },
    {
      id:'UpXwOQWIIYk',
      titulo:'Os perrengues que passei fazendo migração de carreira pra tech',
      views:337,
      impressoes:5007
    },
    {
      id:'P0x6xLZ0_mE',
      titulo:'JAVA é uma linguagem de programação boa para iniciantes?',
      views:332,
      impressoes:3830
    },
    {
      id:'hT_kvr8ahZc',
      titulo:'3 conselhos pra você que começou a migrar de carreira pra tecnologia',
      views:318,
      impressoes:4461
    },
    {
      id:'EymkvmgWcTQ',
      titulo:'LAYOFF: o que está acontecendo com o mercado de tecnologia e dicas para lidar com esse cenário',
      views:306,
      impressoes:4983
    },
    {
      id:'j1spqVjjPJM',
      titulo:'🧠 "Mente afiada, futuro brilhante: pensamento crítico!" 🧠',
      views:301,
      impressoes:5857
    },
    {
      id:'bQvdJI-CHyU',
      titulo:'Ei, dev! Nada de ficar horas pra entender se esqueceu uma vírgula: dica de extensão de vscode',
      views:288,
      impressoes:2500
    },
    {
      id:'OlltQCjw_cc',
      titulo:'Vídeo 3 | Como rodar JavaScript pela primeira vez? Exemplos no navegador e fora do navegador!',
      views:281,
      impressoes:6397
    },
    {
      id:'mR-Dlkmeg8o',
      titulo:'O que é API? Vídeo para iniciantes na carreira de backend',
      views:270,
      impressoes:2383
    },
    {
      id:'hj8TV2Tl-50',
      titulo:'VLOG - Minha primeira palestra técnica',
      views:260,
      impressoes:4861
    },
    {
      id:'WBUsx8TxigA',
      titulo:'Clube do Livro | Python Fluente Edição Grátis e Online em Português',
      views:254,
      impressoes:2205
    },
    {
      id:'UosiXKwL6jg',
      titulo:'Vídeo 2 | Como preparar o computador pra aprender a programar em JavaScript?',
      views:249,
      impressoes:4794
    },
    {
      id:'oYWZSo8-k3o',
      titulo:'Hello, World! My name is Simara Conceição and This is CS50!',
      views:248,
      impressoes:828
    },
    {
      id:'tf3lGXQ7GyA',
      titulo:'Quero Ser QA - Uma história de migração de carreira e futuro possível na área de tecnologia',
      views:242,
      impressoes:7012
    },
    {
      id:'-ZTZrqH4uQ0',
      titulo:'Autonomia Pra Entregar Código Sem Medo: 7 Atitudes Pra Chegar lá!',
      views:225,
      impressoes:2390
    },
    {
      id:'epC0velKaEs',
      titulo:'PROGRAMAÇÃO: Como aplicar o que eu estudo na resolução de problemas reais?',
      views:225,
      impressoes:3319
    },
    {
      id:'fWeLWV4SsAo',
      titulo:'DE REPENTE 30: como lidar com os estudos e carreira',
      views:215,
      impressoes:3573
    },
    {
      id:'TmreAE8OBH4',
      titulo:'Como iniciar sua carreira em tecnologia? Review do Curso Ti do Zero ao Pro da EBAC',
      views:208,
      impressoes:3567
    },
    {
      id:'cbUauZhdj6Q',
      titulo:'Como acelerar a minha migração de carreira e receber meu sim mais rápido?',
      views:205,
      impressoes:3935
    },
    {
      id:'kzpuYh8p4CM',
      titulo:'O que é pair programming?',
      views:203,
      impressoes:4523
    },
    {
      id:'iSI-2iXLgLU',
      titulo:'Você também precisa aprender isso',
      views:201,
      impressoes:3036
    },
    {
      id:'jKfQSlC8SqI',
      titulo:'4 APIS grátis treinar integração: pokeapi.co developer.marvel.com developers.giphy.com swapi.dev',
      views:198,
      impressoes:1316
    },
    {
      id:'ECcls9LtDpo',
      titulo:'Migrando de carreira? Tudo vira bagagem, tudo vira experiência.',
      views:197,
      impressoes:1173
    },
    {
      id:'rG__l83KF-U',
      titulo:'Vídeo 4 | Tipos de dados, variáveis e operadores no JavaScript',
      views:188,
      impressoes:3940
    },
    {
      id:'EfVzInibR3Y',
      titulo:'Linguagem ubíqua? DDD? #queroserdev',
      views:186,
      impressoes:1461
    },
    {
      id:'7L2XAsyqkPw',
      titulo:'Um pouco do que foi minha primeira palestra em inglês 👩🏾‍💻💜',
      views:175,
      impressoes:1295
    },
    {
      id:'b7-jEWPfbNU',
      titulo:'Sua carreira em tecnologia depende disso',
      views:171,
      impressoes:185
    },
    {
      id:'hz_mjJ_Eh8I',
      titulo:'Dica de carreira com gameplay de Fortnite. 👩🏾‍💻🎮 #queroserdev',
      views:163,
      impressoes:1121
    },
    {
      id:'hKOptxjcP7I',
      titulo:'Amarração de turbante + dica de carreira 👩🏾‍💻💜 #queroserdev',
      views:161,
      impressoes:692
    },
    {
      id:'iy67U06CinU',
      titulo:'Quero Ser Dev Senior, e agora?',
      views:155,
      impressoes:2216
    },
    {
      id:'0pOm9ZiKdTI',
      titulo:'Mercado de tecnologia x Burnout, Depressão, Ansiedade: Como mitigar esses riscos?',
      views:147,
      impressoes:2510
    },
    {
      id:'ibNYyVU-9-w',
      titulo:'FStack Confs',
      views:142,
      impressoes:2922
    },
    {
      id:'qIHlLo02Aus',
      titulo:'Quero ser dev especialista em front-end',
      views:137,
      impressoes:3276
    },
    {
      id:'VeJqOokKg3s',
      titulo:'Como eu penso sobre carreira e estudos. #queroserdev',
      views:131,
      impressoes:606
    },
    {
      id:'G8tIKPBxTsM',
      titulo:'Você se adapta fácil?',
      views:124,
      impressoes:2824
    },
    {
      id:'a_gXsLMPplI',
      titulo:'DEPLOY: o que é, CI/CD, ferramentas e métricas DORA',
      views:121,
      impressoes:1909
    },
    {
      id:'wroZor_SmAQ',
      titulo:'Vídeo 5 | Condicionais no JavaScript',
      views:113,
      impressoes:4400
    },
    {
      id:'14wcjEhlwaU',
      titulo:'Diversidade e inclusão: na tecnologia e na saúde',
      views:100,
      impressoes:2550
    },
    {
      id:'gt7Z2pF9uAo',
      titulo:'Mostrando as métricas do primeiro ano do canal',
      views:98,
      impressoes:2683
    },
    {
      id:'ieSB8kVF4yU',
      titulo:'Vídeo 6 | Loops no JavaScript',
      views:95,
      impressoes:2546
    },
    {
      id:'PuHNcvHQrQs',
      titulo:'Imersão Total no AWS Summit São Paulo 2023: Minha Experiência Incrível e Aprendizados Poderosos!',
      views:85,
      impressoes:2272
    },
    {
      id:'bib9AZlPCwc',
      titulo:'Como manter uma rotina equilibrada quando não estou motivada?',
      views:80,
      impressoes:3001
    },
    {
      id:'TdECz-poGSg',
      titulo:'A dor e a delícia de se tornar uma pessoa desenvolvedora',
      views:75,
      impressoes:140
    },
    {
      id:'bPrO3KTLuj0',
      titulo:'O mercado de tecnologia está em crise? Como se entender e se cuidar no meio disso tudo?',
      views:62,
      impressoes:2290
    },
    {
      id:'50HXH4pl8tU',
      titulo:'O que saúde tem a ver com carreira? Por que colocar a saúde em primeiro lugar?',
      views:56,
      impressoes:3232
    },
    {
      id:'38GGG9q__x8',
      titulo:'Não existe solução simples pra sistemas complexos. Como refletir e buscar cuidados individualizados?',
      views:51,
      impressoes:1863
    }
  ]


  const titulos = [];

  for (const video of videos) {
      titulos.push(video.titulo);
  }
  
console.log(titulos);