import { useState, useEffect } from 'react';

const usePageMilliseconds = () => {
  const [date, setDate] = useState(Date.now());
  const [pageMilliseconds, setPageMilliseconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPageMilliseconds(Date.now() - date + pageMilliseconds);
      setDate(Date.now());
    }, 100);

    return () => {
      clearInterval(timer);
    }
  }, [date, pageMilliseconds]);

  return [pageMilliseconds];
}

export default usePageMilliseconds;