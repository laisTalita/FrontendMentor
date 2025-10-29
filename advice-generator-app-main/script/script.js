let bot = document.getElementById("botao")

bot.addEventListener('click',displayText)

async function displayText() {
    const resposta = await fetch(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`);
    const dados = await resposta.json()
    document.getElementById("id").textContent= dados.slip.id
    document.getElementById("text").textContent=dados.slip.advice
}
