const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas : [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um banco de dados",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o símbolo usado para comentários de uma única linha em JavaScript?",
      respostas : [
        "//",
        "/*",
        "#",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas : [
        "vare minhaVariavel;",
        "variavel = minhaVariavel;",
        "var minhaVariavel;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes é um tipo de dado válido em JavaScript?",
      respostas : [
        "Boolean",
        "Character",
        "Double",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de comparação estrita em JavaScript?",
      respostas : [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas : [
        "print()",
        "log()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Como você chama uma função chamada 'minhaFuncao'?",
      respostas : [
        "call minhaFuncao()",
        "invoke minhaFuncao()",
        "minhaFuncao()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes é um loop em JavaScript?",
      respostas : [
        "for i = 1 to 5",
        "para (i = 0; i < 5; i++)",
        "while (i < 5)",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para adicionar um novo elemento ao final de um array em JavaScript?",
      respostas : [
        "push()",
        "append()",
        "add()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do seguinte código JavaScript: console.log(2 + '2' - 1);",
      respostas : [
        "22",
        "3",
        "21",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
  
    //Mostra a pergunta na tela
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let respostas of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = respostas
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(respostas)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
  
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem .querySelector('dl dt').remove()
    
    quiz.appendChild(quizItem)
    
  }
  