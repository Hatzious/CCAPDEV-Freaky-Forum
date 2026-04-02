import { useState, useEffect } from 'react';

export default function EyesBlinking() {
    const [isOpen, setIsOpen] = useState(true);
    const [randomStyle, setRandomStyle] = useState({});

    useEffect(() => {
      const randomX = Math.floor(Math.random() * 16 - 8); 
      const randomY = Math.floor(Math.random() * 20 - 10); 
      const randomScale = 0.3 + Math.random() * 0.9;      
      const randomRotate = Math.floor(Math.random() * 20 - 10); 

      setRandomStyle({
          transform: `translate(${randomX}px, ${randomY}px) scale(${randomScale}) rotate(${randomRotate}deg)`,
      });

      const blink = () => {
        setIsOpen(false);

        setTimeout(() => {setIsOpen(true);}, 1500);

        const nextBlink = Math.random() * 5000 + 3000;
        setTimeout(blink, nextBlink);
      };

      const initialTimeout = setTimeout(blink, Math.random() * 3000);
      return () => clearTimeout(initialTimeout);
    }, []);

  return (
      <img 
        src={isOpen ? "/pic/OpenedEye.png" : "/pic/ClosedEye.png"} 
        alt="Eye"
        style={randomStyle}
        className="w-full h-full object-cover transition-opacity duration-100"
      />
  );
}