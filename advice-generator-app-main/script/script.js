let bot = document.getElementById("botao")
let idEl = document.getElementById("id")
let textEl = document.getElementById("text")

idEl.textContent = 177
textEl.textContent = "It is easy to sit up and take notice, what's difficult is getting up and taking action."

async function displayText() {
    const resposta = await fetch(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`);
    const dados = await resposta.json()
    idEl.textContent= dados.slip.id
    textEl.textContent= dados.slip.advice
}

bot.addEventListener('click',displayText)

