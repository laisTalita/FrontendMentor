let menu_button = document.getElementById('menu_button')
let imagem_bot = document.getElementById('bot_img')
let overlay = document.createElement("div")
overlay.id="overlay";
document.body.appendChild(overlay);

menu_button.addEventListener('click',()=>{
    menu_button.classList.toggle("show"); 

    if(menu_button.classList.contains("show")){
        imagem_bot.src ="./images/icon-close.svg"
        window.innerWidth <=991? overlay.classList.add('active'): overlay.classList.remove("active")
    }else{
        imagem_bot.src ="./images/icon-hamburger.svg"
        overlay.classList.remove("active")
    }
})