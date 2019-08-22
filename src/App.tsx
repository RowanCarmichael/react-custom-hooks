import React from 'react';
import mouseIcon from './icons/mouseIcon.svg';
import timeIcon from './icons/timeIcon.svg';
import viewsIcon from './icons/viewsIcon.svg';
import './App.css';
import useMouseDistance from './hooks/useMouseDistance';
import usePageVisits from './hooks/usePageVisits';
import usePageMilliseconds from './hooks/usePageMilliseconds';

const millisecondsToTime = (milliseconds: number) => new Date(milliseconds).toISOString().slice(11, -5);

const App: React.FC = () => {
  const [mouseDistance] = useMouseDistance();
  const [pageVisits] = usePageVisits();
  const [pageMilliseconds] = usePageMilliseconds();

  return (
    <div className="App">
      <header className="App-header">
        <img src={mouseIcon} alt="mouseIcon" />
        <span>{mouseDistance}</span>
        <span>pixels travelled</span>
        <img src={timeIcon} alt="timeIcon" />
        <span>{millisecondsToTime(pageMilliseconds)}</span>
        <span>milliseconds</span>
        <img src={viewsIcon} alt="viewsIcon" />
        <span>{pageVisits}</span>
        <span>views</span>
      </header>
    </div>
  );
}

export default App;
