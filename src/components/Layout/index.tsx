import React from 'react';

import Main from '../Main';
import LeftMenuBar from '../LeftMenuBar';
import RightBar from '../RightBar';

import { Container, Wrapper  } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <LeftMenuBar />
        <Main />
        <RightBar />
      </Wrapper>
    </Container>
  )
}

export default Layout;