import { IoLocationSharp } from 'react-icons/io5'
import CityCard from '../components/CityCard'
import BasicCard from '../components/BasicCard'
import { FaWind } from 'react-icons/fa6'
import { useEffect, useState } from 'react'

type weatherData = {
  name: string;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
};

const SearchCity = () => {
  const [city, setCity]=useState("");
  const [weather,setWeather]=useState<weatherData | null>(null);
  const[error, setError]=useState("");
  const[loading, setLoading]=useState(false);

  const getCityWeather = async () => {
   const apiKey = import.meta.env.VITE_OWM_KEY;
    if (!apiKey) throw new Error("Missing VITE_OWM_KEY in .env");

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    if (!res.ok) {
      setError("Failed to get weather for the city. Please check the city name and try again.");
      setWeather(null);
      return;
    }
    const data = await res.json();
    console.log(data);
    setWeather(data);
    setError("");
  }


  return (
    <div className='flex flex-col items-center justify-center gap-4'>
        <h2 className='text-2xl font-bold text-indigo-900'>Search For City</h2>

        <div className="relative w-90">
          <IoLocationSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-900 w-4 h-4" />
        
          <input
            type="text"
            placeholder="Search..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
             onKeyDown={(e) => {
    if (e.key === "Enter") {
      getCityWeather();
    }
  }}
            className="
              w-full pl-8 pr-4 py-2 rounded-full
              text-indigo-900 bg-white shadow-md shadow-indigo-900/60
              focus:outline-none
              placeholder:text-indigo-900 placeholder:text-md
            "
          />
        </div>

        <div className='flex flex-col gap-4 mt-10'>
            <CityCard
        cityName={weather?.name || ""}
        temperature={weather?.main?.temp ? `${weather.main.temp}°C` : ""}
        icon={weather?.weather?[0]?.icon ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png` : ""}
        />
        <div className='grid grid-cols-3 gap-2'>
            <BasicCard
            icon= {<FaWind />}
            title="Wind"
            value="3 m/s"
            />
            <BasicCard
            icon= {<FaWind />}
            title="Wind"
            value="3 m/s"
            />
            <BasicCard
            icon= {<FaWind />}
            title="Wind"
            value="3 m/s"
            />
            <BasicCard
            icon= {<FaWind />}
            title="Wind"
            value="3 m/s"
            />
              


        </div>

        </div>
      
    </div>
  )
}

export default SearchCity
