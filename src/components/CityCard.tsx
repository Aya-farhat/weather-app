type Props = {
    cityName: string;
    temperature: string;
    icon: string;
}
const CityCard = ({ cityName, temperature, icon }: Props) => {
  return (
    <div className="flex bg-indigo-900 p-6 rounded-4xl text-white items-center justify-between w-90">
        <div className="flex flex-col gap-2">
            <h3 className="font-meduim text-xl">{cityName}</h3>
            <h4 className="font-bold text-4xl">{temperature}</h4>
        </div>

        <img src={icon} alt="weather icon" className="w-32 h-32" />

        </div>
      
 
  )
}

export default CityCard
