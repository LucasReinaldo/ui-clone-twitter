import React from 'react';

import { 
  Container,
  Retweet,
  ZapIcon,
  TweetBody,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  ShareIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>

      <Retweet>
        <ZapIcon />
        Retweeted
      </Retweet>

      <TweetBody>

        <Avatar>
          <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="Avatar Adorables"/>
        </Avatar>

        <Content>
          <Header>
            <strong>LucasReinaldo</strong>
            <span>@OPENTOWORK</span>
            <Dot />
            <time>27 June</time>
          </Header>

          <Description>DON'T WISH FOR IT, WORK FOR IT!</Description>

          <ImageContent>
            <img src="https://workingnation.com/wp-content/uploads/2018/04/shutterstock_459867970.jpg" alt="Content"/>
          </ImageContent>

          <Icons>
            <Status>
              <CommentIcon />
              98
            </Status>
            <Status>
              <RetweetIcon />
              98
            </Status>
            <Status>
              <LikeIcon />
              982
            </Status>
            <Status>
              <ShareIcon />
            </Status>
          </Icons>

        </Content>
      </TweetBody>
    </Container>
  )
}

export default Tweet;