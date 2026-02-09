import { GrLocationPin } from "react-icons/gr"
import WeatherCard from "../components/WeatherCard"
import { useEffect, useState } from "react"
import { WiBarometer, WiHumidity } from "react-icons/wi"
import { FaWind } from "react-icons/fa"

type weatherData = {
    city: string
    temperature: number
    main: string
    description: string
    pressure: number
    humidity: number
    wind: number
    iconUrl: string
}

type getForecastData = {
  day: string;
  temperature: number;
  description: string;
  iconUrl: string;
}

const Home = () => {
   const [weather, setWeather] = useState<weatherData | null>(null);
   const [forecast, setForecast] = useState<getForecastData[]| null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");



   const getIP = async () :Promise<string> => {
  const res = await fetch("https://api.ipify.org?format=json");
  if (!res.ok) throw new Error("Failed to get IP");
  const data = await res.json();
  console.log(data)
  return data.ip; 
};


 const getLatandLon = async (ip: string) : Promise<{lat: number, lon: number, city: string}> => {
  const res = await fetch(`http://ip-api.com/json/${ip}?fields=status,city,lat,lon`);
 if (!res.ok) throw new Error("Failed to get location");
  const data = await res.json();
  console.log(data); 
  if (data.status !== "success") throw new Error(data.message || "Failed to get location");
  return { lat: data.lat, lon: data.lon, city: data.city };
};

const getWeather = async (lat: number, lon: number) : Promise<weatherData> => {
  const apiKey = import.meta.env.VITE_OWM_KEY;
  if (!apiKey) throw new Error("Missing VITE_OWM_KEY in .env");

  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
   if (!res.ok) throw new Error("Failed to get weather");

  const data = await res.json();
  console.log(data); 
  return {
    city : data.name,
    temperature: data.main.temp,
    main: data.weather[0].main,
    description: data.weather[0].description,
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    wind: data.wind.speed,
    iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  }

}

const getForecast = async (lat:number, lon:number) : Promise<getForecastData[]> =>{
  const apiKey = import.meta.env.VITE_OWM_KEY;
  if(!apiKey) throw new Error("Missing VITE_OWM_KEY in .env");

   const res= await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
  if(!res.ok) throw new Error("Failed to get forecast");

  const data=await res.json();
  console.log(data);
  
}

 useEffect(() => {
    const run = async () => {
      try {
        setLoading(true);
        setError("");

        const ip = await getIP();
        const { lat, lon } = await getLatandLon(ip);
        const w = await getWeather(lat, lon);
        const f = await getForecast(lat, lon);
        setForecast(f);

        setWeather(w);
      } catch (e: any) {
        setError(e?.message || "Something went wrong");
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    run();

  }
  
  , []);

  if (loading) return <div className="p-6 text-indigo-900 font-semibold">Loading...</div>;
  if (error) return <div className="p-6 text-red-600 font-semibold">{error}</div>;


  return (
    <div className="flex flex-col items-center justify-center gap-8">

        <div className="flex items-center justify-center text-indigo-900 gap-2">
                <GrLocationPin className="w-10 h-10" />
        <h2 className="text-5xl font-bold">{weather?.city}</h2>
        </div>

        <img src={weather?.iconUrl } alt="weather icon" className="w-50 h-50 object-contain" />

     <div className="flex flex-col gap-4 items-center justify-center">
      <div className="flex items-center gap-6 text-indigo-900">
  {/* Temperature */}
  <h3 className="text-6xl font-extrabold">
    {weather?.temperature}°
  </h3>

  {/* Details */}
  <div className="flex flex-col gap-2 text-sm">
    <h3 className="text-xl font-semibold capitalize">
      {weather?.main}
    </h3>
    <h4 className="text-lg font-semibold capitalize">
      {weather?.description}
    </h4>
  </div>
</div>
<div className="flex gap-4 text-indigo-900">
  <div className="flex items-center gap-1 bg-white/80 rounded-xl p-2 shadow-sm">
      <WiBarometer className="w-8 h-8" />
      <span className="font-medium">Pressure:</span>
      <span>{weather?.pressure} hPa</span>
    </div>

    <div className="flex items-center gap-1 bg-white/80 rounded-xl p-2 shadow-sm">
      <WiHumidity className="w-8 h-8" />
      <span className="font-medium">Humidity:</span>
      <span>{weather?.humidity}%</span>
    </div>

    <div className="flex items-center gap-1 bg-white/80 rounded-xl p-2 shadow-sm">
      <FaWind className="w-5 h-5" />
      <span className="font-medium">Wind:</span>
      <span>{weather?.wind} m/s</span>
    </div>

</div>

{/* <div className="flex items-center gap-2">
      <WiBarometer className="w-5 h-5" />
      <span className="font-medium">Pressure:</span>
      <span>{weather?.pressure} hPa</span>
    </div>

    <div className="flex items-center gap-2">
      <WiHumidity className="w-5 h-5" />
      <span className="font-medium">Humidity:</span>
      <span>{weather?.humidity}%</span>
    </div>

    <div className="flex items-center gap-2">
      <FaWind className="w-5 h-5" />
      <span className="font-medium">Wind:</span>
      <span>{weather?.wind} m/s</span>
    </div> */}
     </div>

        <div className="flex gap-4 w-full justify-center">
            <WeatherCard
  day="Today"
  icon={weather?.iconUrl ?? ""}
  temperature={`${weather?.temperature}°`}
  description={weather?.main ?? ""}
/>
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-6 shadow-md gap-2 grow">
            <h3 className="font-bold text-xl text-indigo-900">5-DAYS FORECAST</h3>
            <div className="flex gap-2 ">
<WeatherCard
  day="Today"
  icon={weather?.iconUrl ?? ""}
  temperature={`${weather?.temperature}°`}
  description={weather?.main ?? ""}
/>
<WeatherCard
  day="Today"
  icon={weather?.iconUrl ?? ""}
  temperature={`${weather?.temperature}°`}
  description={weather?.main ?? ""}
/>
<WeatherCard
  day="Today"
  icon={weather?.iconUrl ?? ""}
  temperature={`${weather?.temperature}°`}
  description={weather?.main ?? ""}
/>
<WeatherCard
  day="Today"
  icon={weather?.iconUrl ?? ""}
  temperature={`${weather?.temperature}°`}
  description={weather?.main ?? ""}
/>
<WeatherCard
  day="Today"
  icon={weather?.iconUrl ?? ""}
  temperature={`${weather?.temperature}°`}
  description={weather?.main ?? ""}
/>
            </div>

        </div>
        </div>
      
    </div>
  )
}

export default Home
