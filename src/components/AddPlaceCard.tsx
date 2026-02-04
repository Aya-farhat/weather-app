import { IoMdCloseCircle } from 'react-icons/io'
import {IoLocationSharp } from 'react-icons/io5'

type AddPlaceCardProps = {
  onClose: () => void;
};

const AddPlaceCard = ({ onClose }: AddPlaceCardProps) => {
  return (
    <div className='relative flex flex-col p-8 bg-indigo-900 text-white gap-6 rounded-2xl border-white border-2 items-center justify-center w-80'>
        <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-2 right-2 w-7 h-7 rounded-full  text-white flex items-center justify-center shadow hover:scale-105 transition cursor-pointer"
      >
        <IoMdCloseCircle size={20}/>

      </button> 

        <h3 className='text-2xl font-semibold'>
            Add a new place
        </h3>
        
<div className="relative w-full">
  <IoLocationSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-900 w-4 h-4" />

  <input
    type="text"
    placeholder="Search..."
    className="
      w-full pl-8 pr-4 py-1 rounded-full
      text-indigo-900 bg-white border border-white
      focus:outline-none
      placeholder:text-indigo-900 placeholder:text-md
    "
  />
</div>
<p className='text-md '>
Search your city to add
        </p>

      
    </div>
  )
}

export default AddPlaceCard
 