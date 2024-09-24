import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export function ArrowUpButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scaleClass, setScaleClass] = useState('scale-0');
  const [opacityClass, setOpacityClass] = useState('opacity-0');

  useEffect(() => {
    if (isVisible) {
      setScaleClass('scale-100');
      setOpacityClass('opacity-100');
    } else {
      setScaleClass('scale-0');
      setOpacityClass('opacity-0');
    }
  }, [isVisible]);

  useEffect(() => {
    const handleScroll = () => {
      const scroolPosition = window.scrollY;
      const targetPosition = 600;

      if (scroolPosition >= targetPosition) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='fixed right-5 md:right-10 bottom-10'>
      <div
        onClick={() => window.scrollTo(0, 0)}
        className={`flex justify-center items-center m-auto z-10 bg-gray-600 text-white size-12 cursor-pointer drop-shadow-md rounded-full ${scaleClass} ${opacityClass} hover:scale-125 transition duration-200`}
      >
        <FaArrowUp size={20} />
      </div>
    </div>
  );
}
