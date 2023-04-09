
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
import Loading from './components/Loading'

function App() {
//A los const los creo qui para que tengan existencia dentro de toda la funcion
  const [latlon, setLatlon] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  const [imgBack, setImgBack] = useState()
  useEffect(() => {
    const error= (err) =>{console.log(err)}
    
    const success= (pos) =>{ 
      const obj={
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
     setLatlon(obj)
    }
    
    navigator.geolocation.getCurrentPosition(success, error)
  },[])
  
useEffect(()=>{
  // `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${apikey}`para buscar por nombre - https://openweathermap.org/api/geocoding-api#direct_name
  if(latlon){
    const apikey="55b29c6ae236fc5bb67b0c2b95b51b86"
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${latlon.lat}&lon=${latlon.lon}&appid=${apikey}`

    axios.get(url)
    .then((res) =>{
       const celsius=((res.data.main.temp)-273.15).toFixed(1)
       const fahrenheit=(((celsius*9/5+32)).toFixed(1))

       console.log(celsius)
       console.log(fahrenheit)
       setTemperature({celsius,fahrenheit})
       console.log(temperature)
      setWeather(res.data)} )
    .catch((err)=> console.log(err))

  }
},[latlon])

// const appStyles={backgroundImage:`url('/img/fondo${numImages}.jpg')`};
const appStyles={
  backgroundImage:`url('/img/mountains-small.png')`};

console.log(weather)

  return (
    <div style={appStyles} className="app">
     { weather
         ?
        <WeatherCard 
          weather={weather}
          temperature={temperature}
        />
      
      : <Loading/>
     }

    </div>
  )
}

export default App
