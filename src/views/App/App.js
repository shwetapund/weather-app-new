import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import cloud from './images/Images/clouds.png';
export default function App() {

  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("Pune");
  const [weatherDescription, setWeatherDescription] = useState("");

  async function loadWeatherData() {

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a98a72af7abee04e9ac0e54dc987e8b9 `)
      setWeatherData(response.data);
    }
    catch (error) {
      console.log(error);
    }



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
    <>

      <div className='input'>
        <h1 className='name'>Weather App  </h1>
      </div>

      <p className='input-box'>
        <input type="text" value={city} onChange={(e) => {
          setCity(e.target.value);
        }} />
      </p>

      <div className='card'>
        <p className='emoji'><img src={cloud} /></p>
        <div>
          <p className='city'>City: {weatherData?.name}</p>
          <p>Temperature: {(weatherData?.main?.temp - 273).toFixed(1)} °C</p>
        </div>

      </div>


      <div className='description-container'>
        <div className='decsription-sub-container'>
          <p><span className='title'>Description</span>
            <br /><br />{weatherDescription}</p>
        </div>

        <div className='decsription-sub-container'>
          <p> <span className='title'>Visibility</span>
            <br /><br />{weatherData?.visibility} meters</p>
        </div>
        <div className='decsription-sub-container'>
          <p> <span className='title'>Humidity</span>
            <br /><br />{weatherData?.main?.humidity}</p>
        </div>
      </div>

    </>
  )
}

