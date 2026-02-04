import React from 'react'
type Props = {
    day: string;
    icon?: string;
    temperature?: string;
    description?: string;
}

const WeatherCard = ({ day, icon, temperature, description }: Props) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-md gap-2 text-indigo-900 w-32">
        <h3 className="font-bold text-xl">{day}</h3>
        <img src={icon} alt="weather icon" className="w-12 h-12" />
        <h4 className="font-semibold text-lg">{temperature}</h4>
        <p className="text-sm">{description}</p>

      
    </div>
  )
}

export default WeatherCard
