import React from 'react';
import StickyBox from 'react-sticky-box';

import FollowSuggestion from '../FollowSuggestion';
import News from '../News';
import RightBarList from '../RightBarList';

import {
  Container,
  SearchBarContainer,
  SearchInput,
  SearchIcon,
  RightBarBody,
} from './styles';

const RightBar: React.FC = () => {
  return (
    <Container>
      <SearchBarContainer>
        <SearchInput placeholder="Search Twitter" />
        <SearchIcon />
      </SearchBarContainer>

      <StickyBox>
        <RightBarBody>
          <RightBarList
            title="You might like"
            elements={[
              <FollowSuggestion name="Lucas Melo" nickname="@LucasMelo" />,
              <FollowSuggestion name="Lucas Melo" nickname="@LucasMelo" />,
              <FollowSuggestion name="Lucas Melo" nickname="@LucasMelo" />,
            ]}
          />
          <RightBarList
            title="What's happening"
            elements={[<News />, <News />, <News />]}
          />
          <RightBarList
            title="What's happening"
            elements={[<News />, <News />, <News />]}
          />
          <RightBarList
            title="What's happening"
            elements={[<News />, <News />, <News />]}
          />
          <RightBarList
            title="What's happening"
            elements={[<News />, <News />, <News />]}
          />
        </RightBarBody>
      </StickyBox>
    </Container>
  );
};

export default RightBar;
