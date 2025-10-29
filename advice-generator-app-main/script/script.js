let bot = document.getElementById("botao")
let idEl = document.getElementById("id")
let textEl = document.getElementById("text")

async function getAdviceById(id) {
    const resposta = await fetch(`https://api.adviceslip.com/advice/${id}`);
    const dados = await resposta.json();
    idEl.textContent = dados.slip.id;
    textEl.textContent = `${dados.slip.advice}`;
}
async function displayText() {
    const resposta = await fetch(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`);
    const dados = await resposta.json()
    idEl.textContent= dados.slip.id
    textEl.textContent= dados.slip.advice
}

bot.addEventListener('click',displayText)
getAdviceById(117)

