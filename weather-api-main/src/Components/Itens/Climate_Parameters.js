import './Climate_Parameters.css'
function Climate_Parameters({OnParameters,settings}) {
    
    return(
        <div className='d-flex gap-3 gap-md-2 gap-xxl-3 flex-wrap justify-content-center justify-content-lg-start justify-content-xxl-between  item_flex'>
            <div className='item_parameters'>
                <p>Feels Like</p>
                <span>{OnParameters.feelsLike ?? "_"}</span>
           </div>
            <div className='item_parameters'>
                <p>Humidity</p>
                <span>{OnParameters.humidity_day ?? "_"} </span>
            </div>
            <div className='item_parameters'>
                <p>Wind</p>
                {OnParameters.humidity_day?
                (
                    settings.wind === "kmh"?
                    (<span> { OnParameters.wind} km/h</span>)
                    : 
                    (<span> {OnParameters.wind} mph</span>)
                ):(<span>_</span>)}    
            </div>
            <div className='item_parameters'>
                <p>Precipitation</p>
                {OnParameters.humidity_day?
                (
                settings.precipitation ==='mm'?
                    ( <span>{OnParameters.precipitation} mm</span>
                    ):
                    (<span>{OnParameters.precipitation} in</span>
                    )
                ):(<span>_</span>)
                }
            </div>
        </div>
    )}export default Climate_Parameters