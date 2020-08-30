import styled, { css } from 'styled-components';
import { Squirrel, Home, Bell, Heart, Mail, Person, SignOut, Pencil  } from '../../styles/icons';

const iconStyle = css`
  width: 24.5px;
  height: 24.5px;
  color: var(--color-white);
  flex-shrink: 0;
`;

export const Container = styled.div`
  display: none;

  @media(min-width: 500px) {
    position: sticky;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 9px 19px 20px;
    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(Squirrel)`
  width: 36px;
  height: 36px;
  margin-bottom: 20px;

  &, > svg path {
    color: var(--color-twitter);
    fill: var(--color-twitter);
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 8.25px 0;
  outline: 0;

  > span {
    display: none;
  }

  & + button {
    margin-top: 16.5px;
  }

  & + button:last-child {
    margin-top: 33px;
    width: 40px;
    height: 40px;

    > span {
      display: none;
    }
  }

  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background: var(--color-twitter-dark-hover);
  }

  &:hover, &.active {
    span, svg {
      color: var(--color-twitter);
      fill: var(--color-twitter);
    }
  }

  @media(min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;
      font-weight: bold;
      font-size: 19px;
    }

    padding-right: 10px;
    padding-left: 10px;

    & + button:last-child {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }
`;

export const PencilIcon = styled(Pencil)`
  @media(min-width: 1280px) {
    display: none;
  }
`;

export const BottomSide = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  > img {
    width: 39px;
    height: 39px;
    flex-shrink: 0;
    border-radius: 50%;
  }
`;

export const ProfileData = styled.div`
  display: none;

  @media(min-width: 1280px) {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-size: 14px;

    > span {
      color: var(--color-gray);
    }
  }
`;

export const HomeIcon = styled(Home)`
  ${iconStyle};
`;

export const BellIcon = styled(Bell)`
  ${iconStyle};
`;

export const EmailIcon = styled(Mail)`
  ${iconStyle};
`;

export const FavoriteIcon = styled(Heart)`
  ${iconStyle};
`;

export const ProfileIcon = styled(Person)`
  ${iconStyle};
`;

export const ExitIcon = styled(SignOut)`
  display: none;

  @media(min-width: 1280px) {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-left: 30px;
    color: var(--color-white);
    cursor: pointer;

    &:hover {
      > path {
        color: var(--color-gray);
      }
    }

  }
`;