import { useEffect, useState } from 'react';

export function HomePage() {
  const [bgBlur, setBgBlur] = useState('');

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
          <nav className='flex justify-evenly items-center py-6 w-full'>
            {/* <h1 className=''>Rádio Mix Digital</h1> */}

            <ul className='flex gap-10 text-lg font-bold'>
              <li className='text-zinc-200 hover:text-zinc-50'>
                <a href='#'>Home</a>
              </li>
              <li className='text-zinc-200 hover:text-zinc-50'>
                <a href='#'>Sobre</a>
              </li>
              <li className='text-zinc-200 hover:text-zinc-50'>
                <a href='#'>Serviços</a>
              </li>
              <li className='text-zinc-200 hover:text-zinc-50'>
                <a href='#'>Contato</a>
              </li>
            </ul>
          </nav>

          <div className='flex justify-center items-center space-y-20 h-full'>
            <div className='flex flex-col justify-center items-start gap-14 h-max mx-12 2xl:mx-28'>
              <h1 className='text-6xl font-bold text-zinc-50 border-zinc-50 drop-shadow-sm'>
                Rádio Mix Digital
              </h1>

              <p className='text-xl text-zinc-100 max-w-[750px]'>
                Seja bem-vindo ao nosso portal oficial, aqui você fica por
                dentro de toda a nossa programação.
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className='flex justify-center items-center w-full h-auto'>
        <section>
          <div className=''></div>
        </section>
      </main>
    </>
  );
}
