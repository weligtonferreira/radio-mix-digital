import './styles.css';

export function NotFoundPage() {
  return (
    <>
      <div className='flex justify-center items-center w-screen h-screen text-center background-image'>
        <div className='w-full h-full backdrop-blur-sm flex justify-center items-center'>
          <div className='flex flex-col gap-5'>
            <h1 className='text-white text-4xl'>
              Não encontrou o que você queria?
            </h1>
            <p className='text-white text-xl'>
              <a
                className='font-semibold text-sky-300 opacity-100 hover:opacity-90 transition-all'
                href='/'
              >
                Clique aqui
              </a>{' '}
              para voltar ao início
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
