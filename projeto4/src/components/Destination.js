import './Destination.css'
import useUserSlides from './useUserSlides'
import { useState, useEffect } from 'react'

function Destination() {
    const [destinoFinal, setDestinoFinal] = useState('moon')
    const [destinoAtual, setDestinoAtual] = useState("")

    const nomes =['moon','mars','europa','titan']
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(resposta => {
                const name = resposta.destinations.find(item =>
                    item.name.toLowerCase() === destinoFinal
                )
                setDestinoAtual(name)
            })
            .catch(e => console.log(e))
    }, [destinoFinal])

    const {index,setIndex,avancar,voltar}= useUserSlides(nomes, setDestinoFinal)

    return (
        <section id='section_destination' className='d-flex flex-wrap align-items-center justify-content-center '>
            <div id='section_div' className='d-flex  w-100 flex-column gap-5'>
                <h2 className='text-white '>
                    <span>01</span> Pick Your Destination
                </h2>
                <div className='planetas'>
                    {destinoAtual?.name?.toLowerCase() === 'mars' && (
                        <div>
                            <div className='orbita_fobos'>
                                <div id="fobos"></div>
                            </div>
                            <div className='orbita_deimos'>
                                <div id="deimos"></div>
                            </div>
                        </div>
                    )}

                  <picture>
                    <source
                        className="img_planeta"
                        media="(max-width: 768px)"
                        srcSet={destinoAtual?.images?.webp}
                    />
                    <img
                        className="img_planeta"
                        src={destinoAtual?.images?.png}
                        alt={destinoAtual?.name}
                    />
                    </picture>

                </div>
            </div>
            <div className='text-center div_textos'>
                <nav >
                    <ul className='navbar-nav d-flex flex-row gap-4 align-items-start nav-destino justify-content-center'>
                        <li className={destinoFinal === 'moon' ? 'nav-item linkAtivo' : 'nav-item'} onClick={() => setIndex(0)}>Moon</li>
                        <li className={destinoFinal === 'mars' ? 'nav-item linkAtivo' : 'nav-item'} onClick={() => setIndex(1)}>Mars</li>
                        <li className={destinoFinal === 'europa' ? 'nav-item linkAtivo' : 'nav-item'} onClick={() => setIndex(2)}>Europa</li>
                        <li className={destinoFinal === 'titan' ? 'nav-item linkAtivo' : 'nav-item'} onClick={() => setIndex(3)}>Titan</li>
                    </ul>
                </nav>
                <div id='textos' className='mt-4'>
                    <h3 className='text-center'>{destinoAtual?.name}</h3>
                    <p className='descricao_destination mx-auto'>
                        {destinoAtual?.description}
                    </p>
                    <hr className='mt-4'/>
                    <div className='info_destination'>
                        <div>
                            <p className='info_destination_p1'>Avg. distance</p>
                            <h4>{destinoAtual?.distance}</h4>
                        </div>
                        <div>
                            <p className='info_destination_p1'>Est. travel time</p>
                            <h4>{destinoAtual?.travel}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Destination
