import type { ReactNode } from "react";

type BasicCardProps = {
    icon: ReactNode;
    title: string;
    value: string;
}
const BasicCard = ({ icon, title, value }: BasicCardProps) => {
  return (
    <div className="flex flex-col bg-indigo-900 p-4 text-white rounded-2xl gap-1">
        <div className="text-xl">{icon}</div>
        <h3 className="text-md">{title}</h3>
        <span className="text-md">{value}</span>

      
    </div>
  )
}

export default BasicCard
