import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return(
       <section className="text-center d-flex flex-wrap  align-items-center p-1">
        <div className="text-white home_div">
            <p className='p_home'>So, you want to travel to </p>
            <h1>Space</h1>
            <p className='descricao_home'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! </p>
        </div>
            <div>
                <div className='explore d-flex align-items-center justify-content-center mt-5'>
                    <Link to="./destination" className='text-dark text-decoration-none'>Explore</Link>
                </div>
            </div>
       </section> 
    )
} export default Home