import { useEffect, useState } from 'react';
import { HiOutlineSpeakerWave } from 'react-icons/hi2';
import { IoMenu } from 'react-icons/io5';
import { PiMusicNotesSimple } from 'react-icons/pi';
import { SlMicrophone } from 'react-icons/sl';

export function HomePage() {
  const [bgBlur, setBgBlur] = useState('');
  const [menuIsVisible, setMenuIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBgBlur('backdrop-blur-sm');
    }, 100);
  }, []);

  return (
    <>
      <header className='flex justify-center items-start header-image w-full h-[400px]'>
        <div
          className={`flex flex-col justify-center items-start h-full w-full ${bgBlur} transition duration-500`}
        >
          {menuIsVisible && (
            <nav className='hidden md:flex justify-center items-center py-6 w-full select-none'>
              <ul className='flex gap-10 text-lg font-bold'>
                <li className='text-zinc-200 hover:text-zinc-50'>
                  <a href=''>Home</a>
                </li>
                <li className='text-zinc-200 hover:text-zinc-50'>
                  <a href='#'>Sobre</a>
                </li>
                <li className='text-zinc-200 hover:text-zinc-50'>
                  <a href='#servicos'>Serviços</a>
                </li>
                <li className='text-zinc-200 hover:text-zinc-50'>
                  <a href='#contato'>Contato</a>
                </li>
              </ul>
            </nav>
          )}

          <IoMenu
            onClick={() => setMenuIsVisible(true)}
            className='right-5 top-5 text-zinc-200 hover:text-zinc-100 fixed cursor-pointer visible md:invisible transition-colors'
            size={45}
            height={150}
          />

          <div className='flex justify-start items-center w-full h-full'>
            <div className='flex flex-col gap-10 h-max mx-12 2xl:mx-28'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-50 border-zinc-50 drop-shadow-sm'>
                Rádio Mix Digital
              </h1>

              <p className='text-md sm:text-lg md:text-xl text-zinc-100 lg:max-w-[750px] drop-shadow-md'>
                Seja bem-vindo ao nosso portal oficial, aqui você fica por
                dentro de toda a nossa programação.
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className='flex flex-col justify-center items-center w-full h-auto'>
        <section id='servicos' className='w-full bg-gray-100'>
          <div className='flex flex-col justify-center items-center w-full py-16 space-y-14'>
            <h1 className='text-stone-900 text-[42px] font-bold tracking-tight'>
              Serviços
            </h1>

            <div className='flex flex-col lg:flex-row justify-center items-center w-full gap-6'>
              <div className='bg-white max-w-80 rounded-lg min-h-[380px] drop-shadow-xl hover:-translate-y-5 transition duration-300'>
                <div className='flex flex-col items-center py-16 px-6 gap-20'>
                  <SlMicrophone size={40} />

                  <div className='flex flex-col gap-6'>
                    <h2 className='text-stone-900 text-center text-lg font-bold'>
                      Gravação de propaganda
                    </h2>

                    <p className='text-stone-700 font-medium text-center'>
                      Gravamos vinhetas para eventos, festividades, propagandas
                      e etc.
                    </p>
                  </div>
                </div>
              </div>

              <div className='bg-white max-w-80 rounded-lg min-h-[380px] drop-shadow-xl hover:-translate-y-5 transition duration-300'>
                <div className='flex flex-col items-center py-16 px-6 gap-20'>
                  <HiOutlineSpeakerWave size={40} />

                  <div className='flex flex-col gap-6'>
                    <h2 className='text-stone-900 text-center text-lg font-bold'>
                      Divulgação de propaganda
                    </h2>

                    <p className='text-stone-700 font-medium text-center'>
                      Além de gravarmos a sua propaganda nós também fazemos a
                      divulgação através do carro de som.
                    </p>
                  </div>
                </div>
              </div>

              <div className='bg-white max-w-80 rounded-lg min-h-[380px] drop-shadow-xl hover:-translate-y-5 transition duration-300'>
                <div className='flex flex-col items-center py-16 px-6 gap-20'>
                  <PiMusicNotesSimple size={40} />

                  <div className='flex flex-col gap-6'>
                    <h2 className='text-stone-900 text-center text-lg font-bold'>
                      Gravação em estúdio
                    </h2>

                    <p className='text-stone-700 font-medium text-center'>
                      Se você deseja gravar uma música com qualidade de estúdio
                      nós temos a solução perfeita para você.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
