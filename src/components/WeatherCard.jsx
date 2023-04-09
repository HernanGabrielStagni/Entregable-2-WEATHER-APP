import React, { useState } from 'react'

const WeatherCard = ({weather,temperature}) => {


const [isCelsius, setIsCelsius] = useState(true)
const handleChangeTemperature=()=>{
    setIsCelsius(!isCelsius)
  }


  return (
    <article className='card'>
      
             
        
            <header className='card__titles'>
                <h1> * WEATHER *  App </h1>
                <h2>{weather?.name} |  {weather?.sys.country}  </h2>
            </header>
                
            
            
            <section className='card__body'>
                <header className='card__body--icon-temp'>
                     <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
                      
                       <footer>
                            {isCelsius
                            ? <h2><span>{temperature?.celsius} C°</span></h2>
                            : <h2><span>{temperature?.fahrenheit} °F</span></h2>
                            }
                            
                            <button onClick={handleChangeTemperature}>Change to {isCelsius ? "°F" : "°C"}</button>
                       </footer>
                </header> 
                
                <article className='card__body-info'>
                     
                    
                    <ul>
                          {<h3> * Soleado * {weather?.weather.description}</h3>}
                            <li><span>Nubocidad: {weather?.clouds.all} %</span></li>
                            <li><span>Vel./viento: {weather?.wind.speed} m/s </span></li>
                            {/* <li><span>Direc./viento: {weather?.wind.deg}°</span></li> */}
                            {/* <li><span>Sens. Termica:{weather?.main.feels_like} °K</span></li> */}
                            <li><span>Humedad:{weather?.main.humidity} %</span></li>
                            <li><span>-------------</span></li>
                            <li><span>Visib.: {weather?.visibility} mts.</span></li>
                            <li><span>Presion: {weather?.main.pressure} hPa </span></li> 
                    </ul>
                
                </article>

            </section>
            
      
    </article>
  )
}

export default WeatherCard