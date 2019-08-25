import React from 'react';
import mouseIcon from './icons/mouseIcon.svg';
import timeIcon from './icons/timeIcon.svg';
import viewsIcon from './icons/viewsIcon.svg';
import useMouseDistance from './hooks/useMouseDistance';
import usePageVisits from './hooks/usePageVisits';
import usePageMilliseconds from './hooks/usePageMilliseconds';
import millisecondsToTime from './utils/millisecondsToTime';
import styled from 'styled-components';
import { usePageVisitsCode, usePageMillisecondsCode, useMouseDistanceCode } from './assets/snippits/hookCodeSnippits';
import Article from './components/Article';

const Container = styled('main')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  min-height: 100vh;
  overflow-x: hidden;
`;

const Header = styled('header')`
  margin: 24px;
  h1 {
    font-size: 44px;
  }
`;

const Footer = styled('footer')`
  padding: 24px;
  font-weight: bold;
`;

const App: React.FC = () => {
  const [mouseDistance] = useMouseDistance();
  const [pageVisits] = usePageVisits();
  const [pageMilliseconds] = usePageMilliseconds();

  return (
    <Container>
      <Header>
        <h1>React Custom Hook Examples</h1>
      </Header>
      <Article
        heading="Page Visits"
        iconSource={viewsIcon}
        iconAlt="Views Icon"
        value={pageVisits}
        codeSnippit={usePageVisitsCode}
      />
      <Article
        heading="Time on Page"
        iconSource={timeIcon}
        iconAlt="Time Icon"
        value={millisecondsToTime(pageMilliseconds)}
        codeSnippit={usePageMillisecondsCode}
      />
      <Article
        heading="Mouse Distance"
        iconSource={mouseIcon}
        iconAlt="Mouse Icon"
        value={`${mouseDistance}px`}
        codeSnippit={useMouseDistanceCode}
      />
      <Footer>
        by Rowan Carmichael - check out the code on Github <a href="https://github.com/RowanCarmichael/react-custom-hooks">here</a>
      </Footer>
    </Container>
  );
}

export default App;
