import React from 'react'
import { FaCloudRain } from 'react-icons/fa'
import { WiCloud, WiDaySunny } from 'react-icons/wi'
const WeatherCard = ({ city, temp, description }) => {
  const getWeatherIcon = (description) => {
    if (description.includes("sun")) {
      return <WiDaySunny className='text-yellow-500 text-5xl' />
    } else if (description.includes("rain")) {
      return <FaCloudRain className='text-blue-500 text-5xl' />
    } else if (description.includes("cluod")) {
      return <WiCloud className='text-gray-500 text-5xl' />
    } else {
      return <WiDaySunny className='text-yellow-500 text-5xl' />

    }
  }
  return (
    <div className='bg-white p-4 shadow rounded-lg flex items-center'>
      <div className='mr-5'>{getWeatherIcon(description)}</div>
      <div className='border-l-2 pl-5'>
        <h2 className='text-xl font-bold '>{city}</h2>
        <p className='text-gray-600 capitalize'>{description}</p>
        <p className='text-2xl font-semibold'>{temp}'C</p>
      </div>
    </div>
  )
}

export default WeatherCard