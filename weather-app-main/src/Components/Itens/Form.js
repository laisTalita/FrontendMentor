import { useState } from "react";
import './Form.css'
import LoadingIcon from '../../assets/images/icon-loading.svg';

function Form({onSearch,Sloading,loading}) {

 const [value, setValue] = useState('')
 
 const handle_city = (e)=>{
    e.preventDefault();
    const city = value.trim()
    if (city ==="") return
    onSearch(city)
    Sloading(true)
    setValue("")
}
return(
    <section>
        <form onSubmit={handle_city} action="" 
            className="d-flex form_ flex-wrap gap-3 mt-3 pt-3 justify-content-center align-items-start">
            <div className="form_div d-flex justify-content-center position-relative">
                <input className="form_component component_1" type="text" value={value} placeholder="Search for a place..." onChange={(e)=> setValue(e.target.value)}/>
                {loading &&(
                    <div className="d-flex align-items-center justify-content-center gap-2 p-2 loading form_component position-absolute z-2">
                        <img src={LoadingIcon} alt="loading"/>
                        <p className="p-0 m-0">Search in progress</p>
                    </div>
                )}
            </div>
            <button className="form_component component_button" type="submit">Search</button>
        </form>
    </section>
)}export default Form