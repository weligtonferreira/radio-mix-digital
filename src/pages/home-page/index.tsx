import { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { HiOutlineSpeakerWave } from 'react-icons/hi2';
import { PiMusicNotesSimple } from 'react-icons/pi';
import { SlMicrophone } from 'react-icons/sl';

import { Header } from '../../components/header';
import { Sidebar } from '../../components/sidebar';
import { Footer } from '../../components/footer';
import { ArrowUpButton } from '../../components/arrow-up-button';

export function HomePage() {
  const [sidebarIsVisible, setSidebarIsVisible] = useState(false);
  const [isArrowUpButtonVisible, setIsArrowUpButtonVisible] = useState(false);

  function openSidebar() {
    setSidebarIsVisible(true);
  }

  function closeSidebar() {
    setSidebarIsVisible(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scroolPosition = window.scrollY;
      const targetPosition = 600;

      if (scroolPosition >= targetPosition) {
        setIsArrowUpButtonVisible(true);
      } else {
        setIsArrowUpButtonVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const musesElement = document.querySelector('.musesStyleReset');

    if (musesElement) {
      if (sidebarIsVisible) {
        musesElement.classList.add('musesStyleReset--hidden');
      } else {
        musesElement.classList.remove('musesStyleReset--hidden');
      }
    }
  }, [sidebarIsVisible]);

  return (
    <>
      {sidebarIsVisible ? (
        <Sidebar closeSidebar={closeSidebar} />
      ) : (
        <>
          <Header openSidebar={openSidebar} />

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
                    Estamos situados na cidade de São José de Piranhas -
                    Paraíba. <br />
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
                          Gravamos vinhetas para eventos, festividades,
                          propagandas e etc.
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
                          Além de gravarmos a sua propaganda nós também fazemos
                          a divulgação através do carro de som.
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
                          Se você deseja gravar uma música com qualidade de
                          estúdio nós temos a solução perfeita para você.
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
                      <a
                        href='https://www.youtube.com/@eudinho29'
                        target='_blank'
                      >
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

          {isArrowUpButtonVisible && <ArrowUpButton />}

          <Footer />
        </>
      )}
    </>
  );
}
