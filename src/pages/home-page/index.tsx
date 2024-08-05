import { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
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
          )}

          <IoMenu
            onClick={() => setMenuIsVisible(true)}
            className='right-5 top-5 text-zinc-200 hover:text-zinc-100 fixed cursor-pointer visible md:invisible transition-colors'
            size={45}
            height={150}
          />

          <div className='flex justify-between items-start md:items-center w-full h-full'>
            <div className='flex flex-col gap-10 h-max mx-12 2xl:mx-28'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl mt-8 font-bold text-zinc-50 border-zinc-50 drop-shadow-sm'>
                Rádio Mix Digital
              </h1>

              <p className='text-md sm:text-lg md:text-xl text-zinc-100 lg:max-w-[750px] drop-shadow-md'>
                Seja bem-vindo ao nosso portal oficial, aqui você fica por
                dentro de toda a nossa programação.
              </p>
            </div>

            <div className='logo-img'>
              <img
                src='/radio-mix-digital-logo.jpeg'
                height={225}
                width={225}
                alt='Radio Mix Digital'
                className='rounded-3xl drop-shadow-lg mr-24 hidden lg:block'
              />
            </div>
          </div>
        </div>
      </header>

      <main className='flex flex-col justify-center items-center w-full h-auto'>
        <section className='w-full h-[220px] flex justify-center items-end'></section>

        <div className='flex justify-center bg-white h-full w-full'>
          <div className='h-px w-11/12 bg-gray-300'></div>
        </div>

        <section id='sobre' className='w-full'>
          <div className='flex flex-col justify-center items-center w-full pt-16 pb-28 px-8 space-y-24'>
            <div className='flex flex-col justify-center items-center gap-6'>
              <h1 className='text-stone-900 text-[42px] font-bold tracking-tight'>
                Sobre
              </h1>

              <p className='text-center'>
                Estamos situados na cidade de São José de Piranhas - Paraíba.{' '}
                <br />
                Contamos com uma programação AO VIVO 24h.
              </p>
            </div>

            <div className='flex flex-wrap justify-center gap-12'>
              <div>
                <img
                  src='/condenser-microphone.webp'
                  alt='Microfone condensador profissional'
                  className='drop-shadow-lg'
                />
              </div>

              <div className='lg:translate-y-10'>
                <img src='/daw.webp' alt='Daw' className='drop-shadow-lg' />
              </div>

              <div>
                <img
                  src='/soundboard.webp'
                  alt='Mesa de som'
                  className='drop-shadow-lg'
                />
              </div>
            </div>
          </div>
        </section>

        <section id='servicos' className='w-full bg-gray-100'>
          <div className='flex flex-col justify-center items-center w-full px-10 py-16 space-y-14'>
            <h1 className='text-stone-900 text-[42px] font-bold tracking-tight'>
              Serviços
            </h1>

            <div className='flex flex-wrap justify-center items-center w-full gap-8'>
              <div className='bg-white max-w-80 rounded-lg min-h-[380px] drop-shadow-xl lg:hover:-translate-y-5 transition duration-300'>
                <div className='flex flex-col items-center py-16 px-6 gap-20 select-none'>
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

              <div className='bg-white max-w-80 rounded-lg min-h-[380px] drop-shadow-xl lg:hover:-translate-y-5 transition duration-300'>
                <div className='flex flex-col items-center py-16 px-6 gap-20 select-none'>
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

              <div className='bg-white max-w-80 rounded-lg min-h-[380px] drop-shadow-xl lg:hover:-translate-y-5 transition duration-300'>
                <div className='flex flex-col items-center py-16 px-6 gap-20 select-none'>
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

        <section id='contato' className='w-full'>
          <div className='flex flex-col lg:flex-row justify-center items-center px-10 py-20 gap-20 lg:gap-10'>
            <img
              src='/studio-eudinho-1.jpeg'
              alt='Stúdio Eudinho Gravações'
              className='rounded-xl w-[350px] lg:w-[550px]'
            />

            <div className='flex flex-col gap-8'>
              <h1 className='text-stone-800 text-[30px] md:text-[38px] lg:text-[48px] text-center lg:text-left font-bold tracking-tight'>
                Entre em contato
              </h1>

              <p className='text-stone-800 font-medium max-w-96 text-center lg:text-left'>
                Fale conosco através de nossas redes sociais abaixo:
              </p>

              <div className='flex justify-center lg:justify-normal gap-2'>
                <div>
                  <a
                    href='https://www.instagram.com/eudinho29/'
                    target='_blank'
                  >
                    <FaInstagram
                      size={28}
                      className='hover:text-pink-600 transition-colors'
                    />
                  </a>
                </div>
                <div>
                  <a
                    href='https://www.facebook.com/people/Francieldo-Ferreira/100081036035738/'
                    target='_blank'
                  >
                    <FaFacebook
                      size={28}
                      className='hover:text-sky-700 transition-colors'
                    />
                  </a>
                </div>
                <div>
                  <a href='https://www.youtube.com/@eudinho29' target='_blank'>
                    <FaYoutube
                      size={28}
                      className='hover:text-red-600 transition-colors'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className='w-full'>
        <div className='flex justify-center h-full w-full'>
          <div className='h-px w-11/12 bg-gray-300'></div>
        </div>

        <div className='py-10 mx-14'>
          <div className='flex flex-col md:flex-row justify-around items-start gap-6 md:gap-0'>
            <div className='flex flex-col gap-4'>
              <h3 className='text-2xl'>Local</h3>

              <p className='max-w-44'>
                Rua Antônio Tavares de Souza, 74 - Santo Antônio <br /> São José
                de Piranhas - PB 58940-000, Brasil
              </p>
            </div>

            <div className='flex flex-col gap-4'>
              <h3 className='text-2xl'>Horário</h3>

              <p>Seg. a Sex.: 07:00h às 18:00h</p>
            </div>

            <div className='flex flex-col gap-4'>
              <h3 className='text-2xl'>Contato</h3>

              <div className='flex flex-col gap-2'>
                <p className='hover:underline'>
                  <a href='tel:+5583993740328'>(83) 99374-0328</a>
                </p>
                <p className='hover:underline'>
                  <a href='mailto:eudinho29@gmail.com'>eudinho29@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center h-full w-full'>
          <div className='h-px w-11/12 bg-gray-300'></div>
        </div>

        <div className='flex flex-col justify-center items-center w-full px-14 py-8 gap-5'>
          <p className='text-center text-xs md:text-sm lg:text-base'>
            Copyright © 2024 Radio Mix Digital - Todos os direitos reservados.
            Desenvolvido por{' '}
            <span className='font-bold opacity-80 hover:opacity-100 transition-all'>
              <a
                href='https://www.linkedin.com/in/weligtonferreira/'
                target='_blank'
              >
                Weligton Ferreira
              </a>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}
