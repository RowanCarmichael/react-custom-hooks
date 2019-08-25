import { useState, useEffect } from 'react';
import getMouseDistance from '../utils/getMouseDistance';

const useMouseDistance = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mouseDistance, setMouseDistance] = useState(0);

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      if (position.x && position.y) {
        setMouseDistance(
          mouseDistance + getMouseDistance(position.x, position.y, event.clientX, event.clientY)
        );
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