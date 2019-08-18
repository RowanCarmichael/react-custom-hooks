import { useState, useEffect } from 'react';

const useMouseDistance = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mouseDistance, setMouseDistance] = useState(0);

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      if (position.x && position.y) {
        setMouseDistance(mouseDistance + Math.round(Math.sqrt(Math.pow(position.y - event.clientY, 2) + Math.pow(position.x - event.clientX, 2))));
      }
      setPosition({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    }
  }, [position, mouseDistance]);

  return [mouseDistance];
}

export default useMouseDistance;