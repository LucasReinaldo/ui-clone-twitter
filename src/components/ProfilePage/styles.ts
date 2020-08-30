import styled, { css } from 'styled-components';
import { Cake, Location } from '../../styles/icons';
import Button from '../Button';

const iconStyle = css`
  width: 20px;
  height: 20px;
  color: var(--color-gray);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 199px);
  background: var(--color-twitter);
  position: relative;
`;

export const ProfileImageContainer = styled.div`
  /* width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw)); */
  /* background: var(--color-gray); */
  /* border: 3.75px solid var(--color-primary);
  border-radius: 50%; */

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
  z-index: 3;

  > img {
    width: max(45px, min(135px, 22vw));
    height: max(45px, min(135px, 22vw));
    border: 3.75px solid var(--color-primary);
    border-radius: 50%;

    &:hover {
      opacity: .8;
    }
  }  
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;
  display: flex;
  flex-direction: column;
  position: relative;
  
  > h1 {
    font-weight: 800;
    font-size: 19px;
  }

  > h2 {
    font-weight: medium;
    font-size: 15px;
    color: var(--color-gray);
  }

  > p {
    font-size: 15px;
    margin-top: 11px;

      > a {
      text-decoration: none;
      color: var(--color-twitter);
    }
  }

  > ul {
    list-style: none;
    margin: 10px 0;

    > li {
      font-size: 15px;
      color: var(--color-gray);
      display: flex;
      align-content: center;
      line-height: 22px;

      > svg {
        margin-right: 5px;
      }
    }
  }
`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;
  padding: 4px 16px;
  font-size: 13px;

  @media(min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;

export const LocationIcon = styled(Location)`
  ${iconStyle};
  fill: #f8774f;
`;

export const CakeIcon = styled(Cake)`
  ${iconStyle};
  fill: #F9A8B2;
`;

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--color-gray);

    & + span {
      margin-left: 20px; 
    }
  }
`;
