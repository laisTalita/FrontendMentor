import Image_null from '../../assets/images/icon-error.svg'
import Retry from '../../assets/images/icon-retry.svg'
import './ApiError.css'

function ApiError({error, setError}) {

const handleRetry = ()=> setError(false);
if (!error) return null;

return(
<section className="w-100 something_Error mx-auto d-flex flex-column gap-3 align-items-center text-center">
     <img className='img_null' src={Image_null}/>
     <h1 className='mt-2'>Something went wrong</h1>
     <p className='paragraphy_error'>
          We couldn't connect to the server (API error).Please try again in a few moments 
     </p>
     <button onClick={handleRetry} className='text-light py-2 px-3 d-flex gap-2 '> 
          <img src={Retry} alt='retry'/><span>Retry</span>
     </button>
</section>
          
)}export default ApiError