import React from 'react';
import styled from 'styled-components';

const Icon = styled('img')`
  min-width: 40px;
  min-height: 40px;
  margin: 12px;
`;

const Container = styled('article')`
  width: 80vw;
  padding: 40px 0;
`;

const CodeBlock = styled('pre')`
  overflow-x: scroll;
  background: whitesmoke;
  border: solid 1px lightgrey;
  border-radius: 4px;
  padding: 0 12px;
`;

const Span = styled('span')`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: normal;
`;

const ArticleHeader = styled('h2')`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

type TArticleProps = {
  heading: string;
  iconSource: string;
  iconAlt: string;
  value: React.ReactNode;
  codeSnippit: string;
}

const Article: React.FC<TArticleProps> = ({
  heading,
  iconSource,
  iconAlt,
  value,
  codeSnippit,
}) => {
  return (
    <Container>
      <ArticleHeader>
        {heading}
        <Span>
          <Icon src={iconSource} alt={iconAlt} /> {value}
        </Span>
      </ArticleHeader>
      <CodeBlock>
        <code>
          {codeSnippit}
        </code>
      </CodeBlock>
    </Container>
  );
}

export default Article;
