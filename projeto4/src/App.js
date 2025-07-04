import{BrowserRouter as Router, Routes, Route, Link}
from 'react-router-dom';
import Home from './components/Home'
import Crew from './components/Crew'
import Destination from './components/Destination'
import Technology from './components/Technology'
import Layout from './components/Layout';


function App() {
  return (
    <>
    <Router>
      <div className='app-container'>
        <Layout/>
        <main className='d-flex align-items-center justify-content-center'>
            <Routes>
              <Route index element={<Home/>}/>
              <Route path="/destination" element={<Destination/>}/>
              <Route path="/crew" element={<Crew/>}/>
              <Route path="/technology" element={<Technology/>}/>
            </Routes>
        </main>
        <footer id='footer' className=' mt-5 text-center '> 
              <p className='pt-2 w-75 mx-auto'> Challenge by <a className='text-white' href="https://www.frontendmentor.io" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. Coded by <a className='text-white' href="https://github.com/laisTalita" target='blank'><span className='m-1'>Lais Talita.</span></a></p>
          </footer>
      </div>

    </Router>

    </>
  );
}



export default App;
