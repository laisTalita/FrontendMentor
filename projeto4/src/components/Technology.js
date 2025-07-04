import './Technology.css'
import useUserSlides from './useUserSlides'
import { useEffect,useState } from 'react'
function Technology() {

    const[dados,setDados]= useState('launch vehicle')
    const[novoDado,setNovoDado]=useState('null')

    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(resposta =>{
            const name = resposta.technology.find(item => item.name.toLowerCase() === dados) 
            setNovoDado(name)
        })
        .catch(e => console.log(e))
    },[dados])

    const nomes =['launch vehicle','spaceport','space capsule']
    const {index,setIndex,avancar,voltar}= useUserSlides(nomes,setDados)

    return(
       <section id='section_tech'>
            <h2 className='text-white text-center text-sm-start mb-5 mt-4 ms-4'>
            <span>03</span> space launch 101</h2>

            <div className='mt-4 d-flex flex-wrap flex-lg-row-reverse' id='div_princ'>
                <div className='imagem-container'>
                    <picture >
                        <source
                            media="(max-width: 768px)"
                            srcSet={novoDado?.images?.landscape}
                        />
                        <img
                            className="w-100 h-100"
                            src={novoDado?.images?.portrait}
                            alt={novoDado?.name}
                        />
                    </picture>
                </div>
                <div className='text-center text-lg-start mx-auto mt-4 d-flex flex-column flex-lg-row justify-content-center gap-lg-1 align-items-center' id='div_container'>
                    <div className='d-flex flex-lg-column 
                    justify-content-evenly w-100 gap-2' id='circles' >
                        <div className={dados ==='launch vehicle'?'circle_ativo':''} onClick={()=> setIndex(0)}>1</div>
                        <div className={dados==='spaceport' ? 'circle_ativo':''} onClick={()=> setIndex(1)}>2</div>
                        <div className={dados==='space capsule' ? 'circle_ativo':''} onClick={()=> setIndex(2)}>3</div>
                    </div>
                    <div id='textos'>
                        <p className='p_tech mt-4' >the terminology...</p>
                        <h3 className='mb-2 text-center text-lg-start'>{novoDado?.name}</h3>
                        <p className=' mt-3' id='text-descr'>{novoDado?.description}</p>
                    </div>
                </div>               
            </div>
        </section>
    )
} export default Technology