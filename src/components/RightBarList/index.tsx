import React from 'react';

import { Container, Item, Title } from './styles';

interface IProps {
  title: string;
  elements: React.ReactNode[];
}

const RightBarList: React.FC<IProps> = ({title, elements}) => {

  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>

      {elements.map((el, index) => (
        <Item key={index}>{el}</Item>
      ))}
    </Container>
  );
};

export default RightBarList;
