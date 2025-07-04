import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css'

function Layout(params) {
    const location = useLocation();
    useEffect(() => {
      document.body.className = '';
      switch (location.pathname) {
        case '/':
          document.body.classList.add('bg-home');
          break;
        case '/destination':
          document.body.classList.add('bg-destination');
          break;
        case '/crew':
          document.body.classList.add('bg-crew');
          break;
        case '/technology':
          document.body.classList.add('bg-technology');
          break;
        default:
          break;
      }
  }, [location.pathname]);
  return (
       <header className='header'>
        <nav className='navbar navbar-expand-sm'>
          <div className='container-fluid'>
            <img className='navbar-brand' src='/assets/shared/logo.svg'/>
            <button
            className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
              
              <img className='navbar-toggler-icon
              ' src='/assets/shared/icon-hamburger.svg'/>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <hr/>
              <ul className='navbar-nav ms-auto text-center gap-2'>
                <li className='nav-item'>
                  <Link className={location.pathname ==='/'? 'nav_ativo text-white nav_index': 'text-white nav_index'} to="/"><span className='span_lay'>00</span> Home</Link>
                </li>
                <li className='nav-item'>
                  <Link className={location.pathname ==='/destination'? 'nav_ativo text-white nav_index': 'text-white nav_index'}  to="destination"> <span className='span_lay'>01</span> Destination</Link>
                </li>
                <li className='nav-item'>
                  <Link className={location.pathname ==='/crew'? 'nav_ativo text-white nav_index': 'text-white nav_index'} to="crew"><span className='span_lay'>02</span> Crew</Link>
                </li>
                <li className='nav-item'>
                  <Link className={location.pathname ==='/technology'? 'nav_ativo text-white nav_index': 'text-white nav_index'} to="technology"> <span className='span_lay'>03</span> Technology</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  );

}
export default Layout

