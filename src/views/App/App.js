import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
export default function App() {

  const [weatherData, setWeatherData] = useState({});

 async function loadWeatherData(){

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=6c20b7414d083408cadcb2f16f510ca4`)

    setWeatherData(response.data);
   
  }


  useEffect(() => {
    loadWeatherData();
  }, [])
  return (
    <div>
      <h1>Weather App</h1>
      <p>City: {weatherData?.name}</p>
      <p>Temperature: {(weatherData?.main?.temp - 273).toFixed(2)}</p>

    </div>
  )
}

