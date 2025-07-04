import { useEffect, useState } from 'react'

export default function useUserSlides(lista,dados) {
    const [index, setIndex] = useState(0)

    useEffect(()=>{
        dados(lista[index])
    })
    function voltar() {
        setIndex((prev)=>(prev - 1 +lista.length) % lista.length)
    }
     function avancar() {
        setIndex((prev)=>(prev +1) % lista.length)
    }
    useEffect(()=>{
        function pressTecla(event) {
            if(event.key ==='ArrowRight'){
                avancar()
            }else if(event.key==='ArrowLeft'){
                voltar()
            }
        }
         window.addEventListener('keydown',pressTecla)
         return()=>{
            window.removeEventListener('keydown',pressTecla)
         } 
    },[])
      return { index, setIndex, avancar, voltar }
}