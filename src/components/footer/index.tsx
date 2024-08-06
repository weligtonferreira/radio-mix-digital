export function Footer() {
  return (
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

      <div className='w-full flex flex-col lg:flex-row justify-center items-center md:gap-1 px-14 py-8'>
        <p className='text-center text-xs md:text-sm lg:text-base'>
          Copyright © 2024 Radio Mix Digital - Todos os direitos reservados.
        </p>
        <p className='text-center text-xs md:text-sm lg:text-base'>
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
  );
}
