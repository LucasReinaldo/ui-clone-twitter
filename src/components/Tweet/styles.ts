import styled, { css } from 'styled-components';
import { CommentDiscussion, Zap, Heart, Rocket, Share } from '../../styles/icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
  border-bottom: 1px solid var(--color-outline);
  max-width: 100%;
`;

export const Retweet = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: var(--color-gray);
`;

export const ZapIcon = styled(Rocket)`
  width: 16px;
  height: 16px;
  margin: 0 9px 0 35px;
`;

export const TweetBody = styled.div`
  display: flex;
  margin-top: 3px;
  position: relative;
`;

export const Avatar = styled.div`

  > img {
    width: 49px;
    height: 49px;
    border-radius: 50%;
    flex-shrink: 0;
    background: var(--color-gray);

    position: absolute;
    top: 0;
    left: 0;

    transition: opacity 0.3s;

    &:hover {
      opacity: .9;
    }
  }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2px;
    padding-left: 59px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  white-space: nowrap;

  > strong {
    margin-right: 5px;
  }

  > span, time {
    color: var(--color-gray);
  }

  > strong, span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  background: var(--color-gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

export const ImageContent = styled.div`
  > img {
    margin-top: 12px;
    width: 100%;
    height: min(285px, max(175px, 41vw));

    background: var(--color-outline);
    border-radius: 14px;

    cursor: pointer;
    opacity: 1;
    transition: opacity 0.3s;

    &:hover {
      opacity: .9;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%;

  > div {
    cursor: pointer;

    opacity: 1;
    transition: opacity 0.3s;

    &:hover {
      opacity: .9;
    }
  }

  @media(min-width: 330px) {
    width: 63%;
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  > svg {
    margin-right: 5px;
  }

  &:nth-child(2) {
    &, > svg path {
      color: var(--color-retweet);
      fill: var(--color-retweet);
    }
  }

  &:nth-child(3) {
    &, > svg path {
      color: var(--color-like);
      fill: var(--color-like);
    }
  }
`;

const iconStyle = css`
  width: 19px;
  height: 19px;
  fill: var(--color-gray);
`;

export const CommentIcon = styled(CommentDiscussion)`
  ${iconStyle};
`;

export const RetweetIcon = styled(Zap)`
  ${iconStyle};
`;

export const LikeIcon = styled(Heart)`
  ${iconStyle};
`;

export const ShareIcon = styled(Share)`
  ${iconStyle};
`;


