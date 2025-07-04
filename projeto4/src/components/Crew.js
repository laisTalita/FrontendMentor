import './Crew.css'
import useUserSlides from './useUserSlides'
import { useEffect,useState } from 'react'

function Crew() {
    const [dados,setDados]= useState('douglas hurley')
    const [novosDados,setNovosDados] = useState('')

    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(resposta =>{
            const name = resposta.crew.find(item => item.name.toLowerCase() === dados)
            setNovosDados(name)
        })
        .catch(e=> console.log(e))
    },[dados])

    const tripulantes=['douglas hurley','mark shuttleworth',
    'victor glover','anousheh ansari']
      const { index, setIndex, avancar, voltar } = useUserSlides(tripulantes, setDados)
    return(
        <section id='section_Crew' className='d-flex align-items-center'>
            <div className='div_1'>
                <h2 className='text-white mb-5  text-sm-start'><span>02</span> Meet Your crew</h2>
                <div id='colab' className='w-100 d-flex flex-wrap align-items-center flex-lg-row-reverse gap-lg-2 justify-content-center '>
                    <div id='reverse' className=' mx-auto'>
                        <div className='imagem'>
                            <picture>
                                <source
                                    media="(max-width: 768px)"
                                    srcSet={novosDados?.images?.webp}
                                />
                                <img
                                    className="img"
                                    src={novosDados?.images?.png}
                                    alt={novosDados?.name}
                                />
                            </picture>

                        </div>
                        <ul className='select_crew d-flex align-items-center d-sm-none justify-content-center gap-4 mt-3'>
                            { tripulantes.map((name,i)=>(
                                <li
                                    key ={i}
                                    className={dados===name?'ativo':'inativo'} onClick={()=> setIndex(i)}>
                                </li>
                                ))
                                }
                        </ul>
                    </div>
                    <div className='col-md-6 mb-3 text-center mt-4 mx-auto text-lg-start'>
                        <p className='role mb-2'>{novosDados?.role}</p>
                        <h3 className='name w-90'>{novosDados?.name}</h3>
                        <p className='mt-1 text mx-auto mx-lg-0 mb-5'>{novosDados?.bio}</p>
                        <ul className='d-flex d-none  d-sm-flex select_crew gap-4 justify-content-center justify-content-lg-start '>
                            { tripulantes.map((name,i)=>(
                                <li
                                    key ={i}
                                    className={dados===name?'ativo':'inativo'} onClick={()=> setIndex(i)}>
                                </li>
                                ))
                                }
                        </ul>
                    </div>
                </div>
            </div>


        </section>
    )
} export default Crew