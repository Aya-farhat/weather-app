import { BsSendFill } from 'react-icons/bs'
import { FaGlobeAmericas } from 'react-icons/fa'
import { IoSearchSharp } from 'react-icons/io5'
import { useNavigate, useLocation } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeIcon = (path: string) =>
    `cursor-pointer transition-colors duration-200 ${location.pathname === path ? 'text-white' : 'text-gray-400'}`;
  return (
    <footer className='h-18 bg-indigo-900 flex items-center justify-center'>
      <div className='flex gap-8'>
        <BsSendFill size={22} onClick={() => navigate('/')} className={activeIcon('/')} />
        <IoSearchSharp size={22} onClick={() => navigate('/search')} className={activeIcon('/search')} />
        <FaGlobeAmericas size={22} onClick={() => navigate('/global')} className={activeIcon('/global')} />
      </div>
    </footer>
  );
}

export default Footer
