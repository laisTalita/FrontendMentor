
const but_modo= document.getElementById('chanceModo')
const moon= document.getElementById('moon')
const sun = document.getElementById('sun')
const logo1 = document.getElementById('logo1')
const logo2 = document.getElementById('logo2')

const body = document.body
const cardsAll = document.getElementById('second_sec')
const filtros = document.querySelectorAll('nav ul li')
let allCards = []


function dados() {
    fetch('data.json',{
        method:'GET'
    }).then(res=>res.json())
    .then(res=>{
       res.forEach(element => {

        let article = document.createElement('article')

        article.dataset.isActive= element.isActive
        let info = document.createElement('div')

        info.className='info'
        let img = document.createElement('img')
        img.src = element.logo
        img.alt = element.name + " logo";
        let div_info = document.createElement('div')
        let h2= document.createElement('h2')
        h2.textContent= element.name
        let p = document.createElement('p')
        p.textContent= element.description
        let actions = document.createElement('div')
        actions.className='actions'

        let buttonRemove =document.createElement('button')
        buttonRemove.className='remove'
        buttonRemove.textContent = element.remove ? 'Add':'Remove'
        if (buttonRemove.textContent ==='Add') {
         article.classList.add('cardRemovido')

        }
      

        let div_icons = document.createElement('div')
        div_icons.className='icons'
        let icon1 = document.createElement('i')
        icon1.className='bi bi-toggle-on icon1'
        let icon2 = document.createElement('i')
        icon2.className='bi bi-toggle-off oculto icon2'

        buttonRemove.addEventListener('click',()=>{
            element.remove = !element.remove
            if (element.remove === true) {
                buttonRemove.textContent='Add'
              article.classList.add('cardRemovido')

            }else{
                buttonRemove.textContent= 'Remove';
                article.classList.remove('cardRemovido')

            }
            atualizaStatus(element)
        })

        div_icons.addEventListener('click',()=>{
            element.isActive = !element.isActive
            article.dataset.isActive=element.isActive
            
            if (icon1.classList.contains('oculto')) {
                icon1.classList.remove('oculto')
                icon2.classList.add('oculto')
            }else{
                icon1.classList.add('oculto')
                icon2.classList.remove('oculto')
            }
            atualizaStatus(element)
        })
         function atualizaStatus(element) {
            fetch('/atualiza',{
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify({
                    name:element.name,
                    remove:element.remove, 
                    isActive:element.isActive})
            }).then(res => res.json())
            .then(res =>{
                console.log(res)
            })
             .catch(error => {
        console.error("Erro na requisição:", error);
    });
        }
        if (element.isActive === false) {
            icon1.classList.add('oculto')
            icon2.classList.remove('oculto')
        }else{
            icon1.classList.remove('oculto')
            icon2.classList.add('oculto')
        }

        article.appendChild(info)
        article.appendChild(actions)
        info.appendChild(img)
        info.appendChild(div_info)
        div_info.appendChild(h2)
        div_info.appendChild(p)
        actions.appendChild(buttonRemove)
        actions.appendChild(div_icons)
        div_icons.appendChild(icon1)
        div_icons.appendChild(icon2)
                           
        allCards.push(article)
        cardsAll.appendChild(article)
       })
       renderCards(allCards)
    })
}
function renderCards(cards) {
    cardsAll.innerHTML=''
    cards.forEach(card => {
        cardsAll.appendChild(card)
    });
}
filtros.forEach(filtro => {
        filtro.addEventListener('click', () => {
            filtros.forEach(element =>{
                element.classList.remove('ativo')
                element.classList.add('inativo')}
            );
            filtro.classList.add('ativo')
            filtro.classList.remove('inativo')

            if (filtro.id === 'all') {
                renderCards(allCards)

            }else if (filtro.id==='cardsAtivos') {
                renderCards(allCards.filter(card=>card.dataset.isActive ==='true'))
            }else if(filtro.id ==='cardsInativos'){
                renderCards(allCards.filter(card=>card.dataset.isActive==='false'))
            }
        });
});

document.addEventListener('DOMContentLoaded',()=>{
    dados()
     filtros.forEach(element =>{
        if (element.id==='all') {
          element.classList.add('ativo')
        }else{
            element.classList.add('inativo')
        }
    });
})


but_modo.addEventListener('click',()=>{
    moon.classList.toggle('oculto')
    logo1.classList.toggle('oculto')
    logo2.classList.toggle('oculto')

    sun.classList.toggle('oculto')
    body.classList.toggle('modoEscuro')

    if (body.classList.contains('modoEscuro')) {
        localStorage.setItem('tema','escuro')
    }else{
        localStorage.setItem('tema','claro')
    }
})

if (localStorage.getItem('tema')==='escuro') {
    body.classList.add('modoEscuro')
    sun.classList.remove('oculto')
    logo1.classList.add('oculto')
    logo2.classList.remove('oculto')
    moon.classList.add('oculto')
}


