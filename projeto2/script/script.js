
    const elements = document.querySelectorAll('.fade-in')

    function isInView(element) {
        const rect = element.getBoundingClientRect()
        return(
            rect.bottom >0 && rect.top<(
                window.innerHeight -150 || document.documentElement.clientHeight-150
            )
        )
    }
    document.addEventListener('scroll',()=>{
        elements.forEach((element)=>{
            if(isInView(element)){
                element.classList.add('fade-in-show')
            }
        })
    })

function checkEmail(id){
    const emailInput= document.getElementById(id)
    const email = emailInput.value.trim()
    const error = document.getElementById('email_error')
    const valid = document.getElementById('email_valid')

    error.style.display = 'none'
    valid.style.display = 'none'

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        chamaEvento(valid)
    }else{
       chamaEvento(error)
    }
}
let chamaEvento =(element)=>{
    element.style.display='block'
    setInterval(()=>{
        element.style.display='none'
    },2000)
}