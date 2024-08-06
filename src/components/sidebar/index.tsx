import { useEffect, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

interface SidebarProps {
  closeSidebar: () => void;
}

export function Sidebar({ closeSidebar }: SidebarProps) {
  const [translateX, setTranslateX] = useState('translate-x-full');

  useEffect(() => {
    setTimeout(() => {
      setTranslateX('translate-x-0');
    }, 100);
  });

  return (
    <div
      className={`fixed w-full h-screen bg-transparent z-10 select-none ${translateX} translate-x transition duration-500 bg-zinc-900/70 backdrop-blur-sm`}
    >
      <div className='fixed top-10 right-10'>
        <IoCloseOutline
          onClick={() => closeSidebar()}
          size={35}
          className='text-white cursor-pointer'
        />
      </div>

      <div className='flex justify-center items-center h-full'>
        <ul className='flex flex-col gap-10 text-sky-400 text-4xl font-semibold text-center sidebar-font'>
          <li
            onClick={() => closeSidebar()}
            className='hover:text-zinc-100 drop-shadow-md transition-colors'
          >
            <a href=''>Home</a>
          </li>
          <li
            onClick={() => closeSidebar()}
            className='hover:text-zinc-100 drop-shadow-md transition-colors'
          >
            <a href='#sobre'>Sobre</a>
          </li>
          <li
            onClick={() => closeSidebar()}
            className='hover:text-zinc-100 drop-shadow-md transition-colors'
          >
            <a href='#servicos'>Serviços</a>
          </li>
          <li
            onClick={() => closeSidebar()}
            className='hover:text-zinc-100 drop-shadow-md transition-colors'
          >
            <a href='#contato'>Contato</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
