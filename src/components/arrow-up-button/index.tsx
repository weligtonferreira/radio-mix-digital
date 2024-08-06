import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export function ArrowUpButton() {
  const [scale, setScale] = useState('scale-0');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setScale('scale-100');
    }, 100);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <div className='fixed right-5 md:right-10 bottom-10'>
      <div
        onClick={() => window.scrollTo(0, 0)}
        className={`flex justify-center items-center m-auto z-10 bg-gray-600 text-white w-12 h-12 cursor-pointer drop-shadow-md rounded-full ${scale} hover:scale-125 transition duration-200`}
      >
        <FaArrowUp size={20} />
      </div>
    </div>
  );
}
