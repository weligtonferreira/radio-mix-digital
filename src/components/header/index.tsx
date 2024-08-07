import { useEffect, useState } from 'react';
import { IoMenu } from 'react-icons/io5';

import './styles.css';

interface HeaderProps {
  openSidebar: () => void;
}

export function Header({ openSidebar }: HeaderProps) {
  const [bgBlur, setBgBlur] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setBgBlur('backdrop-blur-sm');
    }, 100);
  }, []);

  return (
    <header className='flex justify-center items-start header-image w-full h-[300px] md:h-[400px]'>
      <div
        className={`flex flex-col justify-center items-start h-full w-full ${bgBlur} transition duration-500`}
      >
        <nav className='hidden md:flex justify-center items-center py-6 w-full select-none'>
          <ul className='flex gap-10 text-lg font-bold'>
            <li className='text-zinc-200 hover:text-zinc-50'>
              <a href=''>Home</a>
            </li>
            <li className='text-zinc-200 hover:text-zinc-50'>
              <a href='#sobre'>Sobre</a>
            </li>
            <li className='text-zinc-200 hover:text-zinc-50'>
              <a href='#servicos'>Serviços</a>
            </li>
            <li className='text-zinc-200 hover:text-zinc-50'>
              <a href='#contato'>Contato</a>
            </li>
          </ul>
        </nav>

        <IoMenu
          onClick={() => openSidebar()}
          className='right-5 top-5 text-zinc-200 hover:text-zinc-100 fixed cursor-pointer md:hidden transition-colors'
          size={45}
          height={150}
        />

        <div className='flex justify-between items-center w-full h-full'>
          <div className='flex flex-col gap-10 h-max mx-12 2xl:mx-28'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl mt-6 font-bold text-zinc-50 border-zinc-50 drop-shadow-sm'>
              Rádio Mix Digital
            </h1>

            <p className='text-md sm:text-lg md:text-xl text-zinc-100 lg:max-w-[750px] drop-shadow-md'>
              Seja bem-vindo ao nosso portal oficial, aqui você fica por dentro
              de toda a nossa programação.
            </p>
          </div>

          <div>
            <img
              src='/radio-mix-digital-logo.webp'
              height={250}
              width={250}
              alt='Radio Mix Digital'
              className='rounded-3xl drop-shadow-lg mr-24 hidden lg:block'
            />
          </div>
        </div>
      </div>
    </header>
  );
}
