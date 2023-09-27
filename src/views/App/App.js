import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import cloud from './images/cloudy.png';
export default function App() {

  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("Pune");
  const [weatherDescription, setWeatherDescription] = useState("");

 async function loadWeatherData(){

    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6c20b7414d083408cadcb2f16f510ca4`)
      setWeatherData(response.data);
    }
    catch(error){
      console.log(error);
    }
   

   
  //  console.log(response.data);
  }


  useEffect(() => {
    loadWeatherData();
  }, [])

  useEffect(() => {
    loadWeatherData();
  }, [city])

  useEffect(() => {
   setWeatherDescription(`${weatherData?.weather?.[0]?.main} (${weatherData?.weather?.[0]?.description})`)
  }, [weatherData])


  return (
    <div>

      <h1 className='name'>Weather App  </h1>

      <input type="text" value={city} onChange={(e) =>{
        setCity(e.target.value);
      }}/>
       <div className='card'>
      <p className='city'>City: {weatherData?.name}</p>

      <p>Temperature: {(weatherData?.main?.temp - 273).toFixed(2)} °C</p>
      <p className='emoji'><img src={cloud}/></p>

      <p>Description: {weatherDescription}</p>

      <p>Visibility: {weatherData?.visibility} meters</p>
      </div>
    </div>
  )
}

