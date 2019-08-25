export const usePageMillisecondsCode = `
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
`;

export const useMouseDistanceCode = `
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
`;

export const usePageVisitsCode = `
const usePageVisits = () => {
  const [pageVisits] = useState(parseInt(localStorage.getItem(PAGE_VISITS_KEY) || '1'));

  useEffect(() => {
    localStorage.setItem(PAGE_VISITS_KEY, (pageVisits + 1).toString());
  }, [pageVisits]);

  return [pageVisits];
}
`;