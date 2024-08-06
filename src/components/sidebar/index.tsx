import { IoCloseOutline } from 'react-icons/io5';

interface SidebarProps {
  closeSidebar: () => void;
}

export function Sidebar({ closeSidebar }: SidebarProps) {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-zinc-700 z-10 select-none'>
      <div className='flex w-full justify-end p-4'>
        <IoCloseOutline
          onClick={() => closeSidebar()}
          size={35}
          className='text-white cursor-pointer'
        />
      </div>

      <div className='flex items-center h-full'>
        <ul className='flex flex-col gap-10 text-orange-400 text-4xl font-semibold text-center sidebar-font'>
          <li
            onClick={() => closeSidebar()}
            className='hover:text-orange-500 transition-colors'
          >
            <a href=''>Home</a>
          </li>
          <li
            onClick={() => closeSidebar()}
            className='hover:text-orange-500 transition-colors'
          >
            <a href='#sobre'>Sobre</a>
          </li>
          <li
            onClick={() => closeSidebar()}
            className='hover:text-orange-500 transition-colors'
          >
            <a href='#servicos'>Serviços</a>
          </li>
          <li
            onClick={() => closeSidebar()}
            className='hover:text-orange-500 transition-colors'
          >
            <a href='#contato'>Contato</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
