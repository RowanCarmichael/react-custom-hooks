import { useState, useEffect } from 'react';

const PAGE_VISITS_KEY = 'pageVisits';

const usePageVisits = () => {
  const [pageVisits] = useState(parseInt(localStorage.getItem(PAGE_VISITS_KEY) || '1'));

  useEffect(() => {
    localStorage.setItem(PAGE_VISITS_KEY, (pageVisits + 1).toString());
  }, [pageVisits]);

  return [pageVisits];
}

export default usePageVisits;
