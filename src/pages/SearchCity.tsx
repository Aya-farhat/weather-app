import { IoLocationSharp } from 'react-icons/io5'
import CityCard from '../components/CityCard'
import BasicCard from '../components/BasicCard'
import { FaWind } from 'react-icons/fa6'

const SearchCity = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
        <h2 className='text-2xl font-bold text-indigo-900'>Search For City</h2>

        <div className="relative w-90">
          <IoLocationSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-900 w-4 h-4" />
        
          <input
            type="text"
            placeholder="Search..."
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
        cityName="New York"
        temperature="15°C"
        icon="/cloud.png"
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
