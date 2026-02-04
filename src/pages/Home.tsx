import { GrLocationPin } from "react-icons/gr"
import WeatherCard from "../components/WeatherCard"

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">

        <div className="flex items-center justify-center text-indigo-900 gap-2">
                <GrLocationPin className="w-10 h-10" />
        <h2 className="text-5xl font-bold">Cairo</h2>
        </div>

        <img src="/sun.png" alt="weather icon" className="w-100 h-100 object-contain" />

        <div className="flex items-center text-indigo-900">
            <h3 className="text-6xl font-extrabold">25°</h3>
            <div className="flex flex-col ml-4 text-md ">
                <h4 className="">Sunny</h4>
                <p>H:30° L:20°</p>
            </div>
        </div>

        <div className="flex gap-4 w-full justify-center">
            <WeatherCard
        day="Today"
        icon="/sun.png"
        temperature="25°"
        description="Sunny"
        />
        <div className="flex items-center justify-center bg-white rounded-2xl p-6 shadow-md gap-2 grow">
            <h3 className="font-bold text-xl text-indigo-900">6-DAYS FORECAST</h3>
        </div>
        </div>
      
    </div>
  )
}

export default Home
