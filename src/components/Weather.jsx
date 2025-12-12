import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import weatherBanner from '../assets/weather-banner.png'
import WeatherCard from './WeatherCard'
import { clearWeatherData, fetchWeatherData } from '../redux/features/weather/weatherSlice'
const Weather = () => {
  const {weatherData, loading, error} = useSelector((state)=> state.weather)
  const dispatch = useDispatch()

  const [city, setCity] = useState('')
  const handleFetchWeather = (e)=>{
    e.preventDefault()
    console.log('fetching weather data');
    if(city.trim() === "") return;
    dispatch(fetchWeatherData(city))
    setCity('')
  }
  
  return (
    <div className='bg-blue-300'>
      <div className='px-6 py-20 container mx-auto min-h-screen'>
        <h1 className='text-3xl md:text-5xl font-bold text-center mb-3'>Weather Dashboard</h1>
        <div className='flex items-center justify-center'>
          <p className='bg-red-500 text-white inline-flex px-2 text-center mb-6'>fetchs weather data from different cities using redux toolkit nd redux thunk</p>
        </div>
        <div className='w-full flex justify-center'>
          <img src={weatherBanner} alt="weather banner" className='' />
        </div>

        {/* search weather */}
        <form onSubmit={handleFetchWeather} className='my-6 flex flex-wrap gap-2 md:gap-4'>
          <input value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder='Enter City Name' className='grow p-2 border rounded'/>
          <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>Search Weather</button>
          <button onClick={() => dispatch(clearWeatherData())} type='button' className='px-4 py-2 bg-red-500 text-white hover:bg-red-600'>Clear</button>
        </form>

        {/* weather card with loading and error */}
        {loading && <p className='text-center text-blue-50'>loading....</p>}
        {error && <p className='text-center text-red-500'>{error}</p>}

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {
            weatherData.map((data, index)=>(
              <WeatherCard key={index} 
              city={data.name} 
              temp={data.main.temp} 
              description={data.weather[0].description}/>
            ))
          }
        </div>







      </div>
    </div>
  )
}

export default Weather