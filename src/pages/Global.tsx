import { useState } from 'react'
import CityCard from '../components/CityCard'
import { IoIosAddCircle } from 'react-icons/io'
import AddPlaceCard from '../components/AddPlaceCard';

const Global = () => {
const[open,setOpen]=useState(false);
  return (
    <div className='relative flex flex-col gap-8'>
        <div className='flex items-center justify-between text-indigo-900'>
            <h3 className='text-xl font-semibold '>
                February 4, 2026
            </h3>
            <button className='cursor-pointer'
            onClick={()=>setOpen(true)}>
                <IoIosAddCircle className='w-6 h-6' />
            </button>
        </div>
        {open && (
          <div className="absolute left-1/2 top-0 -translate-x-1/2 z-20">
            <AddPlaceCard onClose={() => setOpen(false)}/>
          </div>
        )}

        <div className='grid grid-cols-2 gap-4'>
        <CityCard
        cityName="New York"
        temperature="15°C"
        icon="/cloud.png"
        />
        <CityCard
        cityName="Paris"
        temperature="10°C"
        icon="/rain.png"
        />
        <CityCard
        cityName="Tokyo"
        temperature="40°C"
        icon="/sun.png"
        />
        <CityCard
        cityName="London"
        temperature="9°C"
        icon="/snow.png"
        />
        <CityCard
        cityName="New York"
        temperature="15°C"
        icon="/mist.png"
        />
      
    </div>

    </div>
  )
}

export default Global
